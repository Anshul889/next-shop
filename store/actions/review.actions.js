import {doc, updateDoc, deleteField} from 'firebase/firestore'
import {db} from '../../firebase'

export const addReview = (productId, userId, rating, data, name, imageURL) => async (dispatch) => {
  try {
    const docRef = doc(db, 'products', productId)
    const response = await updateDoc(docRef, {
    [`reviews.${userId}.rating`]: rating,
    [`reviews.${userId}.review`]: data.review,
    [`reviews.${userId}.name`]: name,
    [`reviews.${userId}.imageURL`]: imageURL,
    [`reviews.${userId}.created`]: Date.now(),
  })
   window.location.reload();
  console.log('review', response)
  } catch (e) {
    console.log(e)
  }
}

export const deleteReview = (productId, userId) => async (dispatch) =>{
  try {
    const docRef = doc(db, 'products', productId)
    const response = await updateDoc(docRef, {
      [`reviews.${userId}`]: deleteField()
    })
    window.location.reload();
  } catch(e) {
    console.log(e)
  }
}
