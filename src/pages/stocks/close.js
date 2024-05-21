import { useState, useEffect } from 'react'
import axios from 'axios'

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

const CloseStock = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [tableData, setTableData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    if (searchQuery.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/protected/cannabisProducts', {
            params: { search: searchQuery },
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
      setTableData([...tableData, { ...selectedProduct, endOfDayQty: '', startOfDayQty: selectedProduct.stock || 0 }])
      setSelectedProduct(null) // Clear the selected product after adding
      setSearchQuery('') // Clear the search input after adding
    }
  }
  const handleSaveData = async () => {
    try {
      // Extracting required fields from tableData
      const dataToSend = tableData.map(({ _id, endOfDayQty, startOfDayQty, usage }) => ({
        _id,
        endOfDayQty,
        startOfDayQty,
        usage
      }))

      // Sending the extracted data to the backend
      await axios.post('http://localhost:5000/api/protected/saveClosingStock', dataToSend, {
        withCredentials: true
      })

      console.log('Data saved successfully')
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>Add Closing stocks</Typography>
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
