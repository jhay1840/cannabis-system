import { useState, Fragment } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const Row = ({ row }) => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.transactionId}</TableCell>
        <TableCell align='center'>{row.productId}</TableCell>
        <TableCell align='center'>{row.transactionType}</TableCell>
        <TableCell align='center'>{row.amountPurchased}</TableCell>
        <TableCell align='center'>{row.realWeight}</TableCell>
        <TableCell align='center'>{row.transactionDate}</TableCell>
      </TableRow>
      <TableRow sx={{ background: '#fafafa' }}>
        <TableCell colSpan={7} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2, pb: 6 }}>
              <Typography variant='body1' gutterBottom component='div' sx={{ py: 2 }}>
                More Details
              </Typography>
              <Table size='small' aria-label='details'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Purchased Price per gram</TableCell>
                    <TableCell align='center'>Dispense Price per gram</TableCell>
                    <TableCell align='center'>Total Purchase Price</TableCell>
                    <TableCell align='center'>Total Dispense Price</TableCell>
                    <TableCell align='center'>Created by</TableCell>
                    <TableCell align='center'>Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align='center'>{row.purchasePricePerGram}</TableCell>
                    <TableCell align='center'>{row.dispensePricePerGram}</TableCell>
                    <TableCell align='center'>{row.totalPurchasePrice}</TableCell>
                    <TableCell align='center'>{row.totalDispensePrice}</TableCell>
                    <TableCell align='center'>{row.createdBy}</TableCell>
                    <TableCell align='center'>{row.comments}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const TableTransaction = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available.</p>
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Transaction ID</TableCell>
            <TableCell align='center'>Product ID</TableCell>
            <TableCell align='center'>Transaction Type</TableCell>
            <TableCell align='center'>Amount Purchased</TableCell>
            <TableCell align='center'>Real Weight</TableCell>
            <TableCell align='center'>Transaction Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableTransaction
