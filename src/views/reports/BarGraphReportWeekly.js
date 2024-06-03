import React from 'react'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BarGraphReport = ({ data, closeDate }) => {
  // ** Hook
  const theme = useTheme()

  // Function to get the week label for a given date (Monday to Sunday)
  const getWeekLabel = date => {
    const startOfWeek = new Date(date)
    startOfWeek.setDate(date.getDate() - date.getDay() + 1) // Monday
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 6) // Sunday

    const options = { month: 'short', day: 'numeric' }
    return `${startOfWeek.toLocaleDateString('en-US', options)} - ${endOfWeek.toLocaleDateString('en-US', options)}`
  }

  // Initialize weekly usage data
  var weeklyUsageData = Array.from({ length: 7 }, (_, index) => {
    const currentDate = new Date(closeDate) // Using closeDate instead of currentDate
    const closestMonday = new Date(currentDate)
    closestMonday.setDate(currentDate.getDate() - currentDate.getDay() + 1) // Closest Monday to closeDate
    closestMonday.setDate(closestMonday.getDate() - index * 7) // Adjust for past weeks

    const weekStart = new Date(closestMonday)
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekStart.getDate() + 6) // Calculate end of the week

    return {
      weekLabel: getWeekLabel(weekStart),
      startDate: weekStart,
      endDate: weekEnd,
      usage: 0
    }
  }).reverse() // Reverse to have the oldest week first

  // Calculate usage per week based on startOfDayQty and endOfDayQty
  data.forEach(item => {
    const itemDate = new Date(item.closeDate)

    // Find the matching week in weeklyUsageData
    const matchingWeek = weeklyUsageData.find(week => itemDate >= week.startDate && itemDate <= week.endDate)

    if (matchingWeek) {
      // Calculate usage based on start date and end date of the week
      const usage = item.startOfDayQty - item.endOfDayQty
      matchingWeek.usage += usage
    }
  })

  const options = {
    chart: {
      type: 'line',
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    stroke: {
      width: 2,
      curve: 'smooth',
      colors: [theme.palette.primary.main]
    },
    markers: {
      size: 5,
      colors: [theme.palette.primary.main],
      strokeColors: theme.palette.background.paper,
      strokeWidth: 2
    },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main],
    xaxis: {
      categories: weeklyUsageData.map(item => item.weekLabel),
      tickPlacement: 'on',
      labels: { show: true, style: { fontSize: '12px' } },
      axisTicks: { show: true },
      axisBorder: { show: true }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value} grams`
      }
    },
    tooltip: {
      y: {
        formatter: value => `${value} grams`
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Last 7 Weeks Usage'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts
          type='line'
          height={315}
          options={options}
          series={[{ data: weeklyUsageData.map(item => item.usage) }]}
        />
      </CardContent>
    </Card>
  )
}

export default BarGraphReport
