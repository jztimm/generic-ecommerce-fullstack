import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {     // fetch data from api and dispatch actions to the reducer
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })    // Call in reducer and set loading to true, prod will be empty

    const {data} = await axios.get('/api/products')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      // If we have a custome error msg, use that. If not then use the generic error msg
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {     // fetch data from api and dispatch actions to the reducer
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })    // Call in reducer and set loading to true, prod will be empty

    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      // If we have a custome error msg, use that. If not then use the generic error msg
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}