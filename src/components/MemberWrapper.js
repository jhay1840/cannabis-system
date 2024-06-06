import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

import useMediaQuery from '@mui/material/useMediaQuery'
// ** Layout Imports
import MemberLayout from 'src/@core/layouts/MemberLayout'
// ** Navigation Imports
import MemberVerticalNavItems from 'src/navigation/memberVertical'

// ** Component Import

import VerticalAppBarContent from 'src/layouts/components/vertical/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const MemberWrapper = ({ children }) => {
  const { settings, saveSettings } = useSettings()

  const router = useRouter()
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/public/user-type', {
          withCredentials: true
        })
        console.log(response.data)
        if (response.data != 'member') {
          router.push('/login')
        }
      } catch (error) {
        console.error('Error checking authentication:', error)
        router.push('/login')
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
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
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
