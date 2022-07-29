import { createReducer } from '../../../utils/reducerUtils'
import { ADD_CART, GET_CART } from '../../constants/cart.constants'

const initialState = 0

const getCart = (state, payload) => {
  return (state = payload)
}

const addCart = (state, payload) => {
  return state + 1
}

export default createReducer(initialState, {
  [GET_CART]: getCart,
  [ADD_CART]: addCart,
})
