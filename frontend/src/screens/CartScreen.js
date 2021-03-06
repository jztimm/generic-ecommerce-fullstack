import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  // qty will give us the quantity
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')  // If logged in, redirect to shipping
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ?
          <Message>
            Your cart has no items! <Link to='/'>Go back</Link>
          </Message> : (
            <ListGroup variant='flush'>
              {cartItems.map(item => (
                <ListGroup.Item key={item.product}> {/* item.product is the id*/}
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded/>
                    </Col>

                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>

                    <Col md={2}>${item.price}</Col>

                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) => dispatch(addToCart
                          (item.product, Number(e.target.value)))}
                        >
                        {[...Array(item.inStockCounter).keys()].map(x => (
                          <option key={x+1} value={x+1}>
                            {x+1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={2}>
                      <Button type="button" variant='light' onClick={() => removeFromCartHandler(item.product)}>
                        <DeleteOutlineIcon/>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) 
                items
              </h2>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type="button"
                class="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
