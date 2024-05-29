// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
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
  console.log('tete' + closeDate)
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
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded',
        highlight: {
          enabled: true,
          opacity: 1,
          barHeight: 30,
          colors: [theme.palette.primary.main],
          fill: {
            colors: [theme.palette.primary.main],
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: 'vertical',
              shadeIntensity: 0.5,
              gradientToColors: [theme.palette.primary.main],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          }
        }
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
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
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
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
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts
          type='bar'
          height={205}
          options={options}
          series={[{ data: dailyUsageData.map(item => item.usage) }]}
          // Highlight the main bar for closeDate
          selection={2}
        />
      </CardContent>
    </Card>
  )
}

export default BarGraphReport
