import { ADD_TO_CART } from "../constants/cart.constants"

export const addToCart = (product) => async (dispatch) => {
  try{
  dispatch({type: ADD_TO_CART, payload: product})
  } catch (e) {
    console.log(e)
  }
}