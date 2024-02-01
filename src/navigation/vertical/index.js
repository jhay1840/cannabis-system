// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Cannabis from 'mdi-material-ui/Cannabis'
import Report from 'mdi-material-ui/ChartBar'
import Store from 'mdi-material-ui/Store'
import Member from 'mdi-material-ui/AccountGroup'
import AddMember from 'mdi-material-ui/AccountMultiplePlus'

import Stocks from 'mdi-material-ui/ClipboardListOutline'
import Settings from 'mdi-material-ui/Cog'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Dispense',
      icon: Store,
      path: '/dispense'
    },
    {
      title: 'Stocks',
      icon: Stocks,
      path: '/stocks'
    },
    {
      title: 'Sales Report',
      icon: Report,
      path: '/sales-report'
    },
    {
      title: 'Products',
      icon: Cannabis,
      path: '/products'
    },
    {
      title: 'Members',
      icon: Member,
      path: '/members'
    },
    {
      title: 'Add Members',
      icon: AddMember,
      path: '/add-member'
    },
    {
      sectionTitle: 'Settings'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings'
    }

    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
