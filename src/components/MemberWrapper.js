import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

import useMediaQuery from '@mui/material/useMediaQuery'
import MemberLayout from 'src/@core/layouts/MemberLayout'
import MemberVerticalNavItems from 'src/navigation/memberVertical'
import VerticalAppBarContent from 'src/layouts/components/vertical/AppBarContent'
import { useSettings } from 'src/@core/hooks/useSettings'

const MemberWrapper = ({ children }) => {
  const { settings, saveSettings } = useSettings()
  const router = useRouter()
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

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

        if (response.data !== 'member') {
          router.push('/login') // Redirect to login if not authenticated as a member
        }
      } catch (error) {
        console.error('Error checking authentication:', error)
        router.push('/login') // Redirect to login in case of error
      }
    }

    checkAuthentication()
  }, [])

  return (
    <MemberLayout
      hidden={hidden}
      settings='boxed'
      saveSettings={saveSettings}
      verticalNavItems={MemberVerticalNavItems()} // Navigation Items
      verticalAppBarContent={props => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </MemberLayout>
  )
}

export default MemberWrapper
