import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DashboardWrapper from 'src/components/DashboardWrapper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

import { CardHeader, Divider, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const CheckoutPage = () => {
  const router = useRouter()
  const { memberCode, products } = router.query
  const [memberData, setMemberData] = useState(null)
  const [comments, setComments] = useState('')
  const [checkoutDate, setCheckoutDate] = useState('')
  const [isGift, setIsGift] = useState(false)

  const [productDetails, setProductDetails] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Function to safely parse JSON data
  const parseJSON = data => {
    try {
      return JSON.parse(data)
    } catch (error) {
      // console.error('Error parsing JSON:', error)
      return null
    }
  }
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/members/${memberCode}`, {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })
        if (response.data && response.data.length > 0) {
          setMemberData(response.data[0])
        }
      } catch (error) {
        console.error('Error fetching member data:', error)
      }
    }
    const getTodayDate = () => {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0') // Months are zero-indexed
      const day = String(today.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }

    // Set checkoutDate to today's date when the component mounts
    setCheckoutDate(getTodayDate())

    fetchMemberData()
  }, [memberCode])
  // Validate and parse products data
  const parsedProducts = parseJSON(products)
  const isValidProducts = Array.isArray(parsedProducts) && parsedProducts.length > 0

  // Fetch product details using Axios

  useEffect(() => {
    console.log('useEffect triggered:', isValidProducts, parsedProducts, isFetching)

    if (!isValidProducts || isFetching) return

    setIsFetching(true)

    const fetchProductDetails = async () => {
      try {
        const productDetailsPromises = parsedProducts.map(async product => {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisProducts/${product._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}` // Include JWT token in Authorization header
              },
              withCredentials: true
            }
          )
          return response.data
        })

        const productDetailsData = await Promise.all(productDetailsPromises)
        setProductDetails(productDetailsData)
      } catch (error) {
        console.error('Error fetching product details:', error)
        setProductDetails([]) // Reset product details if there's an error
      } finally {
        setIsFetching(false)
      }
    }

    fetchProductDetails()
  }, [isValidProducts])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const orderData = {
        memberCode,
        checkoutDate,
        comments,
        isGift,
        products: parsedProducts.map(product => {
          const matchedProduct = productDetails.find(p => p._id === product._id)
          return {
            productId: product._id,
            name: matchedProduct?.name,
            category: matchedProduct?.category,
            salePrice: matchedProduct?.salePrice,
            weight: product.weight,
            subtotal: matchedProduct ? matchedProduct.salePrice * product.weight : 0
          }
        })
      }

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/checkout`, orderData, {
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in Authorization header
        },
        withCredentials: true
      })

      alert('Checkout successful')
      router.push(`/members/profile/${memberCode}`)
    } catch (error) {
      console.error('Error during checkout:', error)
      alert('Checkout failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!memberData) {
    return <p>Loading member data...</p>
  }
  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <CardHeader title='Checkout' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 5, gap: 10 }}>
                  <Box>
                    <Typography variant='h6'>
                      {memberData.firstName} {memberData.lastName} # {memberCode}
                    </Typography>

                    {isValidProducts ? (
                      <TableContainer component={Card}>
                        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                          <TableHead>
                            <TableRow>
                              <TableCell>Category</TableCell>
                              <TableCell>Product Name</TableCell>
                              <TableCell align='right'>Weight</TableCell>
                              <TableCell align='right'>Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {parsedProducts.map((product, index) => {
                              const matchedProduct = productDetails.find(p => p._id === product._id)
                              if (!matchedProduct) return null // Handle cases where matching product details are not found
                              const subtotal = matchedProduct.salePrice * product.weight
                              return (
                                <TableRow key={index}>
                                  <TableCell component='th' scope='row'>
                                    {matchedProduct.category}
                                  </TableCell>
                                  <TableCell component='th' scope='row'>
                                    {matchedProduct.name}
                                  </TableCell>
                                  <TableCell align='right'>{product.weight} g</TableCell>
                                  <TableCell align='right'>${subtotal.toFixed(2)}</TableCell>
                                </TableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    ) : (
                      <p>{products ? 'Invalid products data' : 'No products data available'}</p>
                    )}
                  </Box>
                  <Grid item xs={6}>
                    <Grid item xs={12} sx={{ pb: 5 }}>
                      <TextField
                        fullWidth
                        label='Date'
                        type='date'
                        value={checkoutDate}
                        onChange={e => setCheckoutDate(e.target.value)}
                        InputProps={{
                          startAdornment: <InputAdornment position='start'></InputAdornment>
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: 5 }}>
                      <TextField
                        fullWidth
                        label='Comments'
                        placeholder='Comments'
                        multiline
                        value={comments}
                        sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                        minRows={3}
                        onChange={e => setComments(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        label='Add this as a gift?'
                        control={<Checkbox name='gift-checkbox' />}
                        checked={isGift}
                        onChange={() => setIsGift(!isGift)}
                        sx={{ '& .MuiButtonBase-root': { paddingTop: 0, paddingBottom: 0 } }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Grid item xs={6} sx={{ pt: 10 }}>
                  <Button size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
                    Checkout
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default CheckoutPage
