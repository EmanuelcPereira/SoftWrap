import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCZtdRSeDHfp9LcYa0UmDShFQPDVSQ5IDU',
  authDomain: 'softwrap-9707c.firebaseapp.com',
  databaseURL: 'https://softwrap-9707c-default-rtdb.firebaseio.com',
  projectId: 'softwrap-9707c',
  storageBucket: 'softwrap-9707c.appspot.com',
  messagingSenderId: '575610016554',
  appId: '1:575610016554:web:b61bbc7294c65a224f0453',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();
export default database;
