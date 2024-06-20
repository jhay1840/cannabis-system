import { useState, useEffect } from 'react'
import axios from 'axios'
import router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Demo Components Imports

import TableMembersCredit from 'src/views/tables/TableMembersCredit'

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
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [memberData, setMemberData] = useState(null)
  const [memberCodeVar, setMemberCodeVar] = useState(null)
  const [amount, setAmount] = useState('')
  const [paidBy, setPaidBy] = useState('')
  const [comment, setComment] = useState('')

  const [error, setError] = useState(null)

  const router = useRouter()
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  const onSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected/updateCredits`,
        {
          memberCode: memberCodeVar,
          amount: Number(amount),
          comments: comment,
          paidBy: paidBy
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true // Add withCredentials option here
        }
      )

      // Clear form fields after successful submission
      setAmount('')
      setPaidBy('')
      setComment('')
      // Reload member data after donation
      router.push(`/dispense/${memberCodeVar}`)
    } catch (error) {
      console.error('Error making donation:', error)
      setError(error.response.data.error)
    }
  }
  const fetchTransactionData = async () => {
    const { memberCode } = router.query
    const memberId = memberCode
    console.log(memberId)
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/creditTransactions`, {
        params: { memberId },
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in Authorization header
        },
        withCredentials: true
      })

      // Assuming response.data is an array
      if (response.data && response.data.length > 0) {
        setTableData(response.data)
      }
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching transaction data:', error)
    }
  }
  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const { memberCode } = router.query
        // console.log(memberCode)

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/members/${memberCode}`, {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
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
    fetchMemberData()

    fetchTransactionData()
  }, [router.query.memberCode])

  if (!memberData) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <DashboardWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography variant='h5'>Make a donation</Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 10 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ImgStyled src={imgSrc} alt='Profile Pic' />
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
                    <Link href={`/members/profile/${memberCodeVar}`} passHref>
                      <Button size='large' variant='outlined' color='error'>
                        Cancel
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item sm={12}>
                  <form onSubmit={onSubmit} style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label='Amount'
                        placeholder='Amount'
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel>Paid by</InputLabel>
                        <Select label='Paid By' value={paidBy} onChange={e => setPaidBy(e.target.value)} required>
                          <MenuItem value='Cash'>Cash</MenuItem>
                          <MenuItem value='Card'>Card</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        fullWidth
                        label='Comment'
                        placeholder='Comment'
                        multiline
                        value={comment}
                        sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                        minRows={3}
                        onChange={e => setComment(e.target.value)}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Button size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
                        Make Donation
                      </Button>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant='h5'>Donation History</Typography>
              <TableMembersCredit data={tableData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardWrapper>
  )
}

export default member_code
