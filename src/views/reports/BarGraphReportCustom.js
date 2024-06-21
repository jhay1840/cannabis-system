import React from 'react'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BarGraphReportCustom = ({ data, startDate, endDate }) => {
  const theme = useTheme()

  // Function to format the date to "DD MMM" format
  const formatDate = dateStr => {
    const date = new Date(dateStr)
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    
return `${day} ${month}`
  }


  // Function to generate date labels for the given date range
  const getDatesInRange = (start, end) => {
    const dateArray = []
    let currentDate = new Date(start)
    const endDateTime = new Date(end).getTime()

    while (currentDate <= endDateTime) {
      dateArray.push(new Date(currentDate).toISOString().split('T')[0])
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return dateArray
  }

  // Generate date labels
  const dateLabels = getDatesInRange(startDate, endDate).map(date => {
    const dateObj = new Date(date)
    
return `${dateObj.getDate()} ${dateObj.toLocaleString('default', { month: 'short' })}`
  })

  // Initialize daily usage data with zeros for each date label
  const dailyUsageData = dateLabels.map(label => ({ label, usage: 0 }))

  // Calculate usage for each day based on data items
  data.forEach(item => {
    const itemDate = formatDate(item.closeDate)
    const dataIndex = dateLabels.findIndex(date => date === itemDate)
    console.log(itemDate)
    console.log(dateLabels)

    if (dataIndex !== -1) {
      const usage = item.startOfDayQty - item.endOfDayQty
      dailyUsageData[dataIndex].usage += usage
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
      categories: dateLabels,
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
        title={`Usage (${startDate} - ${endDate})`}
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

export default BarGraphReportCustom
