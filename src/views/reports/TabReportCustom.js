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
import BarGraphReportCustom from './BarGraphReportCustom'

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

const TabReportCustom = () => {
  const [tableData, setTableData] = useState([])

  const [barData, setBarData] = useState([])
  const [dayIndex, setDayIndex] = useState('')
  const [totalUsage, setTotalUsage] = useState('')
  const [totalUsageYesterday, setTotalUsageYesterday] = useState('')
  const [trend, setTrend] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [topProduct, setTopProduct] = useState('')

  const [startDate, setStartDate] = useState(getYesterdayDate())
  const [endDate, setEndDate] = useState(getYesterdayDate())
  const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/reports`, {
          params: { startDate, endDate },
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in Authorization header
          },
          withCredentials: true
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

    fetchData()
  }, [startDate, endDate])

  return (
    <CardContent>
      <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6}>
          <Typography variant='h5'>Daily Sales Report</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label='Start Date'
            type='date'
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position='start'></InputAdornment>
            }}
            required
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label='End Date'
            type='date'
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position='start'></InputAdornment>
            }}
            required
          />
        </Grid>

        <Grid item xs={8}>
          <BarGraphReportCustom data={tableData} startDate={startDate} endDate={endDate} />
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
                subtitle='Usage'
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
                subtitle=' Top Product'
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

export default TabReportCustom
