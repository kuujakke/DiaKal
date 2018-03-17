import firebase from 'firebase'
import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig)
const db = firebase.database()

const getAll = async () => {
    const eventsSnapshot = await db.get('events')
    console.log('test', eventsSnapshot)
    return eventsSnapshot
}

export default {getAll}