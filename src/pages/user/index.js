import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import DashboardWrapper from 'src/components/DashboardWrapper'
import BarGraphReport from 'src/views/reports/BarGraphReportWeekly'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import MemberWrapper from 'src/components/MemberWrapper'
import BlankLayout from 'src/@core/layouts/BlankLayout'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** user Components Imports

const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})
const userDashboard = () => {
  const [barData, setBarData] = useState([])
  const [overviewData, setOverviewData] = useState([])

  const [closeDate, setCloseDate] = useState(getTodayDate())
  const [topProductUsage, setTopProductUsage] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [topProductId, setTopProductId] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [topProduct, setTopProduct] = useState('')
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  useEffect(() => {
    // Fetch data from your API or any other source
    const fetchOverviewData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:5000/api/protected/overview', {
          withCredentials: true // Add this option if your API requires authentication
        })
        setOverviewData(response.data)
      } catch (error) {
        console.error('Error fetching overview data:', error)
        setError('Failed to fetch overview data.')
      } finally {
        setLoading(false)
      }
    }

    const fetchBarData = async () => {
      try {
        setTopProduct('N/A')
        setTopProductId('/products')
        setTopProductUsage('0')

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

        const response = await axios.get('http://localhost:5000/api/protected/reports', {
          params: {
            startDate: formattedStartDate,
            endDate: formattedEndDate
          },
          withCredentials: true // Add this option if needed
        })

        setBarData(response.data) // Set barData with the fetched data
        // Initialize an object to store product usage
        const productUsageMap = {}

        // Calculate usage for each product and group data by productId
        response.data.forEach(item => {
          const usage = item.startOfDayQty - item.endOfDayQty
          if (!productUsageMap[item.productId]) {
            productUsageMap[item.productId] = {
              id: item.productId, // Use productId as the ID
              name: item.name,
              usage: 0
            }
          }
          // Add usage to the existing product or create a new entry if not exist
          productUsageMap[item.productId].usage += usage
        })

        // Convert productUsageMap into an array for sorting
        const productUsageArray = Object.values(productUsageMap)

        // Sort products by total usage (descending order)
        productUsageArray.sort((a, b) => b.usage - a.usage)

        // Get the top product (the one with the highest usage)
        const topProduct = productUsageArray[0]

        // Calculate the sum of usage for the current top product
        const topProductUsageSum = productUsageArray.reduce((sum, product) => {
          return product === topProduct ? sum + product.usage : sum
        }, 0)

        // Set the states
        setTopProduct(topProduct.name) // Set the top product name
        setTopProductId(topProduct.id) // Set the top product ID

        setTopProductUsage(topProductUsageSum.toFixed(0)) // Set the sum of usage for the top product
      } catch (error) {
        console.error('Error fetching barData:', error)
      }
    }

    fetchBarData()
    fetchOverviewData()
  }, [closeDate])
  if (loading) return <div>Loading...</div>
  return (
    <MemberWrapper>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ position: 'relative' }}>
              <CardContent>
                <Typography variant='h6'>{topProduct} 🥳</Typography>
                <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
                  Best seller for the past few weeks
                </Typography>
                <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                  {topProductUsage} gr
                </Typography>
                <Link href={`/products/${topProductId}`} passHref>
                  <Button size='small' variant='contained'>
                    View Product
                  </Button>
                </Link>
                <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard data={overviewData} />
          </Grid>

          <Grid item xs={12}>
            <BarGraphReport data={barData} closeDate={closeDate} />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </MemberWrapper>
  )
}
userDashboard.getLayout = page => <BlankLayout>{page}</BlankLayout>
export default userDashboard
