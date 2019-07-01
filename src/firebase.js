import firebase from 'firebase';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyDfKWpd8o0b12G4yJDPjygrADZDScwYx00",
    authDomain: "web-chat-react.firebaseapp.com",
    databaseURL: "https://web-chat-react.firebaseio.com",
    projectId: "web-chat-react",
    storageBucket: "",
    messagingSenderId: "1060821498563",
    appId: "1:1060821498563:web:a566ba8c6dede6b1"     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { auth,db,firebaseApp };