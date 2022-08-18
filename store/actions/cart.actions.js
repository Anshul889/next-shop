import { async } from '@firebase/util'
import {
  ADD_TO_CART,
  CLEART_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../constants/cart.constants'

export const addToCart = (product, quantity) => async (dispatch) => {
  const newProduct = { ...product, quantity, total: product.price * quantity }
  try {
    dispatch({ type: ADD_TO_CART, payload: newProduct })
  } catch (e) {
    console.log(e)
  }
}

export const removeFromCart = (product) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: product })
  } catch (e) {
    console.log(e)
  }
}

export const increaseQuantity = (product) => async (dispatch) => {
  const newProduct = {
    ...product,
    quantity: product.quantity + 1,
    total: product.total + product.price,
  }
  dispatch({ type: INCREASE_QUANTITY, payload: newProduct })
}

export const decreaseQuantity = (product) => async (dispatch) => {
  const newProduct = {
    ...product,
    quantity: product.quantity - 1,
    total: product.total - product.price,
  }
  dispatch({ type: DECREASE_QUANTITY, payload: newProduct })
}

export const clearCart = () => async(dispatch) => {
  dispatch({type: CLEART_CART})
}
