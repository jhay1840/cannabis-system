import { useState, useEffect } from 'react'
import axios from 'axios'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import TableReport from '../tables/TableReport'
import BarGraphReport from 'src/views/reports/BarGraphReport'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
// ** Icons Imports
import Cannabis from 'mdi-material-ui/Cannabis'
import BasketCheckOutline from 'mdi-material-ui/BasketCheckOutline'
import TrophyAward from 'mdi-material-ui/TrophyAward'
import BasketOutline from 'mdi-material-ui/BasketOutline'
import BarGraphReportAnnual from './BarGraphReportAnnual'

const getTodayYear = () => {
  const today = new Date()
  const year = today.getFullYear()
  return `${year}`
}

const TabReportAnnual = () => {
  const [tableData, setTableData] = useState([])
  const [barData, setBarData] = useState([])
  const [year, setYear] = useState(getTodayYear())
  const [totalUsage, setTotalUsage] = useState('')
  const [totalUsageLastYear, setTotalUsageLastYear] = useState('')
  const [trend, setTrend] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [topProduct, setTopProduct] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTotalProducts('0')
        setTopProduct('N/A')

        const selectedYear = new Date(year).getFullYear()

        // Calculate start and end dates for the year
        const startDate = new Date(selectedYear, 0, 1) // January 1st
        const endDate = new Date(selectedYear, 11, 31) // December 31st

        const formattedStartDate = startDate.toISOString().split('T')[0]
        const formattedEndDate = endDate.toISOString().split('T')[0]

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
          const usage = item.startOfDayQty - item.endOfDayQty
          totalUsageLoop += usage
        })
        let totalUsageValue = totalUsageLoop.toFixed(2) // Convert to string with 2 decimal places
        if (Number.isInteger(totalUsageLoop)) {
          totalUsageValue = totalUsageLoop.toFixed(0) // Convert to string without decimal places
        }
        setTotalUsage(totalUsageValue)

        const uniqueProducts = new Set(response.data.map(item => item.productId))
        const totalUniqueProductsSold = uniqueProducts.size

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
        const closeDate = new Date(year)
        const closeYear = closeDate.getFullYear()
        const selectedYear = closeYear - 4

        const startDate = new Date(selectedYear, 0, 1) // January 1st
        const endDate = new Date(closeYear, 11, 31) // December 31st

        const formattedStartDate = startDate.toISOString().split('T')[0]
        const formattedEndDate = endDate.toISOString().split('T')[0]

        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            this: 'fetchbar',
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

    const fetchDataLastYear = async () => {
      try {
        const selectedYear = new Date(year).getFullYear()
        const lastYear = selectedYear - 1

        const startDate = new Date(lastYear, 0, 1) // January 1st of the last year
        const endDate = new Date(lastYear, 11, 31) // December 31st of the last year

        const formattedLastYearStartDate = startDate.toISOString().split('T')[0]
        const formattedLastYearEndDate = endDate.toISOString().split('T')[0]

        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            this: 'fetchlast',
            startDate: formattedLastYearStartDate,
            endDate: formattedLastYearEndDate
          },
          withCredentials: true
        })

        let totalUsageLoop = 0
        response.data.forEach(item => {
          const usage = item.startOfDayQty - item.endOfDayQty
          totalUsageLoop += usage
        })
        let totalUsageValue = totalUsageLoop.toFixed(2) // Convert to string with 2 decimal places
        if (Number.isInteger(totalUsageLoop)) {
          totalUsageValue = totalUsageLoop.toFixed(0) // Convert to string without decimal places
        }
        setTotalUsageLastYear(totalUsageValue)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    fetchBarData()
    fetchDataLastYear()
  }, [year])

  useEffect(() => {
    if (totalUsage !== '' && totalUsageLastYear !== '') {
      const percentageChange = ((totalUsage - totalUsageLastYear) / totalUsageLastYear) * 100
      let trendValue = isFinite(percentageChange) ? percentageChange.toFixed(2) : ''

      if (Number.isInteger(percentageChange)) {
        trendValue = Math.floor(percentageChange)
      }

      setTrend(trendValue)
    }
  }, [totalUsage, totalUsageLastYear])

  return (
    <CardContent>
      <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6}>
          <Typography variant='h5'>Annual Sales Report</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} sx={{}}>
            <TextField
              fullWidth
              label='Year'
              type='number'
              value={year}
              onChange={e => setYear(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position='start'></InputAdornment>
              }}
              required
            />
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <BarGraphReportAnnual data={barData} closeDate={year} />
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
                subtitle='Annual Usage'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={totalUsageLastYear}
                title="Last Year's Usage"
                color='secondary'
                subtitle='Annual Usage'
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
                subtitle='Annual Top Product'
                title='Top Product'
                icon={<TrophyAward />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableReport data={tableData} />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabReportAnnual
