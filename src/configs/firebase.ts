// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgwgUkYkHEbr9SWV8MJ_nd44WmwTGOW8c',
  authDomain: 'kad-kahwin-7273f.firebaseapp.com',
  projectId: 'kad-kahwin-7273f',
  storageBucket: 'kad-kahwin-7273f.firebasestorage.app',
  messagingSenderId: '290511232343',
  appId: '1:290511232343:web:3f4951a94ea412f326b212',
  measurementId: 'G-97HR7FP8W2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
