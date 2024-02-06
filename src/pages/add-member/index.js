// ** React Imports
import { useState } from 'react'
import DashboardWrapper from 'src/components/DashboardWrapper'
import Signature from 'src/components/Signature'
import PDFViewerComponent from 'src/components/PDFViewer'
import UploadForm from 'src/components/UploadForm'
import { useForm } from 'react-hook-form'
import axios from 'axios'

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
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const Members = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [preferredName, setPreferredName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [idOrPassportNumber, setIdOrPassportNumber] = useState('')
  const [signatureImage, setSignatureImage] = useState(null)
  const [userRole, setUserRole] = useState('')
  const [gender, setGender] = useState('')
  const [receiveUpdates, setReceiveUpdates] = useState(false)
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleSignatureSave = async imageData => {
    setSignatureImage(imageData)
  }

  const onSubmit = async (data, e) => {
    e.preventDefault()
    if (!signatureImage && userRole == 'member') {
      alert('Signature image is missing. Please save the signature first.')
      return
    }
    // check if the email exist
    const registrationEmail = {
      email
    }

    const emailCheckResponse = await axios.post('http://localhost:5000/api/protected/check_email', registrationEmail, {
      withCredentials: true
    })
    if (emailCheckResponse.status === 204) {
      setEmailErrorMessage('Email already exists')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    } else {
      try {
        // Assuming you have a registration endpoint like /api/register
        const registrationData = {
          firstName,
          lastName,
          email,
          phone,
          preferredName,
          dateOfBirth,
          idOrPassportNumber,
          userRole
          // Add other fields as needed
        }

        // Send registration data to the backend and get the created user data
        const registrationResponse = await axios.post(
          'http://localhost:5000/api/protected/register',
          registrationData,
          {
            withCredentials: true
          }
        )

        // Extract the created user ID or any other identifier needed for file upload
        const userId = registrationResponse.data.id // Replace 'id' with the actual property name

        // Only proceed with file uploads if the user was successfully created
        if (registrationResponse.status === 201) {
          // Upload signature image
          if (signatureImage) {
            const signatureFormData = new FormData()
            const signatureBlob = dataURItoBlob(signatureImage)
            signatureFormData.append('upload', signatureBlob, 'signature.png')

            await axios.post(`http://localhost:5000/api/upload/signature/${userId}`, signatureFormData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              withCredentials: true
            })
          }

          // Upload PDF file
          if (userRole === 'member' && data.upload && data.upload.length > 0) {
            const pdfFormData = new FormData()
            const pdfFile = data.upload[0]
            pdfFormData.append('upload', pdfFile)

            await axios.post(`http://localhost:5000/api/upload/contract/${userId}`, pdfFormData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              withCredentials: true
            })
          }

          // Handle the response, you may redirect or show a success message
          console.log('Account created successfully:', registrationResponse.data)

          // Clear form data or perform other actions if needed
        } else {
          // Handle the case where user creation was not successful
          console.error('User creation failed:', registrationResponse.data)
          // You may want to show an error message or take appropriate action
        }
      } catch (error) {
        console.error('Error during account creation:', error)
        // Handle errors, show an alert, etc.
      }
    }
  }

  // Helper function to convert data URI to Blob
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

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <CardHeader title='Add New Member' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600, pb: 4 }}>
                    1. Account Details
                  </Typography>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='First Name'
                      placeholder='John'
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Last Name'
                      placeholder='Doe'
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Email'
                      placeholder='john@example.com'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    {emailErrorMessage && <div style={{ color: 'red' }}>{emailErrorMessage}</div>}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Phone'
                      type='number'
                      placeholder='+1-123-456-8790'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Preferred Name'
                      placeholder='Johnny'
                      value={preferredName}
                      onChange={e => setPreferredName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Date of Birth'
                      type='date'
                      value={dateOfBirth}
                      onChange={e => setDateOfBirth(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select label='Gender' value={gender} onChange={e => setGender(e.target.value)} required>
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                        <MenuItem value='other'>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>User Role</InputLabel>
                      <Select
                        label='Role'
                        defaultValue='member'
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                        value={userRole}
                        onChange={e => setUserRole(e.target.value)}
                        required
                      >
                        <MenuItem value='member'>Member</MenuItem>
                        <MenuItem value='admin'>Admin</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='ID or Passport Number'
                      placeholder='Enter ID or Passport Number'
                      value={idOrPassportNumber}
                      onChange={e => setIdOrPassportNumber(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ marginBottom: 0 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      2. Contract
                    </Typography>
                    <input
                      {...register('upload', {
                        required: userRole === 'member' ? 'File is required' : false
                      })}
                      type='file'
                      accept='.pdf'
                    />
                    {errors.upload && <p style={{ color: 'red' }}>{errors.upload.message}</p>}
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600, pb: 2 }}>
                      Signature
                    </Typography>
                    <Signature onSignatureSave={handleSignatureSave} />
                    {signatureImage && (
                      <div>
                        <h3>Preview Signature:</h3>
                        <img src={signatureImage} alt='Signature Preview' />
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      label='I would like to be updated via whatsapp'
                      control={<Checkbox name='checkbox-whatsapp' />}
                      checked={receiveUpdates}
                      onChange={() => setReceiveUpdates(!receiveUpdates)}
                      sx={{ '& .MuiButtonBase-root': { paddingTop: 0, paddingBottom: 0 } }}
                    />
                    <FormControlLabel
                      label='I would like to sign up to the newsletter'
                      control={<Checkbox name='checkbox-newsletter' />}
                      checked={subscribeToNewsletter}
                      onChange={() => setSubscribeToNewsletter(!subscribeToNewsletter)}
                      sx={{ '& .MuiButtonBase-root': { paddingTop: 0, paddingBottom: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
                      Create an account
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

export default Members
