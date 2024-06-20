import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

const DashboardWrapper = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const checkAuthentication = async () => {
      // Get the JWT token from session storage
      const token = sessionStorage.getItem('token')

      if (!token) {
        // Redirect to login if token is not found
        router.push('/login')
        return
      }

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/user-type`, {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })

        console.log(response.data)

        if (response.data === 'false') {
          router.push('/login') // Redirect to login if not authenticated
        } else if (response.data === 'member') {
          router.push('/user') // Redirect to user dashboard for members
        }
        // Add more conditions for other user types if needed
      } catch (error) {
        console.error('Error checking authentication:', error)
        router.push('/login') // Redirect to login in case of error
      }
    }

    checkAuthentication()
  }, []) // Empty dependency array ensures useEffect runs only once on mount

  return <>{children}</>
}

export default DashboardWrapper
