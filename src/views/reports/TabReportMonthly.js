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
import BarGraphReportMonthly from './BarGraphReportMonthly'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
// ** Icons Imports
import Cannabis from 'mdi-material-ui/Cannabis'
import BasketCheckOutline from 'mdi-material-ui/BasketCheckOutline'
import TrophyAward from 'mdi-material-ui/TrophyAward'
import BasketOutline from 'mdi-material-ui/BasketOutline'

const getTodayMonth = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
}

const TabReportMonthly = () => {
  const [tableData, setTableData] = useState([])
  const [barData, setBarData] = useState([])
  const [monthIndex, setMonthIndex] = useState('')
  const [totalUsage, setTotalUsage] = useState('')
  const [totalUsageLastMonth, setTotalUsageLastMonth] = useState('')
  const [trend, setTrend] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [topProduct, setTopProduct] = useState('')

  const [closeDate, setCloseDate] = useState(getTodayMonth())

  useEffect(() => {
    // Fetch data from your API or any other source
    const fetchData = async () => {
      try {
        setTotalProducts('0')
        setTopProduct('N/A')

        const date = new Date(closeDate)
        const year = date.getFullYear()
        const month = date.getMonth() + 1 // Get the month of the closeDate

        // Calculate start and end dates for the previous month
        let startDate, endDate

        if (month === 0) {
          // If current month is January, adjust for previous year
          startDate = new Date(year - 1, 11, 1) // December of previous year
        } else {
          startDate = new Date(year, month - 1, 1) // Subtract 1 from month to get previous month's start date
          endDate = new Date(year, month, 0) // Calculate the last day of the previous month
        }

        if (!endDate) {
          endDate = new Date(year, month, 0) // Calculate the last day of the previous month
        }

        // Format the dates
        const formattedStartDate = formatDate(startDate)
        const formattedEndDate = formatDate(endDate)

        function formatDate(date) {
          const year = date.getFullYear()
          const month = String(date.getMonth() + 1).padStart(2, '0') // Add 1 to month for zero-based index
          const day = String(date.getDate()).padStart(2, '0')
          return `${year}-${month}-${day}`
        }
        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            this: 'fetchdatapak',
            startDate: formattedStartDate,
            endDate: formattedEndDate
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
        const date = new Date(closeDate)
        const year = date.getFullYear()

        // Calculate start date as January 1st of the current year
        const startDate = new Date(year, 0, 1)
        // Calculate end date as December 31st of the current year
        const endDate = new Date(year, 11, 31)

        const formattedStartDate = formatDate(startDate)
        const formattedEndDate = formatDate(endDate)

        function formatDate(date) {
          const year = date.getFullYear()
          const month = String(date.getMonth() + 1).padStart(2, '0') // Add 1 to month for zero-based index
          const day = String(date.getDate()).padStart(2, '0')
          return `${year}-${month}-${day}`
        }

        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            this: 'fetchbar',
            startDate: formattedStartDate,
            endDate: formattedEndDate
          },
          withCredentials: true // Add this option if needed
        })
        console.log(formattedStartDate)
        console.log(formattedEndDate)

        setBarData(response.data) // Set barData with the fetched data
      } catch (error) {
        console.error('Error fetching barData:', error)
      }
    }

    const fetchDataLastMonth = async () => {
      try {
        const date = new Date(closeDate)

        // Calculate the previous month's start and end dates
        const year = date.getFullYear()
        const month = date.getMonth() // Note: JavaScript months are zero-based
        let lastMonthStartDate, lastMonthEndDate

        if (month === 0) {
          // If current month is January, go back to December of previous year
          lastMonthStartDate = new Date(year - 1, 11, 1)
          lastMonthEndDate = new Date(year - 1, 11, 31) // December has 31 days
        } else {
          // For other months, simply subtract 1 from the current month
          lastMonthStartDate = new Date(year, month - 1, 1)
          lastMonthEndDate = new Date(year, month, 0)
        }
        function formatDate(date) {
          const year = date.getFullYear()
          const month = String(date.getMonth() + 1).padStart(2, '0') // Add 1 to month for zero-based index
          const day = String(date.getDate()).padStart(2, '0')
          return `${year}-${month}-${day}`
        }

        const formattedLastMonthStartDate = formatDate(lastMonthStartDate)
        const formattedLastMonthEndDate = formatDate(lastMonthEndDate)

        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            this: 'fetchlast',
            startDate: formattedLastMonthStartDate,
            endDate: formattedLastMonthEndDate
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
        setTotalUsageLastMonth(totalUsageValue)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    fetchBarData()
    fetchDataLastMonth()

    // Function to get the month index
    const getMonthIndex = date => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const month = new Date(date).getMonth() // Get month index (0-11)
      return months.indexOf(months[month])
    }

    setMonthIndex(getMonthIndex(closeDate))
    console.log(monthIndex)
  }, [closeDate])

  useEffect(() => {
    // Calculate the percentage change only when totalUsage and totalUsageLastMonth are set
    if (totalUsage !== '' && totalUsageLastMonth !== '') {
      const percentageChange = ((totalUsage - totalUsageLastMonth) / totalUsageLastMonth) * 100
      // Check if the percentageChange is finite
      let trendValue = isFinite(percentageChange) ? percentageChange.toFixed(2) : ''

      // Remove decimals if whole number
      if (Number.isInteger(percentageChange)) {
        trendValue = Math.floor(percentageChange)
      }

      setTrend(trendValue)
    }
  }, [totalUsage, totalUsageLastMonth])

  return (
    <CardContent>
      <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6}>
          <Typography variant='h5'>Monthly Sales Report</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} sx={{}}>
            <TextField
              fullWidth
              label='Month'
              type='month'
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
          <BarGraphReportMonthly data={barData} closeDate={closeDate} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalUsage}
                icon={<BasketCheckOutline />}
                color='success'
                trendNumber={trend === '' ? '' : trend + '%'}
                trend={trend < 0 ? 'negative' : 'positive'}
                title='Total Usage'
                subtitle='Monthly Usage'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalUsageLastMonth}
                title="Last Month's Usage"
                color='secondary'
                subtitle='Monthly Usage'
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
                subtitle='Monthly Top Product'
                title='Top Product'
                icon={<TrophyAward />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableReport data={tableData} closeDate={closeDate} />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabReportMonthly
