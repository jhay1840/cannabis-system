// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

import TabReportDaily from 'src/views/reports/TabReportDaily'

import DashboardWrapper from 'src/components/DashboardWrapper'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('daily')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <DashboardWrapper>
      <Card>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='report-settings tabs'
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <Tab
              value='daily'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Daily</TabName>
                </Box>
              }
            />
            <Tab
              value='weekly'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Weekly</TabName>
                </Box>
              }
            />
            <Tab
              value='monthly'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Monthly</TabName>
                </Box>
              }
            />
            <Tab
              value='annual'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Annual</TabName>
                </Box>
              }
            />
            <Tab
              value='date-range'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Custom Date</TabName>
                </Box>
              }
            />
          </TabList>

          <TabPanel sx={{ p: 0 }} value='daily'>
            <TabReportDaily />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='weekly'></TabPanel>
          <TabPanel sx={{ p: 0 }} value='monthly'></TabPanel>
          <TabPanel sx={{ p: 0 }} value='annual'></TabPanel>
          <TabPanel sx={{ p: 0 }} value='date-range'></TabPanel>
        </TabContext>
      </Card>
    </DashboardWrapper>
  )
}

export default AccountSettings
