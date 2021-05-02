import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}` // Pass in user token here
      }
    }

    // Make request to backend and pass the order data in
    const { data } = await axios.post(`/api/orders`, order, config)

    // If success, send down the state
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      // If we have a custome error msg, use that. If not then use the generic error msg
      payload:
        error.response && error.response.data.message
        ? error.response.data.message : error.message
    })
  }
}