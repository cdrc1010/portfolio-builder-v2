import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCKCfd_29JV5-CBcWmr45gK5ZZnx64L7fs",
    authDomain: "portfolio-builder-3e7ae.firebaseapp.com",
    projectId: "portfolio-builder-3e7ae",
    storageBucket: "portfolio-builder-3e7ae.appspot.com",
    messagingSenderId: "548219671991",
    appId: "1:548219671991:web:203f06157095ad072ac432",
    measurementId: "G-NBJJZVW3W5"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }