import { useState, useEffect } from 'react'
import axios from 'axios'
import router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import CardProductDispense from 'src/views/cards/CardProductDispense'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableMembers'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
import DashboardWrapper from 'src/components/DashboardWrapper'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 150,
  height: 150,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))
const transformImageUrl = imageUrl => {
  if (!imageUrl || typeof imageUrl !== 'string') {
    return '/images/avatars/cannabis-product-default.jpg'
  }
  return imageUrl.replace(/\\/g, '/')
}
const formatDate = dateString => {
  if (!dateString || isNaN(new Date(dateString))) {
    return '' // Return empty string for invalid or empty dates
  }

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
const calculateAge = dob => {
  const birthDate = new Date(dob)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }

  return age
}

const member_code = () => {
  const [tableData, setTableData] = useState([])
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [memberData, setMemberData] = useState(null)
  const [memberCodeVar, setMemberCodeVar] = useState(null)
  const [totalWeight, setTotalWeight] = useState(0) // State for total weight
  const [totalPrice, setTotalPrice] = useState(0) // State for total weight

  const [products, setProducts] = useState([]) // State for products

  const router = useRouter()
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

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const { memberCode } = router.query

        const response = await axios.get(`http://localhost:5000/api/protected/members/${memberCode}`, {
          withCredentials: true
        })
        // Assuming response.data is an array
        if (response.data && response.data.length > 0) {
          setMemberData(response.data[0])
          setMemberCodeVar(memberCode)
        }
      } catch (error) {
        console.error('Error fetching member data:', error)
      }
    }

    fetchMemberData()
  }, [router.query.memberCode])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/protected/cannabisProducts', {
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
        const response = await axios.get(`http://localhost:5000/api/protected/cannabisProducts?search=${searchQuery}`, {
          withCredentials: true
        })
        setSearchResult(response.data)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    } else {
      fetchData()
    }
  }
  const handleWeightChange = (productId, newWeight) => {
    setProducts(prevProducts => {
      // Check if the product with the given productId already exists in the array
      const existingProductIndex = prevProducts.findIndex(product => product._id === productId)

      if (existingProductIndex !== -1) {
        // If the product exists, update its weight
        return prevProducts.map((product, index) =>
          index === existingProductIndex ? { ...product, weight: newWeight } : product
        )
      } else {
        // If the product doesn't exist, add it to the array
        return [...prevProducts, { _id: productId, weight: newWeight }]
      }
    })
    console.log(products)
  }
  const handlePriceChange = (productId, newPrice) => {
    setProducts(prevProducts => {
      // Check if the product with the given productId already exists in the array
      const existingProductIndex = prevProducts.findIndex(product => product._id === productId)

      if (existingProductIndex !== -1) {
        // If the product exists, update its weight
        return prevProducts.map((product, index) =>
          index === existingProductIndex ? { ...product, price: newPrice } : product
        )
      } else {
        // If the product doesn't exist, add it to the array
        return [...prevProducts, { _id: productId, price: newPrice }]
      }
    })
  }

  // Function to calculate total weight
  const calculateTotalWeight = () => {
    let total = 0
    products.forEach(product => {
      total += product.weight
    })
    setTotalWeight(total)
  }
  const calculateTotalPrice = () => {
    let total = 0
    products.forEach(product => {
      total += product.price
    })
    setTotalPrice(total)
  }

  // Calculate total weight initially and whenever product weights change
  useEffect(() => {
    calculateTotalWeight()
    calculateTotalPrice()
  }, [products])
  if (!memberData) {
    return <p>Loading...</p>
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography variant='h5'>Dispense</Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ImgStyled src={imgSrc} alt='Profile Pic' />
                    <Box>
                      <Typography variant='h6'>
                        {memberData.firstName} {memberData.lastName}
                      </Typography>
                      <Typography variant='subtitle1'>{calculateAge(memberData.dateOfBirth)} y.o</Typography>
                      <Typography variant='body2'>Expiry: {formatDate(memberData.userInfo[0]?.expiryDate)}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Link href={`/members/credit/${memberCodeVar}`} passHref>
                      <Button size='large' variant='outlined' href='#text-buttons' color='success'>
                        Add Credit
                      </Button>
                    </Link>
                    <Link href={`/members/profile/${memberCodeVar}`} passHref>
                      <Button sx={{ ml: 5 }} size='large' variant='outlined' href='#text-buttons'>
                        View Profile
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Total Price:
                    </Box>{' '}
                    {totalPrice}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Total Weight:
                    </Box>{' '}
                    {totalWeight}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Available Credits:
                    </Box>{' '}
                    {memberData.credits}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Estimated Balance:
                    </Box>{' '}
                    0
                  </Typography>
                </Grid>

                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box>
                    <Link href={`/members/credit/${memberCodeVar}`} passHref>
                      <Button size='large' variant='contained' href='#text-buttons' color='success'>
                        Dispense
                      </Button>
                    </Link>
                    <Link href={`/dispense`} passHref>
                      <Button sx={{ ml: 5 }} size='large' variant='contained' href='#text-buttons' color='error'>
                        Cancel
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid container spacing={6} sx={{ pl: 6, pt: 4 }}>
          <Grid item xs={6}></Grid>
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
            searchResult.slice(0, initialLoadCount).map(product =>
              // Only render Grid item if salePrice is defined and greater than zero
              product.salePrice && parseFloat(product.salePrice) > 0 ? (
                <Grid item xs={12} sm={6} md={3} key={product._id}>
                  <CardProductDispense
                    imageUrl={transformImageUrl(product.imageURL)}
                    title={product.name}
                    price={product.salePrice}
                    key={product._id}
                    productId={product._id}
                    stock={product.stock ? `${product.stock} in stock` : 'Out of stock'}
                    colors={product.stock ? 'success.main' : 'error'}
                    onWeightChange={handleWeightChange}
                    onPriceChange={handlePriceChange}
                  />
                </Grid>
              ) : null
            )
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

        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant='h5'>Dispense History</Typography>
              <TableBasic data={tableData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default member_code
