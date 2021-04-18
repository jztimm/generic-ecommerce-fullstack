import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Product = ({product}) => {
  return (
    // Product Card
    // my-3 = margin top/bot    p-3 = padding     rounded = rounded
    <Card className="my-3 p-3 rounded">

      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />  {/* Product Img */}
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>                         {/* Product title */}
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>                            {/* Product rating */}
          <Rating
            value={product.rating}
            text={`${product.reviewsNum} reviews` }
            color='#ffeb3b'
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
