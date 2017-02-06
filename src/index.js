import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDBUbVGDvteNNsA_bW1-LnEmf4Dol02Ts0',
  authDomain: 'who-is-in-the-library.firebaseapp.com',
  databaseURL: 'https://who-is-in-the-library.firebaseio.com',
  storageBucket: 'who-is-in-the-library.appspot.com'
}

firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
