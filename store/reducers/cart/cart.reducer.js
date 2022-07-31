import { createReducer } from '../../../utils/reducerUtils'
import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from '../../constants/cart.constants'

const initialState = []

const getCart = (state, payload) => {
  return (state = payload)
}

const addToCart = (state, payload) => {
  return [...state, payload]
}

const removeFromCart = (state, payload) => {
  return[...state.filter(x => x.id !== payload.id)]
}

export default createReducer(initialState, {
  [GET_CART]: getCart,
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart
})
