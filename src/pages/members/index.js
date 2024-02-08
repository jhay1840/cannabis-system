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
import DashboardWrapper from 'src/components/DashboardWrapper'
// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableMembers'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

const add_member = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchQueryID, setSearchQueryID] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    // Fetch data from your API or any other source
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/protected/members', {
          withCredentials: true // Add this option
        })
        setTableData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleSearch = async event => {
    event.preventDefault()
    try {
      let response
      if (searchQuery.trim() === '') {
        // If search query is empty, fetch default data
        response = await axios.get('http://localhost:5000/api/protected/members', {
          withCredentials: true // Add this option
        })
      } else {
        // Otherwise, perform search
        response = await axios.get('http://localhost:5000/api/protected/members/search', {
          params: { name: searchQuery },
          withCredentials: true
        })
      }

      setTableData(response.data)
      // Clear the other form's search query
      setSearchQueryID('')
    } catch (error) {
      console.error('Error while searching members:', error)
      // Handle the error, e.g., show an error message to the user
    }
  }

  const handleSearchbyID = async event => {
    event.preventDefault()
    try {
      let response
      if (searchQueryID.trim() === '') {
        // If search query is empty, fetch default data
        response = await axios.get('http://localhost:5000/api/protected/members', {
          withCredentials: true // Add this option
        })
      } else {
        // Otherwise, perform search
        response = await axios.get('http://localhost:5000/api/protected/members/searchbyid', {
          params: { id: searchQueryID },
          withCredentials: true
        })
      }

      setTableData(response.data)
      // Clear the other form's search query
      setSearchQuery('')
    } catch (error) {
      console.error('Error while searching members:', error)
      // Handle the error, e.g., show an error message to the user
    }
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>Members</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <form onSubmit={handleSearchbyID}>
                    <TextField
                      fullWidth
                      label='SCAN CHIP/CARD'
                      placeholder='ID Number'
                      value={searchQueryID}
                      onChange={e => setSearchQueryID(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Magnify />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Button type='submit' variant='contained' size='large' sx={{ mt: 4 }}>
                      Search by id
                    </Button>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form onSubmit={handleSearch}>
                    <TextField
                      fullWidth
                      label='Search'
                      placeholder='Name'
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Magnify />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Button type='submit' variant='contained' size='large' sx={{ mt: 4 }}>
                      Search by name
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
            <CardHeader title='Members' titleTypographyProps={{ variant: 'h6' }} />
            <TableBasic data={tableData} />
          </Card>
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default add_member
