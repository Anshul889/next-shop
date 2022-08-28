import { createReducer } from '../../../utils/reducerUtils'
import { ADD_TO_CART, CLEART_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from '../../constants/cart.constants'

const initialState = []

const addToCart = (state, payload) => {
  return [...state, payload]
}

const increaseQuantity = (state, payload) => {
  const idx = state.map(x => x.id).indexOf(payload.id)
  const newState = [...state]
  newState[idx] = payload
  return newState
}

const decreaseQuantity = (state, payload) => {
  const idx = state.map(x => x.id).indexOf(payload.id)
  const newState = [...state]
  newState[idx] = payload
  return newState
}

const removeFromCart = (state, payload) => {
  return[...state.filter(x => x.id !== payload.id)]
}

const clearCart = (state) => {
  return []
}

export default createReducer(initialState, {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [INCREASE_QUANTITY]: increaseQuantity,
  [DECREASE_QUANTITY]: decreaseQuantity,
  [CLEART_CART]: clearCart
})
