import React from 'react'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BarGraphReportMonthly = ({ data, closeDate }) => {
  // ** Hook
  const theme = useTheme()

  // Function to get the month label for a given date
  const getMonthLabel = dateStr => {
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
    const date = new Date(dateStr)
    
return months[date.getMonth()]
  }

  // Initialize monthly usage data for each month of the year
  const monthlyUsageData = [
    { monthLabel: 'January', usage: 0 },
    { monthLabel: 'February', usage: 0 },
    { monthLabel: 'March', usage: 0 },
    { monthLabel: 'April', usage: 0 },
    { monthLabel: 'May', usage: 0 },
    { monthLabel: 'June', usage: 0 },
    { monthLabel: 'July', usage: 0 },
    { monthLabel: 'August', usage: 0 },
    { monthLabel: 'September', usage: 0 },
    { monthLabel: 'October', usage: 0 },
    { monthLabel: 'November', usage: 0 },
    { monthLabel: 'December', usage: 0 }
  ]

  // Calculate usage per month based on startOfDayQty and endOfDayQty
  data.forEach(item => {
    const monthLabel = getMonthLabel(item.closeDate)
    const usage = item.startOfDayQty - item.endOfDayQty
    monthlyUsageData.find(month => month.monthLabel === monthLabel).usage += usage
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
      categories: monthlyUsageData.map(item => item.monthLabel),
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
        title='This Year’s Usage'
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
          series={[{ data: monthlyUsageData.map(item => item.usage) }]}
        />
      </CardContent>
    </Card>
  )
}

export default BarGraphReportMonthly
