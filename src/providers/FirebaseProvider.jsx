import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx1G43P6mhcUpSk-mE9NmdbjAueC1EHls",
  authDomain: "c8-firebase.firebaseapp.com",
  projectId: "c8-firebase",
  storageBucket: "c8-firebase.appspot.com",
  messagingSenderId: "791289946551",
  appId: "1:791289946551:web:527a9c2245c2e8e2aa0832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseContext = React.createContext()
const FirebaseProvider = (props) => {
    const children = props.children;
    const theValues = { app }
    return (
   <FirebaseContext.Provider value={theValues}>
       {children}
      </FirebaseContext.Provider>
  )
}

export default FirebaseProvider