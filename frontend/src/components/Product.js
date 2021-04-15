import React from 'react'
import Rating from './Rating'
import { Card } from 'react-bootstrap'


const Product = ({product}) => {
  return (
    // Product Card
    // my-3 = margin top/bot    p-3 = padding     rounded = rounded
    <Card className="my-3 p-3 rounded">

      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />  {/* Product Img */}
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>                         {/* Product title */}
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>                            {/* Product rating */}
          <Rating
            value={product.rating}
            text={`${product.reviewsNum} reviews` }
          />
        </Card.Text>

        <Card.Text as='h3'>                             {/* Product price */}
          ${product.price}
        </Card.Text>
      </Card.Body>

    </Card>
  )
}

export default Product
