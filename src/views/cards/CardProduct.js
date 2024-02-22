import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardProduct = ({ imageUrl, title, description }) => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image={imageUrl} />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardProduct
