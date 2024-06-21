import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Autocomplete } from '@mui/material'
import DashboardWrapper from 'src/components/DashboardWrapper'

// ** Demo Components Imports
import TableClosing from 'src/views/tables/TableClosing'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'


// Function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  
return `${year}-${month}-${day}`
}

const CloseStock = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [tableData, setTableData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const router = useRouter()
  const [closeDate, setCloseDate] = useState(getTodayDate())
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  useEffect(() => {
    if (searchQuery.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisProducts`, {
            params: { search: searchQuery },
            headers: {
              Authorization: `Bearer ${token}` // Include JWT token in Authorization header
            },
            withCredentials: true
          })
          setSearchResult(response.data)
        } catch (error) {
          console.error('Error fetching product suggestions:', error)
        }
      }
      fetchSuggestions()
    } else {
      setSearchResult([])
    }
  }, [searchQuery])

  const handleSearch = event => {
    event.preventDefault()
    if (selectedProduct && !tableData.some(item => item._id === selectedProduct._id)) {
      setTableData([
        ...tableData,
        { ...selectedProduct, endOfDayQty: selectedProduct.stock || 0, startOfDayQty: selectedProduct.stock || 0 }
      ])
      setSelectedProduct(null) // Clear the selected product after adding
      setSearchQuery('') // Clear the search input after adding
    }
  }

  const handleSaveData = async () => {
    try {
      // Check if any item is missing required data (empty fields)
      if (tableData.some(item => !item.endOfDayQty) || tableData.some(item => !item.startOfDayQty)) {
        alert('Please fill in all fields before saving.')
        
return // Exit function if any item is missing required data
      }

      // Check if endOfDayQty is less than startOfDayQty for any item
      if (tableData.some(item => Number(item.endOfDayQty) > Number(item.startOfDayQty))) {
        alert('End of day quantity cannot be greater than start of day quantity.')
        
return // Exit function if invalid data is found
      }

      // Extracting required fields from tableData
      const dataToSend = tableData.map(({ _id, name, endOfDayQty, startOfDayQty, usage }) => ({
        productId: _id,
        name,
        endOfDayQty,
        startOfDayQty,
        usage,
        closeDate
      }))

      // Sending the extracted data to the backend
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/saveClosingStock`, dataToSend, {
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in Authorization header
        },
        withCredentials: true
      })

      console.log('Data saved successfully')
      router.push(`/sales-report`)
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant='h5'>Add Closing stocks</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} sx={{}}>
            <TextField
              fullWidth
              label='Date'
              type='date'
              value={closeDate}
              onChange={e => setCloseDate(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position='start'></InputAdornment>
              }}
              required
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <form onSubmit={handleSearch}>
                    <Autocomplete
                      freeSolo
                      options={searchResult}
                      getOptionLabel={option => option.name}
                      onChange={(event, newValue) => {
                        setSelectedProduct(newValue)
                      }}
                      inputValue={searchQuery}
                      onInputChange={(event, newInputValue) => {
                        setSearchQuery(newInputValue)
                      }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          fullWidth
                          label='Search Product'
                          placeholder='Product Name'
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Magnify />
                              </InputAdornment>
                            )
                          }}
                        />
                      )}
                    />
                    <Button type='submit' variant='contained' size='large' sx={{ mt: 4 }}>
                      Add
                    </Button>
                  </form>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardHeader title='Products' titleTypographyProps={{ variant: 'h6' }} />
            <TableClosing data={tableData} setTableData={setTableData} />
          </Card>
        </Grid>
        <Button type='button' color='success' variant='contained' size='large' sx={{ mt: 4 }} onClick={handleSaveData}>
          Save Closing stocks
        </Button>
      </Grid>
    </DashboardWrapper>
  )
}

export default CloseStock
