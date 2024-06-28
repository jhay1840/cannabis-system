// ** React Imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
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

// ** Icons Imports
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

const ResetPasswordPage = () => {
  // ** State
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [resetError, setResetError] = useState('')
  const [memberID, setMemberID] = useState(null)

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const resetPassword = async (resetID, password) => {
    try {
      if (!resetID) {
        console.error('Reset token is missing.')

        return false
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/reset-password/${resetID}`, {
        newPassword: password
      })

      if (response.status === 200) {
        console.log('Password reset successful:', response.data.message)
        alert('Password changed successfully')

        return true
      } else if (response.status == 400) {
        console.error('Password reset token is expired:', response.data.message)
        alert('Password reset token is expired. Please request a new reset link.')

        return false
      } else {
        console.error('Password reset failed:', response.data.message)

        return false
      }
    } catch (error) {
      console.error('Password reset failed:', error)

      return false
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setResetError('Passwords do not match')

      return
    }

    const { resetID } = router.query // Retrieve resetID from the router query

    if (!resetID) {
      console.error('Reset token is missing.')
      setResetError('Reset token is missing.')

      return
    }

    const success = await resetPassword(resetID, password) // Pass resetID and password to resetPassword function

    if (success) {
      router.push('/login')
    } else {
      setResetError('Invalid or token expired ')
    }
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src='/images/logos/bornhigh.svg' alt='bornhigh logo' />
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5, textAlign: 'center' }}>
              Set Your {themeConfig.templateName} Password
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ marginBottom: 4 }}>
              <InputLabel htmlFor='auth-reset-password'>New Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={password}
                id='auth-reset-password'
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
            <FormControl fullWidth sx={{ marginBottom: 4 }}>
              <InputLabel htmlFor='auth-confirm-password'>Confirm Password</InputLabel>
              <OutlinedInput
                label='Confirm Password'
                value={confirmPassword}
                id='auth-confirm-password'
                onChange={event => setConfirmPassword(event.target.value)}
                type={values.showConfirmPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle confirm password visibility'
                    >
                      {values.showConfirmPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {resetError && <div className='text-red-800 '>{resetError}</div>}
            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

ResetPasswordPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ResetPasswordPage
