// TableBasic.js

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
const calculateAge = dob => {
  const birthDate = new Date(dob)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }

  return age
}

const TableMembersDispense = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available.</p>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Credits</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Registered</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>ID Number</TableCell>
            <TableCell>User Role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Expiry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <Link key={row.memberCode} href={`/dispense/${row.memberCode}`} passHref>
              <TableRow
                component='a'
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
                  {row.memberCode}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.credits}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{formatDate(row.userInfo[0]?.createdAt)}</TableCell>
                <TableCell>{calculateAge(row.dateOfBirth)}</TableCell>
                <TableCell>{row.idNumber}</TableCell>
                <TableCell>{row.userInfo[0]?.userRole}</TableCell>
                <TableCell>{row.userInfo[0]?.email}</TableCell>
                <TableCell>{formatDate(row.expiryDate)}</TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableMembersDispense
