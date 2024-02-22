import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/dist/client/link'

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
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

// ** Demo Components Imports
import CardProduct from 'src/views/cards/CardProduct'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

const products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [filter, setFilter] = useState([])

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

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant='h5'>Products</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Link href={`/products/add-product`} passHref>
              <Button size='large' variant='contained' href={`/products/add-product`}>
                Add Products
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <form onSubmit={handleSearch}>
                    <TextField
                      fullWidth
                      label='Search Producct'
                      placeholder='Product Name'
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
                      Search by id
                    </Button>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label='Gender' value={filter} onChange={e => setFilter(e.target.value)} required>
                      <MenuItem value='test'>test</MenuItem>
                      <MenuItem value='test2'>test2</MenuItem>
                      <MenuItem value='test3'>test3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CardProduct
            imageUrl='/images/cards/glass-house.png'
            title='Influencing The Influencer'
            description='Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardProduct
            imageUrl='/images/cards/glass-house.png'
            title='Influencing The Influencer'
            description='Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardProduct
            imageUrl='/images/cards/glass-house.png'
            title='Influencing The Influencer'
            description='Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.'
          />
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default products
