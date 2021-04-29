import firebase from 'firebase';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBW4GZ1v2gp9rsgZJl6kYhvQ9fKNuicTuc",
    authDomain: "web-programming-4f29b.firebaseapp.com",
    databaseURL: "https://web-programming-4f29b-default-rtdb.firebaseio.com",
    projectId: "web-programming-4f29b",
    storageBucket: "web-programming-4f29b.appspot.com",
    messagingSenderId: "751461901743",
    appId: "1:751461901743:web:29410b9824c11ee1d7fb5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;