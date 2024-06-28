import { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

import Link from 'next/link'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import themeConfig from 'src/configs/themeConfig'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

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
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const theme = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [errorKey, setErrorKey] = useState(0)

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        { email, password },
        { withCredentials: true }
      )
      const { userRole, token } = res.data
      sessionStorage.setItem('token', token)

      return userRole
    } catch (error) {
      console.log('')

      return false
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const success = await login(email, password)
    if (success) {
      if (success === 'superadmin' || success === 'admin') {
        router.push('/')
      } else if (success === 'user') {
        router.push('/')
      }
    } else {
      setLoginError('Invalid email or password')
      setErrorKey(prevKey => prevKey + 1) // Increment the error key to re-render the element
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const getUserDetails = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/user-type`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
          })
          const userType = response.data
          if (userType === 'superadmin' || userType === 'admin') {
            router.push('/')
          } else if (userType === 'member') {
            router.push('/user')
          }
        } catch (err) {
          console.error(err)
        }
      }
      getUserDetails()
    } else {
      router.push('/login')
    }
  }, [])

  return (
    <Box className='content-center'>
      <style>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .error {
          color: red;
          animation: shake 0.5s;
        }
      `}</style>
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
            {loginError && (
              <div key={errorKey} className='error'>
                {loginError}
              </div>
            )}
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()} sx={{ mt: 3 }}>
                  Forgot Password?
                </LinkStyled>
              </Link>
            </Box>
            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
