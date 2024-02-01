// ** React Imports
import { useState } from 'react'
import DashboardWrapper from 'src/components/DashboardWrapper'
import Signature from 'src/components/Signature'
import PDFViewerComponent from 'src/components/PDFViewer'

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

const members = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [preferredName, setPreferredName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [idOrPassportNumber, setIdOrPassportNumber] = useState('')
  const [signatureImage, setSignatureImage] = useState(null)

  const handleSignatureSave = imageData => {
    setSignatureImage(imageData)
  }
  const pdfUrl = 'publicpdfcontractMembership terms Jan 24.pdf'

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <CardHeader title='Add New Member' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <form onSubmit={e => e.preventDefault()}>
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
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Last Name'
                      placeholder='Doe'
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Email'
                      placeholder='john@example.com'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Phone'
                      type='number'
                      placeholder='+1-123-456-8790'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Preferred Name'
                      placeholder='Johnny'
                      value={preferredName}
                      onChange={e => setPreferredName(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
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
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='ID or Passport Number'
                      placeholder='Enter ID or Passport Number'
                      value={idOrPassportNumber}
                      onChange={e => setIdOrPassportNumber(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position='start'></InputAdornment>
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}></Grid>

                  <Grid item xs={12}>
                    <Divider sx={{ marginBottom: 0 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      2. Contract
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <PDFViewerComponent pdfUrl={pdfUrl} />
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

                  <Grid item xs={6}>
                    <Button
                      size='large'
                      variant='contained'
                      sx={{ marginBottom: 7 }}
                      type='submit'
                      // onClick={() => router.push('/')}
                    >
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

export default members
