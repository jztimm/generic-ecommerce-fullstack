import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS :
      return { loading: false, userInfo: action.payload }   // Send data in the payload
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }     // Send error in the payload
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS :
      return { loading: false, userInfo: action.payload }   // Send data in the payload
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }     // Send error in the payload
    default:
      return state
  }
}

// Have user initialize as empty obj
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }; // keep whatever state was but change loading to true
    case USER_DETAILS_SUCCESS :
      return { loading: false, user: action.payload }   // Send data in the payload
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }     // Send error in the payload
    default:
      return state
  }
}

// Have user initialize as empty obj
export const userUpdateProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true }; // keep whatever state was but change loading to true
    case USER_UPDATE_PROFILE_SUCCESS :
      return { loading: false, success: true, user: action.payload }   // Send data in the payload
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }     // Send error in the payload
    default:
      return state
  }
}