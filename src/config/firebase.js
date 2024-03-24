import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnjen-w1d-tBRnm-n0Jc78-8wVAoEW99A",
  authDomain: "real-estate-50bb0.firebaseapp.com",
  projectId: "real-estate-50bb0",
  storageBucket: "real-estate-50bb0.appspot.com",
  messagingSenderId: "1032988530555",
  appId: "1:1032988530555:web:fdee51e83546c03c590fde",
  measurementId: "G-V5DQCC9ZV6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
