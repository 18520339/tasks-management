/* jshint esversion: 9 */
/* eslint-disable */

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyD2BSm2xUiDStzk_mREYE5T896aI2nHpn4',
	authDomain: 'tasks-app-react.firebaseapp.com',
	databaseURL: 'https://tasks-app-react.firebaseio.com',
	projectId: 'tasks-app-react',
	storageBucket: 'tasks-app-react.appspot.com',
	messagingSenderId: '990212304622',
	appId: '1:990212304622:web:ec10d7b9895326131b0dff'
});

export { firebaseConfig as firebase };

/* eslint-enable */
