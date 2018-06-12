import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSKzJDaXDLzXwUiS3Q2jnnnNaKiM1HeoA",
    authDomain: "reactjs-1e25a.firebaseapp.com",
    databaseURL: "https://reactjs-1e25a.firebaseio.com",
    projectId: "reactjs-1e25a",
    storageBucket: "reactjs-1e25a.appspot.com",
    messagingSenderId: "132093278909"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base