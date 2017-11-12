import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';


// Initialize Firebase
const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// EXAMPLES:

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').push(expenses[2]);

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			...childSnapshot.val(),
// 			id: childSnapshot.key,
// 		});
// 	});

// 	console.log(expenses);

// }, (error) => {
// 	console.log('Error: ', error);
// });



// database.ref().set({
// 	name: 'Cristi',
// 	age: 27,
// 	isSingle: true,
// 	location: {
// 		city: 'New York',
// 		country: 'United States',
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((error) => {
// 	console.log('Data failed to save: ', error);
// });

// database.ref().update({
// 	name: 'Ada',
// 	age: 29,
// 	job: 'Software developer',
// 	isSingle: null,
// });

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((error) => {
// 		console.log('Error:', error);
// 	});

// [name] is a [job] in [location/city]
// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log (`${snapshot.val().name} is a ${snapshot.val().job} in ${snapshot.val().location.city}`);
// }, (error) => {
// 	console.log('Error', error);
// });
// database.ref().update({
// 	name: 'Adriana',
// 	job: 'Manager',
// 	'location/city': 'New York',
// });


