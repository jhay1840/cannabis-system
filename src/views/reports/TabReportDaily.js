import { useState, useEffect } from 'react'
import axios from 'axios'

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
import TableReport from '../tables/TableReport'
import BarGraphReport from 'src/views/reports/BarGraphReport'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
import { Tab } from 'mdi-material-ui'
const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
const TabReportDaily = () => {
  const [tableData, setTableData] = useState([])
  const [barData, setBarData] = useState([])
  const [dayIndex, setDayIndex] = useState('')

  const [closeDate, setCloseDate] = useState(getTodayDate())

  useEffect(() => {
    // Fetch data from your API or any other source
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: { startDate: closeDate, endDate: closeDate },
          withCredentials: true // Add this option
        })
        setTableData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    const fetchBarData = async () => {
      try {
        const startDate = new Date(closeDate)
        const endDate = new Date(closeDate)

        // Calculate Monday of the week containing closeDate
        startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7)) // Adjust for Sunday start
        const formattedStartDate = startDate.toISOString().split('T')[0] // Format to 'YYYY-MM-DD'

        // Calculate Sunday of the week containing closeDate
        endDate.setDate(startDate.getDate() + 6) // Sunday is 6 days after Monday
        const formattedEndDate = endDate.toISOString().split('T')[0] // Format to 'YYYY-MM-DD'

        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            startDate: formattedStartDate,
            endDate: formattedEndDate
          },
          withCredentials: true // Add this option if needed
        })

        setBarData(response.data) // Set barData with the fetched data
      } catch (error) {
        console.error('Error fetching barData:', error)
      }
    }

    fetchData()
    fetchBarData()

    // Function to get the day index
    const getDayIndex = date => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const day = new Date(date).getDay() // Get day index (0-6)
      return days.indexOf(days[day])
    }

    setDayIndex(getDayIndex(closeDate))
    console.log(dayIndex)
  }, [closeDate])

  return (
    <CardContent>
      <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6}>
          <Typography variant='h5'>Daily Sales Report</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} sx={{}}>
            <TextField
              fullWidth
              label='Date'
              type='date'
              value={closeDate}
              onChange={e => setCloseDate(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position='start'></InputAdornment>
              }}
              required
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <CardHeader title='Members' titleTypographyProps={{ variant: 'h6' }} /> */}
          <TableReport data={tableData} />
        </Grid>
        <Grid item xs={8}>
          <BarGraphReport data={barData} closeDate={dayIndex} />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabReportDaily
