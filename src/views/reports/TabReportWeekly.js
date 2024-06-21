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

import BarGraphReportWeekly from './BarGraphReportWeekly'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Icons Imports
import Cannabis from 'mdi-material-ui/Cannabis'
import BasketCheckOutline from 'mdi-material-ui/BasketCheckOutline'
import TrophyAward from 'mdi-material-ui/TrophyAward'
import BasketOutline from 'mdi-material-ui/BasketOutline'

const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  
return `${year}-${month}-${day}`
}

const TabReportWeekly = () => {
  const [tableData, setTableData] = useState([])
  const [barData, setBarData] = useState([])
  const [dayIndex, setDayIndex] = useState('')
  const [totalUsage, setTotalUsage] = useState('')
  const [totalUsageLastWeek, setTotalUsageLastWeek] = useState('')
  const [trend, setTrend] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [topProduct, setTopProduct] = useState('')

  const [closeDate, setCloseDate] = useState(getTodayDate())
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  useEffect(() => {
    // Fetch data from your API or any other source
    const fetchData = async () => {
      try {
        setTotalProducts('0')
        setTopProduct('N/A')
        const startDate = new Date(closeDate)
        const endDate = new Date(closeDate)

        // Calculate Monday of the week containing closeDate
        startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7)) // Adjust for Sunday start
        const formattedStartDate = startDate.toISOString().split('T')[0] // Format to 'YYYY-MM-DD'

        // Calculate Sunday of the week containing closeDate
        endDate.setDate(startDate.getDate() + 6) // Sunday is 6 days after Monday

        // Adjust end date if it falls into the next month
        if (endDate.getMonth() !== startDate.getMonth()) {
          endDate.setMonth(startDate.getMonth() + 1) // Move to next month
          endDate.setDate(1) // Set to first day of next month
          while (endDate.getDay() !== 0) {
            // While not Sunday
            endDate.setDate(endDate.getDate() + 1) // Move to next day
          }
        }
        const formattedEndDate = endDate.toISOString().split('T')[0] // Format to 'YYYY-MM-DD'

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/reports`, {
          params: {
            thisis: 'fetchdata',
            startDate: formattedStartDate,
            endDate: formattedEndDate
          },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true // Add this option if needed
        })
        setTableData(response.data)

        let totalUsageLoop = 0
        response.data.forEach(item => {
          // Calculate usage for each item and add it to the totalUsage
          const usage = item.startOfDayQty - item.endOfDayQty
          totalUsageLoop += usage
        })
        let totalUsageValue = totalUsageLoop.toFixed(2) // Convert to string with 2 decimal places
        if (Number.isInteger(totalUsageLoop)) {
          totalUsageValue = totalUsageLoop.toFixed(0) // Convert to string without decimal places
        }
        setTotalUsage(totalUsageValue)

        // Get the total number of unique products sold
        const uniqueProducts = new Set(response.data.map(item => item.productId))
        const totalUniqueProductsSold = uniqueProducts.size

        // Get the top product sold
        const productQuantities = {}
        response.data.forEach(item => {
          const { name, endOfDayQty } = item
          if (!productQuantities[name]) {
            productQuantities[name] = 0
          }
          productQuantities[name] += endOfDayQty
        })

        const sortedProducts = Object.entries(productQuantities).sort((a, b) => b[1] - a[1])
        const topProduct = sortedProducts[0][0]

        setTotalProducts(totalUniqueProductsSold)
        setTopProduct(topProduct)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const fetchBarData = async () => {
      try {
        const endDate = new Date(closeDate)

        // Calculate the number of days until the next Sunday (0 represents Sunday)
        let daysUntilSunday = (7 - endDate.getDay()) % 7

        // Add the days until Sunday to the current date to get the upcoming Sunday
        let upcomingSunday = new Date(endDate.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000)
        const formattedEndDate = upcomingSunday.toISOString().split('T')[0]

        // Calculate start date as Monday of the week 7 weeks ago
        const startDate = new Date(closeDate)
        startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7) - 42) // 49 days for 7 weeks
        const formattedStartDate = startDate.toISOString().split('T')[0] // Format to 'YYYY-MM-DD'

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/reports`, {
          params: {
            thisis: 'fetchbardata',
            startDate: formattedStartDate,
            endDate: formattedEndDate
          },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true // Add this option if needed
        })

        setBarData(response.data) // Set barData with the fetched data
      } catch (error) {
        console.error('Error fetching barData:', error)
      }
    }

    const fetchDataLastWeek = async () => {
      try {
        // Get the current close date from the existing closeDate variable
        // Parse the closeDate string into a Date object
        const closeDateObj = new Date(closeDate)

        // Calculate the previous week's Monday and Sunday
        const dayOfWeek = closeDateObj.getDay()
        const lastSunday = new Date(closeDateObj.getTime() - dayOfWeek * 24 * 60 * 60 * 1000)
        const lastMonday = new Date(lastSunday.getTime() - 6 * 24 * 60 * 60 * 1000)

        // Format last week's Monday and Sunday as "YYYY-MM-DD"
        const formattedLastMonday = `${lastMonday.getFullYear()}-${String(lastMonday.getMonth() + 1).padStart(
          2,
          '0'
        )}-${String(lastMonday.getDate()).padStart(2, '0')}`

        const formattedLastSunday = `${lastSunday.getFullYear()}-${String(lastSunday.getMonth() + 1).padStart(
          2,
          '0'
        )}-${String(lastSunday.getDate()).padStart(2, '0')}`

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/reports`, {
          thisis: 'fetchlastdata',
          params: { thisis: 'lastweek', startDate: formattedLastMonday, endDate: formattedLastSunday },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
        })

        let totalUsageLoop = 0
        response.data.forEach(item => {
          // Calculate usage for each item and add it to the totalUsage
          const usage = item.startOfDayQty - item.endOfDayQty
          totalUsageLoop += usage
        })
        let totalUsageValue = totalUsageLoop.toFixed(2) // Convert to string with 2 decimal places
        if (Number.isInteger(totalUsageLoop)) {
          totalUsageValue = totalUsageLoop.toFixed(0) // Convert to string without decimal places
        }
        setTotalUsageLastWeek(totalUsageValue)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    fetchBarData()
    fetchDataLastWeek()

    // Function to get the day index
    const getDayIndex = date => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const day = new Date(date).getDay() // Get day index (0-6)
      
return days.indexOf(days[day])
    }

    setDayIndex(getDayIndex(closeDate))
    console.log(dayIndex)
  }, [closeDate])
  useEffect(() => {
    // Calculate the percentage change only when totalUsage and totalUsageYesterday are set
    if (totalUsage !== '' && totalUsageLastWeek !== '') {
      const percentageChange = ((totalUsage - totalUsageLastWeek) / totalUsageLastWeek) * 100

      // Check if the percentageChange is finite
      let trendValue = isFinite(percentageChange) ? percentageChange.toFixed(2) : ''

      // Remove decimals if whole number
      if (Number.isInteger(percentageChange)) {
        trendValue = Math.floor(percentageChange)
      }

      setTrend(trendValue)
    }
  }, [totalUsage, totalUsageLastWeek])
  
return (
    <CardContent>
      <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6}>
          <Typography variant='h5'>Weekly Sales Report</Typography>
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

        <Grid item xs={8}>
          <BarGraphReportWeekly data={barData} closeDate={closeDate} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalUsage}
                icon={<BasketCheckOutline />}
                color='success'
                trendNumber={trend == '' ? '' : trend + '%'}
                trend={trend < 0 ? 'negative' : 'positive'}
                title='Total Usage'
                subtitle='Weekly Usage'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalUsageLastWeek}
                title="Last Week's Usage"
                color='secondary'
                subtitle='Weekly Usage'
                icon={<BasketOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalProducts}
                title='Products'
                subtitle='No. of Products sold'
                icon={<Cannabis />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={topProduct}
                color='warning'
                subtitle='Weekly Top Product'
                title='Top Product'
                icon={<TrophyAward />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <CardHeader title='Members' titleTypographyProps={{ variant: 'h6' }} /> */}
          <TableReport data={tableData} closeDate={closeDate} />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabReportWeekly
