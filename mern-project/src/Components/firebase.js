import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuLaDSnsRR18Ownc_WGMlRn_i0nIUoQtg",
    authDomain: "scc-mern-project.firebaseapp.com",
    databaseURL: "https://scc-mern-project.firebaseio.com",
    projectId: "scc-mern-project",
    storageBucket: "scc-mern-project.appspot.com",
    messagingSenderId: "938735508403",
    appId: "1:938735508403:web:7f6a475a86fe69457109c6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db