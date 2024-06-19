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

const editProduct = () => {
  const [id, setId] = useState('')
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
  const [productImage, setProductImage] = useState('')
  const [productImageUrl, setProductImageUrl] = useState('first')
  const [salePrice, setSalePrice] = useState('')
  const [costPrice, setCostPrice] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/cannabis-product-default.jpg')
  const [productData, setProductData] = useState(null)
  const [productCode, setProductCode] = useState(null)

  const router = useRouter()

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
            'Content-Type': 'multipart/form-data'
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

      if (imageUrl == '') {
        setProductImageUrl('nochange')
      } else {
        setProductImageUrl(imageUrl)
      }
    } catch (error) {
      console.error(error)
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
          setCbd(response.data.CBDpercent)
          setCbn(response.data.CBNpercent)
          setThc(response.data.THCpercent)
          setCategory(response.data.category)
          setCostPrice(response.data.costPrice)
          setDescription(response.data.description)
          setMedicalDescription(response.data.medDescription)
          setSalePrice(response.data.salePrice)
          setSativa(response.data.sativaPercent)
          setSecondBreed(response.data.secondBreed)
          setType(response.data.type)
          setImgSrc(transformImageUrl(response.data.imageURL))
          // setProductImage(transformImageUrl(response.data.imageURL))
        }
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }
    fetchProductData()
  }, [router.query.productCode])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productImageUrl === 'first') {
          setProductImageUrl('')
        } else if (productImageUrl === 'nochange') {
          setProductImageUrl(productCode.imageURL)
        } else {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/protected/updateProduct`,
            {
              id,
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
            { withCredentials: true }
          )
          if (response.status === 201) {
            router.push(`/products/${productCode}`)
          } else {
            console.error('Failed to add product')
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [productImageUrl]) // Run fetchData when productImageUrl changes

  if (!productData) {
    return <p>Loading...</p>
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <CardHeader title='Edit Product' titleTypographyProps={{ variant: 'h6' }} />

            <Divider sx={{ margin: 0 }} />

            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 5 }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <Box>
                  <ButtonStyled component='label' variant='outlined' htmlFor='new-product-upload-image'>
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
                        <MenuItem value='Indica'>Indica</MenuItem>
                        <MenuItem value='Sativa'>Sativa</MenuItem>
                        <MenuItem value='Hybrid'>Hybrid</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select label='Type' value={category} onChange={e => setCategory(e.target.value)} required>
                        <MenuItem value='test'>test</MenuItem>
                        <MenuItem value='test2'>tes2</MenuItem>
                        <MenuItem value='test3'>test3</MenuItem>
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
                    <Button size='large' variant='contained' sx={{ marginBottom: 7, marginRight: 2 }} type='submit'>
                      Save Changes
                    </Button>
                    <Link href={`/products/${productCode}`} passHref>
                      <Button size='large' variant='outlined' sx={{ marginBottom: 7 }} type='submit'>
                        Discard Changes
                      </Button>
                    </Link>
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

export default editProduct
