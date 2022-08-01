import { createReducer } from '../../../utils/reducerUtils'
import { ADD_TO_CART, DECREASE_QUANTITY, GET_CART, INCREASE_QUANTITY, REMOVE_FROM_CART } from '../../constants/cart.constants'

const initialState = []

const getCart = (state, payload) => {
  return (state = payload)
}

const addToCart = (state, payload) => {
  return [...state, payload]
}

const increaseQuantity = (state, payload) => {
  const idx = state.map(x => x.id).indexOf(payload.id)
  const newState = [...state]
  newState[idx] = payload
  return [...newState]
}

const decreaseQuantity = (state, payload) => {
  const idx = state.map(x => x.id).indexOf(payload.id)
  const newState = [...state]
  newState[idx] = payload
  return [...newState]
}

const removeFromCart = (state, payload) => {
  return[...state.filter(x => x.id !== payload.id)]
}

export default createReducer(initialState, {
  [GET_CART]: getCart,
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [INCREASE_QUANTITY]: increaseQuantity,
  [DECREASE_QUANTITY]: decreaseQuantity
})
