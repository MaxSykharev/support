import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCrKR7ta3rBSIZ2mkMPdPa4goXsYXmrHf8",
  authDomain: "support-d1f15.firebaseapp.com",
  projectId: "support-d1f15",
  storageBucket: "support-d1f15.appspot.com",
  messagingSenderId: "257690139237",
  appId: "1:257690139237:web:cb616b8197cf672391248c",
  measurementId: "G-SWGTH709L5",
  databaseURL: "https://support-d1f15-default-rtdb.firebaseio.com/"
};

const initFirebase = firebase.initializeApp(firebaseConfig)
export const Context = createContext<any | null>(null);
const auth = firebase.auth()
export const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore,
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);