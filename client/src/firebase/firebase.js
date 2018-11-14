import firebase from "firebase";


var config = {
    apiKey: "AIzaSyDFKnGybQ5nrIj53D0SPKyhieaCqs8h0-A",
    authDomain: "communitytable-9bb5a.firebaseapp.com",
    databaseURL: "https://communitytable-9bb5a.firebaseio.com",
    projectId: "communitytable-9bb5a",
    storageBucket: "communitytable-9bb5a.appspot.com",
    messagingSenderId: "414805368177"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
}