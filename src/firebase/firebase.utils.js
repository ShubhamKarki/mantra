import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
	apiKey: "AIzaSyBf8aO_eAA4mHJpgqY_bdRQ3frPBCAgm_A",
    authDomain: "mantra-c408a.firebaseapp.com",
    databaseURL: "https://mantra-c408a.firebaseio.com",
    projectId: "mantra-c408a",
    storageBucket: "mantra-c408a.appspot.com",
    messagingSenderId: "258043763960",
    appId: "1:258043763960:web:7c32c12dd27758524bef0d",
    measurementId: "G-6Q2VDPQ1XM"

};

firebase.initializeApp(config);
