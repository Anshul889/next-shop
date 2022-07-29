import { createReducer } from '../../../utils/reducerUtils'
import { GET_CART, } from '../../constants/cart.constants'

const initialState = 0

const getCart = (state, payload) => {
  return state = payload
}

export default createReducer(initialState, {
  [GET_CART]: getCart,
})