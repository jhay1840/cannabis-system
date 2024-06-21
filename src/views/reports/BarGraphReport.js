import React from 'react'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BarGraphReport = ({ data, closeDate }) => {
  // ** Hook
  const theme = useTheme()

  // Function to get the day label for a given date
  const getDayLabel = dateStr => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date(dateStr)
    
return days[date.getDay()]
  }

  // Initialize daily usage data for each day of the week
  const dailyUsageData = [
    { dayLabel: 'Monday', usage: 0 },
    { dayLabel: 'Tuesday', usage: 0 },
    { dayLabel: 'Wednesday', usage: 0 },
    { dayLabel: 'Thursday', usage: 0 },
    { dayLabel: 'Friday', usage: 0 },
    { dayLabel: 'Saturday', usage: 0 },
    { dayLabel: 'Sunday', usage: 0 }
  ]

  // Calculate usage per day based on startOfDayQty and endOfDayQty
  data.forEach(item => {
    const dayLabel = getDayLabel(item.closeDate)
    const usage = item.startOfDayQty - item.endOfDayQty
    dailyUsageData.find(day => day.dayLabel === dayLabel).usage += usage
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
      categories: dailyUsageData.map(item => item.dayLabel),
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
        title='This Week’s Usage'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton
            size='small'
            aria-label='settings'
            className='card-more-options'
            sx={{ color: 'text.secondary' }}
          ></IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts
          type='line'
          height={315}
          options={options}
          series={[{ data: dailyUsageData.map(item => item.usage) }]}
        />
      </CardContent>
    </Card>
  )
}

export default BarGraphReport
