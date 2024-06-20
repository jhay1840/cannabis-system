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

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableMembers'
import TableTransaction from 'src/views/tables/TableTransactions'
import TableDispenseTransaction from 'src/views/tables/TableDispenseTransaction'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
import DashboardWrapper from 'src/components/DashboardWrapper'

// import dialog box
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 150,
  height: 150,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const formatDate = dateString => {
  if (!dateString || isNaN(new Date(dateString))) {
    return '' // Return empty string for invalid or empty dates
  }

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
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

const product_Code = () => {
  const [tableData, setTableData] = useState([])
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [productData, setProductData] = useState(null)
  const [productCode, setProductCode] = useState(null)
  const [tableDispenseData, setTableDispenseData] = useState(null)

  const [openDialog, setOpenDialog] = useState(false) // State for dialog open/close
  const router = useRouter()
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  // Function to handle opening the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  // Function to handle deletion of the product
  const handleDeleteProduct = async () => {
    try {
      const { productCode } = router.query
      if (!productCode) {
        console.error('Product code is missing.')
        return
      }

      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisProducts/${productCode}`
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in Authorization header
        },
        withCredentials: true // Include credentials if necessary
      })

      if (response.status === 200) {
        // Product deleted successfully
        console.log('Product deleted successfully.')
        // Redirect or perform any necessary actions after deletion
        router.push('/products') // Example redirect to products page
      } else {
        console.error('Error deleting product:', response.data)
        // Handle error, show notification, etc.
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      // Handle error, show notification, etc.
    }
  }

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
            headers: {
              Authorization: `Bearer ${token}` // Include JWT token in Authorization header
            },
            withCredentials: true
          }
        )
        // Assuming response.data is an object
        if (response.data) {
          setProductData(response.data)
        }
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }

    fetchProductData()

    const fetchTransactionData = async () => {
      const { productCode } = router.query
      const productId = productCode

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/cannabisTransactions`, {
          params: { productId },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })

        // Assuming response.data is an array
        if (response.data && response.data.length > 0) {
          setTableData(response.data)
        }
      } catch (error) {
        console.error('Error fetching transaction data:', error)
      }
    }
    const fetchDispenseTransactionData = async () => {
      const { productCode } = router.query
      const productId = productCode

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/dispenseTransactions`, {
          params: { productId },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })

        // Assuming response.data is an array
        if (response.data && response.data.length > 0) {
          setTableDispenseData(response.data)
        }
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching transaction data:', error)
      }
    }
    fetchDispenseTransactionData()
    fetchTransactionData()
  }, [router.query.productCode])

  if (!productData) {
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
                  <Typography variant='h5'>Product Information</Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ImgStyled src={transformImageUrl(productData.imageURL)} alt='Profile Pic' />
                    <Box>
                      <Typography variant='h5' sx={{ mb: 4 }}>
                        {productData.name}
                      </Typography>
                      <Typography variant='subtitle1'>Sale Price: {productData.salePrice}</Typography>
                      <Typography variant='body2' color={productData.stock ? 'success.main' : 'error'}>
                        {productData.stock ? `${productData.stock} in stock` : 'Out of stock'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Link href={`/products/edit/${productCode}`} passHref>
                      <Button size='large' variant='contained' href='#text-buttons'>
                        Edit Product
                      </Button>
                    </Link>
                    <Button
                      color='error'
                      sx={{ ml: 5 }}
                      size='large'
                      variant='contained'
                      href='#text-buttons'
                      onClick={handleOpenDialog}
                    >
                      Delete Product
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Category:
                    </Box>{' '}
                    {productData.category}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Date Created:
                    </Box>{' '}
                    {formatDate(productData.createdAt)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Second Breed:
                    </Box>{' '}
                    {productData.secondBreed}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Type:
                    </Box>{' '}
                    {productData.type}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      % Sativa:
                    </Box>{' '}
                    {productData.sativaPercent}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      % THC:
                    </Box>{' '}
                    {productData.THCpercent}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      % CBD:
                    </Box>{' '}
                    {productData.CBDpercent}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      % CBN:
                    </Box>{' '}
                    {productData.CBNpercent}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Description:
                    </Box>{' '}
                    {productData.description}
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Medical Description
                    </Box>{' '}
                    {productData.medDescription}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={12} xs={12} sx={{ mt: 6 }}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant='h5'>Purchase Stock History</Typography>

              <TableTransaction data={tableData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant='h5'>Dispense History</Typography>

              <TableDispenseTransaction data={tableDispenseData} />
              <Typography variant='body1' sx={{ mt: 4 }}>
                No data yet
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Confirmation dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this product?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button color='error' onClick={handleDeleteProduct}>
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardWrapper>
  )
}

export default product_Code
