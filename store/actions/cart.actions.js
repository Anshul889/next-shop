import { ADD_CART } from "../constants/cart.constants"

export const addCart = () => async (dispatch) => {
  try{
  dispatch({type: ADD_CART})
  } catch (e) {
    console.log(e)
  }
}