// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

const add_member = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Members</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <form onSubmit={e => e.preventDefault()}>
                  <TextField
                    fullWidth
                    label='SCAN CHIP/CARD'
                    placeholder='ID Number'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Magnify />
                        </InputAdornment>
                      )
                    }}
                  />
                  <Button type='submit' variant='contained' size='large' sx={{ mt: 4 }}>
                    Search by id
                  </Button>
                </form>
              </Grid>
              <Grid item xs={6}>
                <form onSubmit={e => e.preventDefault()}>
                  <TextField
                    fullWidth
                    label='Search'
                    placeholder='Name'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Magnify />
                        </InputAdornment>
                      )
                    }}
                  />
                  <Button type='submit' variant='contained' size='large' sx={{ mt: 4 }}>
                    Search by name
                  </Button>
                </form>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Members' titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
    </Grid>
  )
}

export default add_member
