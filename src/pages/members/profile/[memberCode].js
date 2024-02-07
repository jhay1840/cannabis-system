import { useState, useEffect } from 'react'
import axios from 'axios'
import router from 'next/router'
import { useRouter } from 'next/router'

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

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

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

const add_member = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [tableData, setTableData] = useState([])
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [memberData, setMemberData] = useState(null)

  const router = useRouter()
  const { memberCode } = router.query

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const { query } = window.location
        const { memberCode } = query

        const response = await axios.get(`http://localhost:5000/api/protected/members/${memberCode}`, {
          withCredentials: true
        })

        setMemberData(response.data)
      } catch (error) {
        console.error('Error fetching member data:', error)
      }
    }

    fetchMemberData()
  }, [])

  //   if (!memberData) {
  //     return <p>Loading...</p>
  //   }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='h5'>Personal Information</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImgStyled src={imgSrc} alt='Profile Pic' />
                  <Box>
                    <Typography variant='h6'>firstName lastName</Typography>
                    <Typography variant='subtitle1'>Credits: 0</Typography>
                    <Typography variant='body2'>Age y.o</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Button size='large' variant='contained' href='#text-buttons'>
                    Dispense
                  </Button>
                  <Button sx={{ ml: 5 }} size='large' variant='contained' href='#text-buttons'>
                    Edit Profile
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h5'>Dispense History</Typography>
            <TableBasic data={tableData} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default add_member
