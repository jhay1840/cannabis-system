// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

// ** Icons Imports
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import ViewGridPlus from 'mdi-material-ui/ViewGridPlus'
import { GridOff } from 'mdi-material-ui'
import { ViewGrid } from 'mdi-material-ui'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Stocks</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
            }}
          >
            <Avatar
              sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <ViewGridPlus sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
              Add New Stock
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 6 }}>
              Easily input new cannabis products into your inventory system for accurate stock tracking.
            </Typography>
            <Link href={`stocks/products/`} passHref>
              <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
                Add
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
            }}
          >
            <Avatar
              sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <ViewGrid sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
              View Stocks
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 6 }}>
              Access a detailed overview of your cannabis inventory, including quantities and product details, to
              facilitate inventory control and decision-making.
            </Typography>
            <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
              View
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
            }}
          >
            <Avatar
              sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <GridOff sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
              Closing Stocks
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 6 }}>
              Input the final inventory figures at the end of each day to accurately compare stock levels, ensuring
              precise inventory management and seamless business operations.
            </Typography>
            <Link href={`stocks/close/`} passHref>
              <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
                Close
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardBasic
