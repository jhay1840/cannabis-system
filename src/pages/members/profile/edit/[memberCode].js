import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

// Components Imports
import QRCodeComponent from 'src/views/account-settings/QRCodeComponent'
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
  const [tableDataCredits, setTableDataCredits] = useState([])
  const [dispenseData, setDispenseData] = useState([])
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [memberData, setMemberData] = useState(null)
  const [memberCodeVar, setMemberCodeVar] = useState(null)
  const [editableData, setEditableData] = useState({})
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const router = useRouter()
  const [idTypes, setIdTypes] = useState([])
  const [estConsump, setEstConsump] = useState([])
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  const fetchMemberData = async () => {
    try {
      const { memberCode } = router.query

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/members/${memberCode}`, {
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in Authorization header
        },
        withCredentials: true
      })
      // Assuming response.data is an array
      if (response.data && response.data.length > 0) {
        setMemberData(response.data[0])
        setEditableData(response.data[0])
        setMemberCodeVar(memberCode)
      }
    } catch (error) {
      console.error('Error fetching member data:', error)
    }
  }

  useEffect(() => {
    if (router.query.memberCode) {
      fetchMemberData()
    }
  }, [router.query.memberCode])

  const handleInputChange = e => {
    const { name, value } = e.target
    setEditableData({
      ...editableData,
      [name]: value
    })
  }

  const handleSelectChange = e => {
    const { name, value } = e.target
    setEditableData({
      ...editableData,
      [name]: value
    })
  }

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected/memberUpdate/${memberCodeVar}`,
        editableData,
        {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        }
      )
      console.log('Changes saved successfully:', response.data)
      router.push(`/members/profile/${memberCodeVar}`)
    } catch (error) {
      console.error('Error saving changes:', error)
    }
  }

  const handleDeleteMember = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/deleteMember/${memberCodeVar}`, {
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in Authorization header
        },
        withCredentials: true
      })
      console.log('Member deleted successfully')
      setOpenDeleteDialog(false)
      router.push('/members')
    } catch (error) {
      console.error('Error deleting member:', error)
    }
  }

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/getMemberOptions`, {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })
        const data = response.data
        setIdTypes(data.idTypes)
        setEstConsump(data.estimatedConsumption)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchOptions()
  }, [])
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
                  <Typography variant='h5'>Personal Information</Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <QRCodeComponent qrLink={`/members/profile/${memberCodeVar}`} />
                    <Box>
                      <Typography variant='h6'>
                        {editableData.firstName} {editableData.lastName}
                      </Typography>
                      <Typography variant='subtitle1'>Credits: {editableData.credits}</Typography>
                      <Typography variant='body2'>{calculateAge(editableData.dateOfBirth)} y.o</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Link href={`/members/profile/${memberCodeVar}`} passHref>
                      <Button size='large' variant='outlined'>
                        Cancel
                      </Button>
                    </Link>
                    <Button
                      sx={{ ml: 5 }}
                      size='large'
                      color='error'
                      variant='contained'
                      onClick={handleOpenDeleteDialog}
                    >
                      Delete Member
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='First Name'
                    defaultValue={editableData.firstName}
                    onChange={handleInputChange}
                    name='firstName'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Last Name'
                    defaultValue={editableData.lastName}
                    onChange={handleInputChange}
                    name='lastName'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Member Code'
                    defaultValue={editableData.memberCode}
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Expiry'
                    type='date'
                    defaultValue={editableData.expiryDate ? editableData.expiryDate.split('T')[0] : ''}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={handleInputChange}
                    name='expiryDate'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Email'
                    defaultValue={editableData.userInfo[0]?.email}
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='User Role'
                    defaultValue={editableData.userInfo[0]?.userRole}
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Preferred Name'
                    defaultValue={editableData.userInfo[0]?.userName}
                    onChange={handleInputChange}
                    name='userName'
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Phone Number'
                    defaultValue={editableData.phoneNumber}
                    onChange={handleInputChange}
                    name='phoneNumber'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Registration Date'
                    defaultValue={formatDate(editableData.userInfo[0]?.createdAt)}
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Nationality'
                    defaultValue={editableData.nationality}
                    onChange={handleInputChange}
                    name='nationality'
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    fullWidth
                    value={editableData.idType}
                    onChange={handleSelectChange}
                    name='idType'
                    displayEmpty
                  >
                    {idTypes.map((types, index) => (
                      <MenuItem key={index} value={types}>
                        {types}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='ID Number'
                    defaultValue={editableData.idNumber}
                    onChange={handleInputChange}
                    name='idNumber'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Date of Birth'
                    defaultValue={formatDate(editableData.dateOfBirth)}
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    fullWidth
                    value={editableData.gender}
                    onChange={handleSelectChange}
                    name='gender'
                    displayEmpty
                  >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    fullWidth
                    value={editableData.consumption}
                    onChange={handleSelectChange}
                    name='consumption'
                    displayEmpty
                  >
                    {estConsump.map((est, index) => (
                      <MenuItem key={index} value={est}>
                        {est}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Last Update'
                    defaultValue={editableData.updatedAt}
                    InputProps={{
                      readOnly: true,
                      style: { backgroundColor: '#f5f5f5' } // Gray out the read-only field
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button size='large' color='success' variant='contained' onClick={handleSaveChanges}>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Delete Member</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this member? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDeleteMember} color='error' variant='contained'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardWrapper>
  )
}

export default MemberCode
