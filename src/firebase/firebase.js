import * as firebase from 'firebase';
  
  const config = {
    apiKey: "AIzaSyB8NievygH6TmRReuSVzOEuMHNWZr25C_M",
    authDomain: "reddit-af3d5.firebaseapp.com",
    databaseURL: "https://reddit-af3d5.firebaseio.com",
    projectId: "reddit-af3d5",
    storageBucket: "reddit-af3d5.appspot.com",
    messagingSenderId: "814465735842"
  };

if(!firebase.app.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
}

 //initializing firebase setup