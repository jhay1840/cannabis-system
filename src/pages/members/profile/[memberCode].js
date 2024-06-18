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
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

// Components Imports
import TableBasic from 'src/views/tables/TableMembers'
import TableMembersCredit from 'src/views/tables/TableMembersCredit'
import TableDispenseTransaction from 'src/views/tables/TableDispenseTransaction'
import QRCodeComponent from 'src/views/account-settings/QRCodeComponent'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
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

const member_code = () => {
  const [tableData, setTableData] = useState([])
  const [tableDataCredits, setTableDataCredits] = useState([])
  const [dispenseData, setDispenseData] = useState([])
  const [appLink, setAppLink] = useState('')

  const [memberData, setMemberData] = useState(null)
  const [memberCodeVar, setMemberCodeVar] = useState(null)

  const router = useRouter()

  // useEffect(() => {
  //   const fetchSettings = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/protected/getSettings', {
  //         withCredentials: true
  //       })
  //       const settings = response.data
  //       setAppLink(settings.appDomainLink)
  //     } catch (error) {
  //       console.error('Error fetching settings:', error)
  //     }
  //   }

  //   fetchSettings()
  // }, [])
  const fetchTransactionData = async () => {
    const { memberCode } = router.query
    const memberId = memberCode
    console.log(memberId)
    try {
      const response = await axios.get('http://localhost:5000/api/protected/creditTransactions', {
        params: { memberId },
        withCredentials: true
      })

      // Assuming response.data is an array
      if (response.data) {
        setTableDataCredits(response.data)
      }
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching transaction data:', error)
    }
  }
  const fetchDispenseTransactionData = async () => {
    const { memberCode } = router.query
    const memberId = memberCode
    console.log(memberId)
    try {
      const response = await axios.get('http://localhost:5000/api/protected/dispenseTransactions', {
        params: { memberId },
        withCredentials: true
      })

      // Assuming response.data is an array
      if (response.data) {
        setDispenseData(response.data)
      }
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching transaction data:', error)
    }
  }
  const fetchMemberData = async () => {
    try {
      const { memberCode } = router.query

      const response = await axios.get(`http://localhost:5000/api/protected/members/${memberCode}`, {
        withCredentials: true
      })
      // Assuming response.data is an array
      if (response.data && response.data.length > 0) {
        setMemberData(response.data[0])
        setMemberCodeVar(memberCode)
      }
    } catch (error) {
      console.error('Error fetching member data:', error)
    }
  }

  useEffect(() => {
    fetchMemberData()
    fetchTransactionData()
    fetchDispenseTransactionData()

    const getCurrentDomain = () => {
      if (typeof window !== 'undefined') {
        return window.location.origin
      }
      return ''
    }

    setAppLink(getCurrentDomain())
  }, [router.query.memberCode])

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
                  <Typography variant='h5'>Personal Information</Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <ImgStyled src={imgSrc} alt='Profile Pic' /> */}
                    <QRCodeComponent qrLink={`${appLink}/members/profile/${memberCodeVar}`} />
                    <Box>
                      <Typography variant='h6'>
                        {memberData.firstName} {memberData.lastName}
                      </Typography>
                      <Typography variant='subtitle1'>Credits: {memberData.credits}</Typography>
                      <Typography variant='body2'>{calculateAge(memberData.dateOfBirth)} y.o</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Link href={`/members/credit/${memberCodeVar}`} passHref>
                      <Button size='large' variant='outlined' href='#text-buttons' color='success'>
                        Add Credit
                      </Button>
                    </Link>
                    <Link href={`/members/profile/edit/${memberCodeVar}`} passHref>
                      <Button sx={{ ml: 5 }} size='large' variant='contained' href='#text-buttons'>
                        Edit Profile
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  {expiryWarning && (
                    <Alert severity='warning'>
                      <AlertTitle>{expiryWarning}</AlertTitle>
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Member Code:
                    </Box>{' '}
                    {memberData.memberCode}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Expiry:
                    </Box>{' '}
                    {formatDate(memberData.expiryDate)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Email:
                    </Box>{' '}
                    {memberData.userInfo[0]?.email}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      User Role:
                    </Box>{' '}
                    {memberData.userInfo[0]?.userRole}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Preferred Name:
                    </Box>{' '}
                    {memberData.userInfo[0]?.userName}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Phone Number:
                    </Box>{' '}
                    {memberData.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Regsitration Date:
                    </Box>{' '}
                    {formatDate(memberData.userInfo[0]?.createdAt)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Nationality:
                    </Box>{' '}
                    {memberData.nationality}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      ID Type:
                    </Box>{' '}
                    {memberData.idType}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      ID Number:
                    </Box>{' '}
                    {memberData.idNumber}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Date of Birth:
                    </Box>{' '}
                    {formatDate(memberData.dateOfBirth)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Gender:
                    </Box>{' '}
                    {memberData.gender}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Estimated Consumption:
                    </Box>{' '}
                    {memberData.consumption}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant='h5'>Dispense History</Typography>
              <TableDispenseTransaction data={dispenseData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant='h5'>Donation History</Typography>
              <TableMembersCredit data={tableDataCredits} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default member_code
