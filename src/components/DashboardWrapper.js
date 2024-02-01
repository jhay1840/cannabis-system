import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

const DashboardWrapper = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/public/user-type', {
          withCredentials: true
        })
        console.log(response.data)
        if (response.data == 'false') {
          router.push('/login')
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
