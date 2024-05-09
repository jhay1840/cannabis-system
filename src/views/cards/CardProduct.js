import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import Link from 'next/link'

const CardProduct = ({ imageUrl, title, colors, price, url, stock }) => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image={imageUrl} />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ marginBottom: 0 }}>{price}</Typography>
        <Typography variant='body2' sx={{ marginBottom: 2 }} color={colors}>
          {stock}
        </Typography>
      </CardContent>
      <Link href={url}>
        <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          View Product
        </Button>
      </Link>
    </Card>
  )
}

export default CardProduct
