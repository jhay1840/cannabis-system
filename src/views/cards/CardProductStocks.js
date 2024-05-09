import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import Link from 'next/link'

const CardProductStocks = ({ imageUrl, title, stock, url, colors }) => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image={imageUrl} />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ marginBottom: 2 }} color={colors}>
          {stock}
        </Typography>
      </CardContent>
      <Link href={url}>
        <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          Add Stocks
        </Button>
      </Link>
    </Card>
  )
}

export default CardProductStocks
