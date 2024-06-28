import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { CircularProgress, Typography } from '@mui/material' // Assuming you use MUI for styling

const ConfirmEmailPage = () => {
  const router = useRouter()
  const { confirmCode } = router.query

  useEffect(() => {
    const confirmEmail = async () => {
      const { confirmCode } = router.query
      if (!confirmCode) {
        console.error('confirmation code is missing.')

        return
      }
      if (confirmCode) {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/confirm-email/${confirmCode}`)
          console.log(res.data) // Log the response from the backend
          if (res.data === 'Email confirmed and password reset link sent') {
            // Redirect to login page upon successful email confirmation
            alert('Email confirmed. Please check your email for password reset link')
            router.push('/login')
          } else {
            // Handle other responses or show a message
          }
        } catch (error) {
          console.error('Error confirming email:', error)

          // Handle error - redirect to an error page or show an error message
        }
      }
    }

    confirmEmail()
  }, [confirmCode, router])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <CircularProgress size={40} />
      <Typography variant='body1' style={{ marginLeft: '10px' }}>
        Confirming Email...
      </Typography>
    </div>
  )
}
ConfirmEmailPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ConfirmEmailPage
