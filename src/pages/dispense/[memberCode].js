import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { Magnify, Close } from 'mdi-material-ui'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'

// ** Custom Components Imports
import CardProductDispense from 'src/views/cards/CardProductDispense'
import TableBasic from 'src/views/tables/TableMembers'
import DashboardWrapper from 'src/components/DashboardWrapper'
import TableDispenseTransaction from 'src/views/tables/TableDispenseTransaction'

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

const MemberCode = () => {
  const [tableData, setTableData] = useState([])
  const [dispenseData, setDispenseData] = useState([])
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [memberData, setMemberData] = useState(null)
  const [memberCodeVar, setMemberCodeVar] = useState(null)
  const [totalWeight, setTotalWeight] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [estimatedCredits, setEstimatedCredits] = useState(0)
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [initialLoadCount, setInitialLoadCount] = useState(6)
  const [loadMoreCount, setLoadMoreCount] = useState(6)
  const [debounceTimer, setDebounceTimer] = useState(null)
  const [openAlert, setOpenAlert] = useState(false)

  const [openModal, setOpenModal] = useState(false) // State for modal visibility

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const router = useRouter()

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const { memberCode } = router.query
        const response = await axios.get(`http://localhost:5000/api/protected/members/${memberCode}`, {
          withCredentials: true
        })
        if (response.data && response.data.length > 0) {
          setMemberData(response.data[0])
          setMemberCodeVar(memberCode)
        }
      } catch (error) {
        console.error('Error fetching member data:', error)
      }
    }

    if (router.query.memberCode) {
      fetchMemberData()
      fetchTransactionData()
    }
  }, [router.query.memberCode])

  useEffect(() => {
    fetchData()
  }, [])
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
  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    const timer = setTimeout(() => {
      handleSearch()
    }, 500)
    setDebounceTimer(timer)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const handleLoadMore = () => {
    setInitialLoadCount(prevCount => prevCount + loadMoreCount)
  }
  const fetchTransactionData = async () => {
    const { memberCode } = router.query
    const memberId = memberCode
    console.log(memberId)
    try {
      const response = await axios.get('http://localhost:5000/api/protected/dispenseTransactions', {
        params: { memberId },
        withCredentials: true
      })

      // Assuming response.data is an array
      if (response.data && response.data.length > 0) {
        setDispenseData(response.data)
      }
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching transaction data:', error)
    }
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
      const existingProductIndex = prevProducts.findIndex(product => product._id === productId)
      if (existingProductIndex !== -1) {
        return prevProducts.map((product, index) =>
          index === existingProductIndex ? { ...product, weight: newWeight } : product
        )
      } else {
        return [...prevProducts, { _id: productId, weight: newWeight }]
      }
    })
  }

  const handlePriceChange = (productId, newPrice) => {
    setProducts(prevProducts => {
      const existingProductIndex = prevProducts.findIndex(product => product._id === productId)
      if (existingProductIndex !== -1) {
        return prevProducts.map((product, index) =>
          index === existingProductIndex ? { ...product, price: newPrice } : product
        )
      } else {
        return [...prevProducts, { _id: productId, price: newPrice }]
      }
    })
  }

  const calculateTotals = () => {
    let totalWeight = 0
    let totalPrice = 0
    products.forEach(product => {
      totalWeight += product.weight || 0
      totalPrice += product.price || 0
    })
    const estimate = memberData ? memberData.credits - totalPrice : 0
    setTotalWeight(totalWeight.toFixed(4))
    setTotalPrice(totalPrice.toFixed(2))
    setEstimatedCredits(estimate)
  }

  useEffect(() => {
    calculateTotals()
  }, [products, memberData])

  const handleDispense = () => {
    if (estimatedCredits < 0) {
      handleOpenModal()
    } else if (products.every(product => product.weight === 0)) {
      setOpenAlert(true)
    } else {
      const { memberCode } = router.query
      // Filter out products with weight zero and create a new array with only ID and weight information
      const productsToSend = products
        .filter(({ weight }) => weight > 0)
        .map(({ _id, weight }) => ({
          _id,
          weight: Number(weight.toFixed(4)) // Round weight to 4 decimal places
        }))
      const queryString = `?products=${JSON.stringify(productsToSend)}`
      // Convert the new array to a JSON string for the query string
      router.push(`/dispense/checkout/${memberCode}${queryString}`)
    }
  }

  const handleAddAsGift = () => {
    const { memberCode } = router.query
    router.push(`/dispense/checkout/${memberCode}`)
  }
  if (!memberData) {
    return <p>Loading...</p>
  }
  const expiryDate = memberData.expiryDate
  const isExpired = expiryDate && new Date(expiryDate) < new Date()
  const expiryWarning = !expiryDate ? 'Expiry date not set' : isExpired ? 'Membership expired' : ''
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
                      <Typography variant='body2'>Expiry: {formatDate(memberData.expiryDate)}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Link href={`/members/credit/${memberCodeVar}`} passHref>
                      <Button size='large' variant='outlined' color='success'>
                        Add Credit
                      </Button>
                    </Link>
                    <Link href={`/members/profile/${memberCodeVar}`} passHref>
                      <Button sx={{ ml: 5 }} size='large' variant='outlined'>
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
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 600, color: estimatedCredits < 0 ? 'error.main' : 'text.primary' }}
                  >
                    <Box component='span'>Estimated Balance:</Box> {estimatedCredits}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {expiryWarning && (
                    <Alert severity='warning'>
                      <AlertTitle>{expiryWarning}</AlertTitle>
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box>
                    <Button size='large' variant='contained' color='success' onClick={handleDispense}>
                      Dispense
                    </Button>
                    <Link href={`/dispense`} passHref>
                      <Button sx={{ ml: 5 }} size='large' variant='contained' color='error'>
                        Cancel
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {openAlert ? (
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Alert
              severity='error'
              sx={{ '& a': { fontWeight: 400 } }}
              action={
                <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                  <Close fontSize='inherit' />
                </IconButton>
              }
            >
              <AlertTitle>Please add dispensed products</AlertTitle>
            </Alert>
          </Grid>
        ) : null}
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
              <TableDispenseTransaction data={dispenseData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant='h6' component='h2'>
            Insufficient Balance
          </Typography>
          <Typography sx={{ mt: 2 }}>Make it as a gift?</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant='contained'
              color='success'
              onClick={() => {
                // Handle "Add as a gift" logic here
                handleAddAsGift()
              }}
            >
              Add as a Gift
            </Button>
            <Button variant='contained' color='error' onClick={handleCloseModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </DashboardWrapper>
  )
}

export default MemberCode
