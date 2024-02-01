// ** MUI Imports
import React from 'react'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (id, name, lastName, registered, type, expiry) => {
  return { id, name, lastName, registered, type, expiry }
}

const rows = [
  createData(1, 'John', 'Doe', '2022-01-01', 'Basic', '2023-01-01'),
  createData(2, 'Jane', 'Smith', '2022-02-15', 'Premium', '2023-02-15'),
  createData(3, 'Bob', 'Johnson', '2022-03-20', 'Basic', '2023-03-20'),
  createData(4, 'Alice', 'Williams', '2022-04-10', 'Premium', '2023-04-10'),
  createData(5, 'Charlie', 'Brown', '2022-05-05', 'Basic', '2023-05-05')
]

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Registered</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Expiry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Link
              key={row.id}
              href={`/member/${row.id}`} // Specify the route to navigate to
              passHref
            >
              <TableRow
                component='a' // Wrap TableRow in an anchor tag
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#f5f5f5' // Add a hover effect if desired
                  },
                  '&:last-of-type td, &:last-of-type th': {
                    border: 0
                  }
                }}
              >
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.registered}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.expiry}</TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
