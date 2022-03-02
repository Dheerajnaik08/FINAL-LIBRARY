import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCKTID5WkDzjz4gSaBLNiVTeW0_xNEgstU",
  authDomain: "e-library-app-20696.firebaseapp.com",
  projectId: "e-library-app-20696",
  storageBucket: "e-library-app-20696.appspot.com",
  messagingSenderId: "501431461009",
  appId: "1:501431461009:web:f8ce26979b78e7b5be0b30"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
