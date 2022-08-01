import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart.constants"

export const addToCart = (product, quantity) => async (dispatch) => {
  const newProduct = {...product, quantity}
  try{
  dispatch({type: ADD_TO_CART, payload: newProduct})
  } catch (e) {
    console.log(e)
  }
}

export const removeFromCart = (product) => async (dispatch) => {
  try {
    dispatch({type: REMOVE_FROM_CART, payload: product})
  } catch(e) {
    console.log(e)
  }
}