// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvV5ij8v2mJEfMWc2bF3Cw3SfMkyp8aE",
  authDomain: "fir-auth-6cd61.firebaseapp.com",
  projectId: "fir-auth-6cd61",
  storageBucket: "fir-auth-6cd61.appspot.com",
  messagingSenderId: "851238462559",
  appId: "1:851238462559:web:2868b85534872318b127ea",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
