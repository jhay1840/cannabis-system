// ** Icon imports
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Account from 'mdi-material-ui/Account'
import HomeOutline from 'mdi-material-ui/HomeOutline'

import Stocks from 'mdi-material-ui/ClipboardListOutline'
import Settings from 'mdi-material-ui/Cog'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/user/'
    },
    {
      title: 'Profile',
      icon: Account,
      path: '/user/profile'
    }

    // {
    //   sectionTitle: 'Settings'
    // },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/user/account-settings'
    // }
  ]
}

export default navigation
