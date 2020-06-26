import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: process.env.REACTIVE_CART_API_KEY,///////////REACTIVE_CART_API_KEY
    authDomain: "reactive-cart.firebaseapp.com",
    databaseURL: "https://reactive-cart.firebaseio.com",
    projectId: "reactive-cart",
    storageBucket: "reactive-cart.appspot.com",
    messagingSenderId: process.env.REACTIVE_CART_MESSAGING_SENDER_ID,/////////////REACTIVE_CART_MESSAGING_SENDER_ID
    appId: process.env.REACTIVE_CART_APP_ID//////////REACTIVE_CART_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));