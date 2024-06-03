// TableReport.js

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

const formatDate = dateString => {
  if (!dateString || isNaN(new Date(dateString))) {
    return '' // Return empty string for invalid or empty dates
  }

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const calculateUsage = (start, end) => {
  return start - end
}

const TableReport = ({ data }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available.</p>
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>End of Day Quantity</TableCell>
              <TableCell>Start of Day Quantity</TableCell>
              <TableCell>Input Date</TableCell>
              <TableCell>Added By</TableCell>
              <TableCell>Usage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              <TableRow
                key={row._id}
                hover
                role='checkbox'
                tabIndex={-1}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  },
                  '&:last-of-type td, &:last-of-type th': {
                    border: 0
                  }
                }}
              >
                <TableCell component='th' scope='row'>
                  {row._id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.endOfDayQty}</TableCell>
                <TableCell>{row.startOfDayQty}</TableCell>
                <TableCell>{formatDate(row.closeDate)}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{calculateUsage(row.startOfDayQty, row.endOfDayQty)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableReport
