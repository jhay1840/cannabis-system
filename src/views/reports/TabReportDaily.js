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

import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Demo Components Imports
import TableReport from '../tables/TableReport'
import BarGraphReport from 'src/views/reports/BarGraphReport'

// ** Icons Imports
import Cannabis from 'mdi-material-ui/Cannabis'
import BasketCheckOutline from 'mdi-material-ui/BasketCheckOutline'
import TrophyAward from 'mdi-material-ui/TrophyAward'
import BasketOutline from 'mdi-material-ui/BasketOutline'

const getYesterdayDate = () => {
  const today = new Date()

  // Get yesterday's date by subtracting 1 day from today
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000)

  const year = yesterday.getFullYear()
  const month = String(yesterday.getMonth() + 1).padStart(2, '0')
  const day = String(yesterday.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

// Example usage

const TabReportDaily = () => {
  const [tableData, setTableData] = useState([])

  const [barData, setBarData] = useState([])
  const [dayIndex, setDayIndex] = useState('')
  const [totalUsage, setTotalUsage] = useState('')
  const [totalUsageYesterday, setTotalUsageYesterday] = useState('')
  const [trend, setTrend] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [topProduct, setTopProduct] = useState('')

  const [closeDate, setCloseDate] = useState(getYesterdayDate())
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  useEffect(() => {
    // Fetch data from your API or any other source
    const fetchData = async () => {
      try {
        setTotalProducts('0')
        setTopProduct('N/A')

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/reports`, {
          params: { startDate: closeDate, endDate: closeDate },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true // Add this option
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

    const fetchDataYesterday = async () => {
      try {
        // Get the current close date from the existing closeDate variable
        // Parse the closeDate string into a Date object
        const closeDateObj = new Date(closeDate)

        // Calculate yesterday's date by subtracting 1 day (24 hours in milliseconds)
        const yesterdayDate = new Date(closeDateObj.getTime() - 24 * 60 * 60 * 1000)

        // Format yesterday's date as "YYYY-MM-DD"
        const formattedYesterdayDate = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(
          2,
          '0'
        )}-${String(yesterdayDate.getDate()).padStart(2, '0')}`

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/reports`, {
          params: { startDate: formattedYesterdayDate, endDate: formattedYesterdayDate },
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
        setTotalUsageYesterday(totalUsageValue)
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

    fetchData()
    fetchBarData()
    fetchDataYesterday()

    // // Function to get the day index
    // const getDayIndex = date => {
    //   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    //   const day = new Date(date).getDay() // Get day index (0-6)
    //   return days.indexOf(days[day])
    // }

    // setDayIndex(getDayIndex(closeDate))
    // console.log(dayIndex)
  }, [closeDate])
  useEffect(() => {
    // Calculate the percentage change only when totalUsage and totalUsageYesterday are set
    if (totalUsage !== '' && totalUsageYesterday !== '') {
      const percentageChange = ((totalUsage - totalUsageYesterday) / totalUsageYesterday) * 100

      // Check if the percentageChange is finite
      let trendValue = isFinite(percentageChange) ? percentageChange.toFixed(2) : ''

      // Remove decimals if whole number
      if (Number.isInteger(percentageChange)) {
        trendValue = Math.floor(percentageChange)
      }

      setTrend(trendValue)
    }
  }, [totalUsage, totalUsageYesterday])

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

        <Grid item xs={8}>
          <BarGraphReport data={barData} closeDate={dayIndex} />
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
                subtitle='Daily Usage'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalUsageYesterday}
                title="Yesterday's Usage"
                color='secondary'
                subtitle='Daily Usage'
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
                subtitle='Daily Top Product'
                title='Top Product'
                icon={<TrophyAward />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <CardHeader title='Members' titleTypographyProps={{ variant: 'h6' }} /> */}
          <TableReport data={tableData} />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabReportDaily
