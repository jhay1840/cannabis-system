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
        <TableCell align='center'>{row.memberCode}</TableCell>
        <TableCell align='center'>{row.transactionType}</TableCell>
        <TableCell align='center'>{row.amountTotal}</TableCell>
        <TableCell align='center'>{new Date(row.checkoutDate).toLocaleDateString()}</TableCell>
        <TableCell align='center'>{row.createdBy}</TableCell>
      </TableRow>
      <TableRow sx={{ background: '#fafafa' }}>
        <TableCell colSpan={7} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2, pb: 6 }}>
              <Typography variant='body1' gutterBottom component='div' sx={{ py: 2 }}>
                Products Dispensed
              </Typography>
              <Table size='small' aria-label='products'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Name</TableCell>
                    <TableCell align='center'>Category</TableCell>
                    <TableCell align='center'>Sale Price</TableCell>
                    <TableCell align='center'>Weight</TableCell>
                    <TableCell align='center'>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell align='center'>{product.name}</TableCell>
                      <TableCell align='center'>{product.category}</TableCell>
                      <TableCell align='center'>{product.salePrice}</TableCell>
                      <TableCell align='center'>{product.weight}</TableCell>
                      <TableCell align='center'>{product.subtotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography variant='body1' gutterBottom component='div' sx={{ py: 2, mt: 4 }}>
                Comments
              </Typography>
              <Typography variant='body2'>{row.comments}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const TableDispenseTransaction = ({ data }) => {
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
            <TableCell align='center'>Member Code</TableCell>
            <TableCell align='center'>Transaction Type</TableCell>
            <TableCell align='center'>Amount Total</TableCell>
            <TableCell align='center'>Checkout Date</TableCell>
            <TableCell align='center'>Created By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <Row key={row._id.$oid} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDispenseTransaction
