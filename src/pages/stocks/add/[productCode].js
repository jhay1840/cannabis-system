// ** React Imports
import { useState, useEffect } from 'react'
import DashboardWrapper from 'src/components/DashboardWrapper'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Link from 'next/link'

import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 180,
  height: 180,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const transformImageUrl = imageUrl => {
  if (typeof imageUrl === 'string') {
    if (imageUrl === '') {
      return '/images/avatars/cannabis-product-default.jpg'
    }
    let correctedPath = imageUrl.replace(/\\/g, '/')
    // Construct the new image URL
    // return `/server/${correctedPath}`
    return correctedPath
  } else {
    console.error('Image URL must be a string.')
    return null // or handle the case appropriately
  }
}

const addStocks = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productImageUrl, setProductImageUrl] = useState('first')
  const [salePrice, setSalePrice] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/cannabis-product-default.jpg')
  const [productData, setProductData] = useState(null)
  const [productCode, setProductCode] = useState(null)
  const [amountPurchased, setAmountPurchased] = useState('0')
  const [realWeight, setRealWeight] = useState('0')
  const [growType, setGrowType] = useState('')
  const [jarWeight, setJarWeight] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('0')
  const [purchaseTotal, setPurchaseTotal] = useState('0')
  const [dispensePrice, setDispensePrice] = useState('0')
  const [dispenseTotal, setDispenseTotal] = useState('0')
  const [sampleTaste, setSampleTaste] = useState('')
  const [frDisplay, setFrDisplay] = useState('')
  const [intStash, setIntStash] = useState('')
  const [exStash, setExStash] = useState('')
  const [comments, setComments] = useState('')
  const [currStock, setCurrStock] = useState('')

  const router = useRouter()

  // Define onChange handlers for amountPurchased and purchasePrice
  const handleAmountPurchasedChange = e => {
    const value = parseFloat(e.target.value)
    setAmountPurchased(value)
    calculatePurchaseTotal(value, purchasePrice) // Calculate purchaseTotal
  }

  const handlePurchasePriceChange = e => {
    const value = parseFloat(e.target.value)
    setPurchasePrice(value)
    calculatePurchaseTotal(amountPurchased, value) // Calculate purchaseTotal
  }

  // Calculate purchaseTotal based on amountPurchased and purchasePrice
  const calculatePurchaseTotal = (amount, price) => {
    const total = isNaN(amount) || isNaN(price) ? 0 : amount * price
    setPurchaseTotal(total)
  }

  const handleRealWeightChange = e => {
    const value = parseFloat(e.target.value)
    setRealWeight(value)
    calculateDispenseTotal(value, dispensePrice) // Calculate purchaseTotal
  }

  const handleDispensePriceChange = e => {
    const value = parseFloat(e.target.value)
    setDispensePrice(value)
    calculateDispenseTotal(realWeight, value) // Calculate purchaseTotal
  }

  const calculateDispenseTotal = (amount, price) => {
    const total = isNaN(amount) || isNaN(price) ? 0 : amount * price
    setDispenseTotal(total)
  }

  const onSubmit = async e => {
    e.preventDefault() // Prevent the default form submission behavior

    // Validate input fields
    if (amountPurchased < 0 || realWeight < 0 || jarWeight < 0 || purchasePrice < 0 || dispensePrice < 0) {
      alert('Negative numbers are not allowed.')
      return
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected/addStocks`,
        {
          productId: id, // Provide the actual product ID here
          amountPurchased,
          realWeight,
          growType,
          jarWeight,
          purchasePrice,
          purchaseTotal,
          dispensePrice,
          dispenseTotal,
          sampleTaste,
          frDisplay,
          intStash,
          exStash,
          comments
        },
        { withCredentials: true }
      )

      // Check if the product was successfully added
      if (response.status === 201) {
        // Assuming the backend returns a 200 status for success
        // Redirect to the products page or any other page
        router.push('/stocks/products')
      } else {
        console.error('Failed to add stocks')
      }
    } catch (error) {
      console.error('Error adding stocks:', error)
      // Handle error (e.g., show error message to the user)
    }
  }
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { productCode } = router.query
        if (!productCode) {
          return
        }
        setProductCode(productCode)
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisProducts/${productCode}`,
          {
            withCredentials: true
          }
        )
        // Assuming response.data is an object
        if (response.data) {
          setProductData(response.data)
          setId(response.data._id)
          setName(response.data.name)
          setCategory(response.data.category)
          setSalePrice(response.data.salePrice)

          setImgSrc(transformImageUrl(response.data.imageURL))
          setCurrStock(response.data.stock)
          // setProductImage(transformImageUrl(response.data.imageURL))
        }
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }
    fetchProductData()
  }, [router.query.productCode])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (productImageUrl === 'first') {
  //         setProductImageUrl('')
  //       } else if (productImageUrl === 'nochange') {
  //         setProductImageUrl(productCode.imageURL)
  //       } else {
  //         const response = await axios.post(
  //           `${process.env.NEXT_PUBLIC_API_URL}/api/protected/updateProduct',
  //           {
  //             id,
  //             name,
  //             type,
  //             category,
  //             productImageUrl,
  //             salePrice
  //           },
  //           { withCredentials: true }
  //         )
  //         if (response.status === 201) {
  //           router.push(`/products/${productCode}`)
  //         } else {
  //           console.error('Failed to add product')
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   fetchData()
  // }, [productImageUrl]) // Run fetchData when productImageUrl changes

  if (!productData) {
    return <p>Loading...</p>
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <CardHeader title='Add Stocks' titleTypographyProps={{ variant: 'h6' }} />

            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 5 }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <Box>
                  <Typography variant='h6'>{name}</Typography>

                  <Typography variant='subtitle1'>
                    {' '}
                    Current Sale Price: {salePrice ? `${salePrice} token` : 'Price not set'}
                  </Typography>
                  <Typography variant='subtitle1'>
                    {' '}
                    Current Stock: {currStock ? `${currStock} grams` : 'Out of stock'}
                  </Typography>
                </Box>
              </Box>
              <form onSubmit={onSubmit}>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Divider sx={{ marginBottom: 0 }} />
                  </Grid>
                  <Typography variant='body2' sx={{ fontWeight: 600, py: 4 }}>
                    Purchase Details
                  </Typography>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Amount Purchased (grams)'
                      type='number'
                      placeholder='Amount Purchased (grams)'
                      value={amountPurchased}
                      onChange={handleAmountPurchasedChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Real Weight'
                      type='number'
                      placeholder='Real Weight (grams)'
                      value={realWeight}
                      onChange={handleRealWeightChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Grow Type</InputLabel>
                      <Select label='Type' value={growType} onChange={e => setGrowType(e.target.value)} required>
                        <MenuItem value='Exterior'>Exterior</MenuItem>
                        <MenuItem value='Interior'>Interior</MenuItem>
                        <MenuItem value='Hydro'>Hydro</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Jar Weight'
                      placeholder='Jar Weight (grams)'
                      value={jarWeight}
                      type='number'
                      onChange={e => setJarWeight(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <Divider sx={{ marginBottom: 0 }} />
                    </Grid>
                    <Typography variant='body2' sx={{ fontWeight: 600, pt: 4 }}>
                      Price Details
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Purchase Price Per Gram'
                      placeholder='Purchase Total Per Gram (R)'
                      type='number'
                      value={purchasePrice}
                      onChange={handlePurchasePriceChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} alignContent={'center'}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                      Total Purchase Price: {purchaseTotal} R
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Dispense Price Per Gram'
                      placeholder='Dispense Total Per Gram (R)'
                      type='number'
                      value={dispensePrice}
                      onChange={handleDispensePriceChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} alignContent={'center'}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                      Total Dispense Price: {dispenseTotal} R
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <Divider sx={{ marginBottom: 0 }} />
                    </Grid>
                    <Typography variant='body2' sx={{ fontWeight: 600, pt: 4 }}>
                      Movements
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='Sample Taste'
                      placeholder='Sample Taste (grams)'
                      type='number'
                      value={sampleTaste}
                      onChange={e => setSampleTaste(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='For Display Jar'
                      placeholder='For Display Jar (grams)'
                      type='number'
                      value={frDisplay}
                      onChange={e => setFrDisplay(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='INT Stash'
                      placeholder='INT Stash (grams)'
                      type='number'
                      value={intStash}
                      onChange={e => setIntStash(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='EXT Stash'
                      placeholder='EXT Stash (grams)'
                      type='number'
                      value={exStash}
                      onChange={e => setExStash(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                    <Button size='large' variant='contained' sx={{ marginBottom: 7, marginRight: 2 }} type='submit'>
                      Add Stocks
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default addStocks
