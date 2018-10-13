import firebase from 'firebase';
import 'firebase/firestore'

const config = {
  apiKey: ////////,
    authDomain: "rapidalert-72de2.firebaseapp.com",
    databaseURL: "https://rapidalert-72de2.firebaseio.com",
    projectId: "rapidalert-72de2",
    storageBucket: "rapidalert-72de2.appspot.com",
    messagingSenderId: "645849538978"
};
firebase.initializeApp(config);


firebase.firestore().settings({timestampsInSnapshots: true});


export default firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
