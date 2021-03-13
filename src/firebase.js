import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkZc82_zUTX4oQaHsRHKw7GAMBN67ag68",
  authDomain: "twitter-clone-395c5.firebaseapp.com",
  projectId: "twitter-clone-395c5",
  storageBucket: "twitter-clone-395c5.appspot.com",
  messagingSenderId: "722935752773",
  appId: "1:722935752773:web:5caeac8990a4d50c949b2c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
