// ** React Imports
import { useState, useEffect } from 'react'
import DashboardWrapper from 'src/components/DashboardWrapper'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import router from 'next/router'

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

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const AddProduct = () => {
  const [name, setName] = useState('')
  const [secondBreed, setSecondBreed] = useState('')
  const [type, setType] = useState('')
  const [sativa, setSativa] = useState('')
  const [thc, setThc] = useState('')
  const [cbd, setCbd] = useState('')
  const [cbn, setCbn] = useState('')
  const [description, setDescription] = useState('')
  const [medicalDescription, setMedicalDescription] = useState('')
  const [category, setCategory] = useState('')
  const [cannabisCategories, setCannabisCategories] = useState([])
  const [cannabisTypes, setCannabisTypes] = useState([])
  const [productImage, setProductImage] = useState('')
  const [productImageUrl, setProductImageUrl] = useState('first')
  const [salePrice, setSalePrice] = useState('')
  const [costPrice, setCostPrice] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/cannabis-product-default.jpg')
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      setProductImage(files[0])
    }
  }

  const uploadImage = async file => {
    const formData = new FormData()
    formData.append('productImage', file)

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected/upload/product/${name}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        }
      )
      console.log(response.data)

      // setProductImageUrl(response.data)
      if (response.data == '') {
        return ''
      }

      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async data => {
    try {
      var imageUrl = await uploadImage(productImage)
      setProductImageUrl(imageUrl)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (productImageUrl == 'first') {
      setProductImageUrl = ''
    } else {
      const fetchData = async () => {
        try {
          // alert(productImageUrl)
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/protected/addProduct`,
            {
              name,
              secondBreed,
              type,
              sativa,
              thc,
              cbd,
              cbn,
              description,
              medicalDescription,
              category,
              productImageUrl,
              salePrice,
              costPrice
            },
            {
              headers: {
                Authorization: `Bearer ${token}` // Include JWT token in Authorization header
              },
              withCredentials: true
            }
          )

          // Check if the product was successfully added
          if (response.status === 201) {
            // Redirect to the products page
            router.push(`/products`)
          } else {
            console.error('Failed to add product')
          }
        } catch (error) {
          console.error(error)
        }
      }

      fetchData()
    }

    // Call the async function
  }, [productImageUrl])
  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/getCannabisCategories`, {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })
        const data = response.data
        setCannabisCategories(data.categories)
        setCannabisTypes(data.types)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchCat()
  }, [])

  //| Helper function to convert data URI to Blob
  const dataURItoBlob = dataURI => {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    return new Blob([ab], { type: mimeString })
  }
  const { register, handleSubmit, reset } = useForm()

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <CardHeader title='Add New Product' titleTypographyProps={{ variant: 'h6' }} />

            <Divider sx={{ margin: 0 }} />

            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 5 }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <Box>
                  <ButtonStyled component='label' variant='contained' htmlFor='new-product-upload-image'>
                    Upload Product Image
                    <input
                      hidden
                      type='file'
                      onChange={onChange}
                      accept='image/png, image/jpeg'
                      id='new-product-upload-image'
                      name='productImage'
                    />
                  </ButtonStyled>
                  <ResetButtonStyled
                    color='error'
                    variant='outlined'
                    onClick={() => setImgSrc('/images/avatars/cannabis-product-default.jpg')}
                  >
                    Reset
                  </ResetButtonStyled>
                  <Typography variant='body2' sx={{ marginTop: 5 }}>
                    Allowed PNG or JPEG
                  </Typography>
                </Box>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Name'
                      placeholder='Product name'
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Second Breed'
                      placeholder='Second Breed'
                      value={secondBreed}
                      onChange={e => setSecondBreed(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Type</InputLabel>
                      <Select label='Type' value={type} onChange={e => setType(e.target.value)} required>
                        {cannabisTypes.map((type, index) => (
                          <MenuItem key={index} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select label='Category' value={category} onChange={e => setCategory(e.target.value)} required>
                        {cannabisCategories.map((category, index) => (
                          <MenuItem key={index} value={category}>
                            {category}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='% SATIVA'
                      placeholder='% SATIVA'
                      type='number'
                      value={sativa}
                      onChange={e => setSativa(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='% THC'
                      placeholder='% THC'
                      type='number'
                      value={thc}
                      onChange={e => setThc(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='% CBD'
                      placeholder='% CBD'
                      type='number'
                      value={cbd}
                      onChange={e => setCbd(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='% CBN'
                      placeholder='% CBN'
                      type='number'
                      value={cbn}
                      onChange={e => setCbn(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Description'
                      placeholder='Description'
                      multiline
                      value={description}
                      sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                      minRows={3}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Medical Description'
                      placeholder='Medical Description'
                      multiline
                      value={medicalDescription}
                      sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                      minRows={3}
                      onChange={e => setMedicalDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Sale Price'
                      placeholder='Sale Price'
                      type='number'
                      value={salePrice}
                      onChange={e => setSalePrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Cost Price'
                      placeholder='Cost Price'
                      type='number'
                      value={costPrice}
                      onChange={e => setCostPrice(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
                      Add Product
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

export default AddProduct
