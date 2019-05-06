import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDyoloRv048igJp0PaeBNSesxJal5Osxx4",
  authDomain: "recipe-makr.firebaseapp.com",
  databaseURL: "https://recipe-makr.firebaseio.com",
  projectId: "recipe-makr",
  storageBucket: "recipe-makr.appspot.com",
  messagingSenderId: "777562019447"
};
firebase.initializeApp(config);

export const storage = firebase.storage()

export default firebase
