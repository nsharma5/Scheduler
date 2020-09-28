import 'firebase/database';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3BT8V2sb01lPrXvON0NHmaDrQgG8qxLY',
  authDomain: 'cs497-scheduler.firebaseapp.com',
  databaseURL: 'https://cs497-scheduler.firebaseio.com',
  projectId: 'cs497-scheduler',
  storageBucket: 'cs497-scheduler.appspot.com',
  messagingSenderId: '569430246262',
  appId: '1:569430246262:web:9df53213f8b0f7725db057',
  measurementId: 'G-6HNMJXJJQR',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
