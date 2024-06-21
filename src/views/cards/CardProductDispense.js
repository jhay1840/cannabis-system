import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

import Box from '@mui/material/Box'

import Link from 'next/link'

const CardProductDispense = ({ imageUrl, title, onWeightChange, productId, price, onPriceChange, colors, stock }) => {
  const [weight, setWeight] = useState(0)
  const [productPrice, setProductPrice] = useState(0)

  // Function to handle changes in the weight input
  const handleWeightChange = event => {
    const newWeight = parseFloat(event.target.value) || 0
    const newPrice = price * newWeight
    setWeight(newWeight)
    setProductPrice(newPrice)

    // Notify parent component of weight change
    onWeightChange(productId, newWeight)
    onPriceChange(productId, newPrice)
  }

  const handlePriceChange = event => {
    const newPrice = parseFloat(event.target.value) || 0
    setProductPrice(newPrice)

    // Calculate new weight based on the updated price
    const newWeight = newPrice / price
    setWeight(newWeight)

    // Notify parent component of weight change
    onWeightChange(productId, newWeight)
    onPriceChange(productId, newPrice)
  }
  
return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image={imageUrl} />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 0 }}>
          Price: {price}
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 6 }} color={colors}>
          {stock}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '5%' }}>
          <TextField
            label='Weight'
            variant='outlined'
            type='number'
            value={weight}
            onChange={handleWeightChange}
            disabled={stock === 'Out of stock'}
          />
          <TextField
            label='Price'
            variant='outlined'
            type='number'
            value={productPrice}
            onChange={handlePriceChange}
            disabled={stock === 'Out of stock'}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardProductDispense
