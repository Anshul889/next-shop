import { createReducer } from '../../../utils/reducerUtils'
import { ADD_TO_CART, GET_CART } from '../../constants/cart.constants'

const initialState = []

const getCart = (state, payload) => {
  return (state = payload)
}

const addToCart = (state, payload) => {
  return [...state, payload]
}

export default createReducer(initialState, {
  [GET_CART]: getCart,
  [ADD_TO_CART]: addToCart,
})
