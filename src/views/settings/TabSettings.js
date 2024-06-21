import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Close from 'mdi-material-ui/Close'

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
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

const TabSettings = () => {
  const [isSaved, setIsSaved] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [appName, setAppName] = useState('')

  // const [appLink, setAppLink] = useState('')

  const [idType, setIdType] = useState('')
  const [idTypes, setIdTypes] = useState([])
  const [consumption, setConsumption] = useState('')
  const [estimatedConsumption, setEstimatedConsumption] = useState([])
  const [category, setCategory] = useState('')
  const [cannabisCategories, setCannabisCategories] = useState([])
  const [cannabisType, setCannabisType] = useState('')

  const [cannabisTypes, setCannabisTypes] = useState([])
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/getSettings`, {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })
        const settings = response.data

        // setAppLink(settings.appDomainLink)
        setAppName(settings.appName)
        setIdTypes(settings.idTypes)
        setEstimatedConsumption(settings.estimatedConsumption)
        setCannabisCategories(settings.cannabisCategories)
        setCannabisTypes(settings.cannabisType)
      } catch (error) {
        console.error('Error fetching settings:', error)
      }
    }

    fetchSettings()
  }, [])

  const handleAddField = (value, setter, values) => {
    if (value) {
      setter([...values, value])
    }
  }

  const handleRemoveField = (setter, values, index) => {
    const newValues = [...values]
    newValues.splice(index, 1)
    setter(newValues)
  }

  const handleSaveChanges = async () => {
    const settingsData = {
      appName,
      appLink,
      idTypes,
      estimatedConsumption,
      cannabisCategories,
      cannabisTypes
    }

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected/updateSettings`,
        settingsData,
        {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        }
      )
      console.log('Settings updated successfully:', response.data)
      setIsSaved(true)
      setSnackbarOpen(true)
    } catch (error) {
      console.error('Error updating settings:', error)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          {/* General Settings */}
          <Grid item xs={12}>
            <Typography variant='h6' sx={{ marginBottom: 3 }}>
              General Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='App Name'
                  placeholder='My App'
                  value={appName}
                  onChange={e => setAppName(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='App URL'
                  placeholder='http://localhost:3000'
                  value={appLink}
                  onChange={e => setAppLink(e.target.value)}
                />
              </Grid> */}
              <Grid item xs={12}>
                <Typography variant='subtitle1'>ID Types</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <TextField
                    value={idType}
                    onChange={e => setIdType(e.target.value)}
                    placeholder='Enter ID Type'
                    sx={{ marginRight: 2 }}
                  />
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleAddField(idType, setIdTypes, idTypes)
                      setIdType('')
                    }}
                  >
                    Add ID Type
                  </Button>
                </Box>
                <Box>
                  {idTypes.map((idType, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <Typography sx={{ marginRight: 2 }}>{idType}</Typography>
                      <IconButton color='error' onClick={() => handleRemoveField(setIdTypes, idTypes, index)}>
                        <Close />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>Estimated Consumption</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <TextField
                    value={consumption}
                    onChange={e => setConsumption(e.target.value)}
                    placeholder='Enter Estimated Consumption'
                    sx={{ marginRight: 2 }}
                  />
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleAddField(consumption, setEstimatedConsumption, estimatedConsumption)
                      setConsumption('')
                    }}
                  >
                    Add Estimated Consumption
                  </Button>
                </Box>
                <Box>
                  {estimatedConsumption.map((consumption, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <Typography sx={{ marginRight: 2 }}>{consumption}</Typography>
                      <IconButton
                        color='error'
                        onClick={() => handleRemoveField(setEstimatedConsumption, estimatedConsumption, index)}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Product Settings */}
          <Grid item xs={12}>
            <Typography variant='h6' sx={{ marginBottom: 3 }}>
              Product Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>Cannabis Product Categories</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <TextField
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder='Enter Cannabis Product Category'
                    sx={{ marginRight: 2 }}
                  />
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleAddField(category, setCannabisCategories, cannabisCategories)
                      setCategory('')
                    }}
                  >
                    Add Category
                  </Button>
                </Box>
                <Box>
                  {cannabisCategories.map((category, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <Typography sx={{ marginRight: 2 }}>{category}</Typography>
                      <IconButton
                        color='error'
                        onClick={() => handleRemoveField(setCannabisCategories, cannabisCategories, index)}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>Cannabis Product Types</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <TextField
                    value={cannabisType}
                    onChange={e => setCannabisType(e.target.value)}
                    placeholder='Enter Cannabis Product Type'
                    sx={{ marginRight: 2 }}
                  />
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleAddField(cannabisType, setCannabisTypes, cannabisTypes)
                      setCannabisType('')
                    }}
                  >
                    Add Category
                  </Button>
                </Box>
                <Box>
                  {cannabisTypes.map((category, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <Typography sx={{ marginRight: 2 }}>{category}</Typography>
                      <IconButton
                        color='error'
                        onClick={() => handleRemoveField(setCannabisTypes, cannabisTypes, index)}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='success' sx={{ marginRight: 3.5 }} onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity='success' elevation={6} variant='filled'>
          Changes saved successfully!
        </MuiAlert>
      </Snackbar>
    </CardContent>
  )
}

export default TabSettings
