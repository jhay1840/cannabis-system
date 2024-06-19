import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

const DashboardWrapper = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/user-type`, {
          withCredentials: true
        })
        console.log(response.data)
        if (response.data == 'false') {
          router.push('/login')
        }
        if (response.data == 'member') {
          router.push('/user')
        }
      } catch (error) {
        console.error('Error checking authentication:', error)
        router.push('/login')
      }
    }

    checkAuthentication()
  }, [])

  return <>{children}</>
}

export default DashboardWrapper
