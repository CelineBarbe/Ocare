import firebase from'firebase/app';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDowQpbTbRY3AgN4Oae_oTFZkYeKuVPM-M",
    authDomain: "ocare-e52d8.firebaseapp.com",
    projectId: "ocare-e52d8",
    storageBucket: "ocare-e52d8.appspot.com",
    messagingSenderId: "420378355551",
    appId: "1:420378355551:web:ee0df60dee8c125807f8ea",
    measurementId: "G-VZ77WPYC7B"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  export { storage, firebase as default };