import {doc, updateDoc,serverTimestamp, deleteField} from 'firebase/firestore'
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
  });
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
  } catch(e) {
    console.log(e)
  }
}
