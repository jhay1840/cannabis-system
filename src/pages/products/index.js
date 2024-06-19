import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import DashboardWrapper from 'src/components/DashboardWrapper'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Magnify from 'mdi-material-ui/Magnify'
import CardProduct from 'src/views/cards/CardProduct'

const transformImageUrl = imageUrl => {
  if (!imageUrl || typeof imageUrl !== 'string') {
    return '/images/avatars/cannabis-product-default.jpg'
  }
  return imageUrl.replace(/\\/g, '/')
}

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [initialLoadCount, setInitialLoadCount] = useState(6)
  const [loadMoreCount, setLoadMoreCount] = useState(6)
  const [debounceTimer, setDebounceTimer] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    const timer = setTimeout(() => {
      handleSearch()
    }, 500) // Adjust debounce delay as needed (e.g., 500 milliseconds)
    setDebounceTimer(timer)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisProducts`, {
        withCredentials: true
      })
      setSearchResult(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleLoadMore = () => {
    setInitialLoadCount(prevCount => prevCount + loadMoreCount)
  }

  const handleSearch = async () => {
    if (searchQuery.length > 2) {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisProducts?search=${searchQuery}`,
          {
            withCredentials: true
          }
        )
        setSearchResult(response.data)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    } else {
      fetchData()
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
            <Link href='/products/add-product' passHref>
              <Button size='large' color='success' variant='contained'>
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
                  <TextField
                    fullWidth
                    label='Search Product'
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
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label='Category' value='' onChange={() => {}} required>
                      <MenuItem value=''>Select</MenuItem>
                      {/* Add menu items dynamically */}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {searchResult.length > 0 ? (
          searchResult.slice(0, initialLoadCount).map(product => (
            <Grid item xs={12} sm={6} md={3} key={product._id}>
              <CardProduct
                imageUrl={transformImageUrl(product.imageURL)}
                title={product.name}
                price={product.salePrice ? `${product.salePrice} token` : 'Price not set'}
                url={`/products/${product._id}`}
                stock={product.stock ? `${product.stock} in stock` : 'Out of stock'}
                colors={product.stock ? 'success.main' : 'error'}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant='body1'>No products found</Typography>
          </Grid>
        )}

        {initialLoadCount < searchResult.length && (
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button variant='contained' onClick={handleLoadMore}>
                Load More
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </DashboardWrapper>
  )
}

export default Products
