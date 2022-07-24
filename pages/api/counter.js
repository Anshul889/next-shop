import db from '../../lib/firebase-admin'

const getCounter = async (req,res) => {
    const cityRef = db.collection('counter').doc('reactcounter');
    const doc = await cityRef.get();

    res.status(200).json(doc.data())
}

export default getCounter