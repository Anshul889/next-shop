import {doc, updateDoc,serverTimestamp} from 'firebase/firestore'
import {db} from '../../firebase'

export const addReview = (productId, userId, rating, data, name, imageURL) => async (dispatch) => {
  try {
    const docRef = doc(db, 'products', productId)
    const response = await updateDoc(docRef, {
    [`reviews.${userId}.rating`]: rating,
    [`reviews.${userId}.review`]: data.review,
    [`reviews.${userId}.name`]: name,
    [`reviews.${userId}.imageURL`]: imageURL,
    // [`reviews.${userId}.created`]: serverTimestamp(),
  });
  console.log('review', response)
  } catch (e) {
    console.log(e)
  }
}
