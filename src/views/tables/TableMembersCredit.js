// TableMembersCredit.js

import React from 'react'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const formatDate = dateString => {
  if (!dateString || isNaN(new Date(dateString))) {
    return '' // Return empty string for invalid or empty dates
  }

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const TableMembersCredit = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available.</p>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Transaction Type</TableCell>
            <TableCell>Paid By</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Credit Before</TableCell>
            <TableCell>Credit After</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>Transaction Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              key={row.transactionId}
              component='tr'
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                },
                '&:first-of-type td, &:first-of-type th': {
                  // Change here
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.transactionId}
              </TableCell>
              <TableCell>{row.transactionType}</TableCell>
              <TableCell>{row.paidBy}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.creditBefore}</TableCell>
              <TableCell>{row.creditAfter}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{formatDate(row.transactionDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableMembersCredit
