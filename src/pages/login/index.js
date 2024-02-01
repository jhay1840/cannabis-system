// ** React Imports
import { useState } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import { useEffect } from 'react'
dotenv.config()

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'
// import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
// import Google from 'mdi-material-ui/Google'
// import Github from 'mdi-material-ui/Github'
// import Twitter from 'mdi-material-ui/Twitter'
// import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value })
  // }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const login = async (email, password) => {
    try {
      const res = await axios.post(
        // process.env.REACT_APP_API + '/login',
        'http://localhost:5000/login',

        {
          email,
          password
        },
        {
          withCredentials: true
        }
      )
      // const { token } = res.data;

      const { userRole } = res.data
      // console.log(token);
      return userRole
    } catch (error) {
      // console.log(error)
      return false
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log('Process Environment:', process.env)
    console.log('API URL:', process.env.REACT_APP_API)
    const success = await login(email, password)

    if (success) {
      if (success === 'superadmin' || success === 'admin') {
        router.push('/')
      } else if (success === 'user') {
        router.push('/')
      }
    } else {
      setLoginError('Invalid email or password')
    }
  }

  // go to dashboard if logged in
  useEffect(() => {
    // Check for JWT cookie and get user details
    const getUserDetails = async () => {
      try {
        const response = await axios.get(
          // process.env.REACT_APP_API + "/api/public/user-type",
          'http://localhost:5000/api/public/user-type',
          {
            withCredentials: true
          }
        )
        const userType = response.data
        if (userType === 'superadmin' || userType === 'admin') {
          router.push('/')
        } else if (userType === 'user') {
          router.push('/')
        }
      } catch (err) {
        console.error(err)
      }
    }
    getUserDetails()
  })

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src='/images/logos/bornhigh.svg' alt='bornhigh logo' />
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to {themeConfig.templateName}! 🌱
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id='email'
              label='Email'
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={password}
                id='auth-login-password'
                onChange={event => setPassword(event.target.value)}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {loginError && <div className='text-red-800 '>{loginError}</div>}
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              {/* <FormControlLabel control={<Checkbox />} label='Remember Me' /> */}
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()} sx={{ mt: 3 }}>
                  Forgot Password?
                </LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              type='submit'
              // onClick={() => router.push('/')}
            >
              Login
            </Button>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/pages/register'>
                  <LinkStyled>Create an account</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}>or</Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Facebook sx={{ color: '#497ce2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Twitter sx={{ color: '#1da1f2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Github
                    sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                  />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Google sx={{ color: '#db4437' }} />
                </IconButton>
              </Link>
            </Box> */}
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
