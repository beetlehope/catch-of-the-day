import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHhcVCAfewbM6ExHoMrlyLhckqKdAu5kM",
    authDomain: "catch-of-the-day-nadia-zhuk.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-nadia-zhuk.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export { firebaseApp };

//This is a default export
export default base;