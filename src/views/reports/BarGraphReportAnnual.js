import React from 'react'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import DotsVerticalIcon from 'mdi-material-ui/DotsVertical' // Assuming the correct import for DotsVertical icon
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BarGraphReportAnnual = ({ data, closeDate }) => {
  // Hook
  const theme = useTheme()

  // Prepare yearly usage data for the last 5 years
  const currentYear = new Date(closeDate).getFullYear()
  const yearlyUsageData = Array.from({ length: 5 }, (_, index) => {
    const year = currentYear - 4 + index
    const yearData = data.filter(item => new Date(item.closeDate).getFullYear() === year)
    const usage = yearData.reduce((total, item) => total + (item.startOfDayQty - item.endOfDayQty), 0)
    return { yearLabel: year.toString(), usage: usage || 0 }
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
      categories: yearlyUsageData.map(item => item.yearLabel),
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
        title='Last 5 Years Usage'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVerticalIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts
          type='line'
          height={315}
          options={options}
          series={[{ data: yearlyUsageData.map(item => item.usage) }]}
        />
      </CardContent>
    </Card>
  )
}

export default BarGraphReportAnnual
