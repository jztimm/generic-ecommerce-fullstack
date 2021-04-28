import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
      // Contains item information
      const item = action.payload

      // Use item ID to see if it exists
      const existItem = state.cartItems.find(x => x.product === item.product)

      if (existItem) {    // If item exists, add item to cart
        return {
          ...state,       // Keep existing state the same
          // If current item id is equal to the existItem.prod (ID), then return item, else is x
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        return {
          ...state,       // Keep existing state the same
          cartItems: [...state.cartItems, item] // Have current items and add new item
        }
      }
    default:
      return state
  }
}