import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyCdp5WvUApOgK-nZdTaNeHPuJiytCru4aA",
    authDomain: "ecom-store-b501f.firebaseapp.com",
    databaseURL: "https://ecom-store-b501f.firebaseio.com",
    projectId: "ecom-store-b501f",
    storageBucket: "ecom-store-b501f.appspot.com",
    messagingSenderId: "645577561925",
    appId: "1:645577561925:web:e310c44afa7d5d953d102c",
    measurementId: "G-3K0Q6JT03E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth};