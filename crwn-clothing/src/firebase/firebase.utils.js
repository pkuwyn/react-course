import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFHSQzrKetfqZevcGse5VbsTnSeYNIlvU",
  authDomain: "crwn-db-36c3f.firebaseapp.com",
  databaseURL: "https://crwn-db-36c3f.firebaseio.com",
  projectId: "crwn-db-36c3f",
  storageBucket: "crwn-db-36c3f.appspot.com",
  messagingSenderId: "422700471433",
  appId: "1:422700471433:web:2ac1d43ff70e7f4820a258",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
