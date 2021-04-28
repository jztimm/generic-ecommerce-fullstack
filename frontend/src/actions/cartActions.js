import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => { // fetch data from api and dispatch actions to the reducer
  const {data} = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      inStockCounter: data.inStockCounter,
      qty
    }
  })

  /*
  Save item in localStorage via browser
  Need JSON.stringify() because can only save string in localStorage.
  to extract data from localStorage, you need to use JSON.parse() to parse it back
  to JavaScript
  */
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
