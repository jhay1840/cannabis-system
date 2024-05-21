import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const TableClosing = ({ data, setTableData }) => {
  const handleInputChange = (e, id, field) => {
    const newTableData = data.map(item => {
      if (item._id === id) {
        return { ...item, [field]: e.target.value }
      }
      return item
    })
    setTableData(newTableData)
  }

  const handleRemove = id => {
    const newTableData = data.filter(item => item._id !== id)
    setTableData(newTableData)
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Add Products</p>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>End of the Day Qty</TableCell>
            <TableCell>Start of the Day Qty</TableCell>
            <TableCell>Usage</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row._id}>
              <TableCell component='th' scope='row'>
                {row._id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <TextField
                  value={row.endOfDayQty}
                  onChange={e => handleInputChange(e, row._id, 'endOfDayQty')}
                  variant='outlined'
                  size='small'
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={row.startOfDayQty}
                  onChange={e => handleInputChange(e, row._id, 'startOfDayQty')}
                  variant='outlined'
                  size='small'
                />
              </TableCell>
              <TableCell>{row.endOfDayQty - row.startOfDayQty}</TableCell>
              <TableCell>
                <Button variant='outlined' color='error' onClick={() => handleRemove(row._id)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableClosing
