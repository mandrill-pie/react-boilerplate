Skris

# Objects

## Note
	id
	title
	content
	notebook_id
	date_created
	date_modified
	tag_ids

## Notebook
	id
	title
	user_id
	parent_id (v2)
	date_created
	date_modified

## User
	id
	email
	device_id
	date_created
	date_modified
	date_login

## Tag (v2)
	id
	title
	user_id
	date_created
	date_modified

## Note_sharing (v2)
	note_id
	user_id

## Notebook_sharing (v2)
	notebook_id
	user_id

## Events (poate de tinut in analytics events?)
  user_id
  opens
  time_total
  time_session_avg
  logins
  referals
  ...


# Redux State
```
{
	auth: {

	}
	filters: {
		text: 'App',
		selectedNotebookId: '888wvu'
	},
	notesByNotebookId: [
		'999zyx': {
			title: 'Personal',
			isFetching: false,
			isStale: false,
			lastUpdated: 192742827375,
			items: [
				{
					id: '123abc',
					title: 'Home improvements'
					content: 'A lot of text here, see storage options or fetch when necessary',
					createdAt: 192742827375,
					modifiedAt: 192742827375,
					isFetching: false
				}
				{
					id: '456def',
					title: 'Travel plans'
					content: 'A lot of text here, see storage options or fetch when necessary',
					createdAt: 192742827375,
					modifiedAt: 192742827375,
					isFetching: false
				}
			]
		},
		'888wvu': {
			title: 'Business',
			isFetching: false,
			isStale: false,
			lastUpdated: 192742827375,
			items: [
				{
					id: '789ghi',
					title: 'Javascript learning'
					content: 'A lot of text here, see storage options or fetch when necessary',
					createdAt: 192742827375,
					modifiedAt: 192742827375,
					isFetching: false
				}
			]
		},
	]
}
```

# src/actions/api.js
```
import database from '../firebase/firebase';

// Async fetch notes from db
export const fetchNotes = () => {
	return (dispatch, getState) => {
		// get uid from Store state
		const uid = getState().auth.user.uid;

		// Return promise expenses from DB
		return database.ref(`users/${uid}/expenses`)
			.once('value')
			.then((snapshot) => {
				const expenses = [];
				snapshot.forEach((childSnapshot) => {
					expenses.push({
						...childSnapshot.val(),
						id: childSnapshot.key,
					});
				});

				// Update the Redux Store
				dispatch(setExpenses(expenses));	
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	};
};
```

# src/actions/notes.js
```
import * as api from '../actions/api';

export const receiveNotes = (notes) => ({
	type: 'RECEIVE_NOTES',
	notes
})
export const fetchNotes = () => (dispatch, getState) => (
	api.fetchNotes()
		.then((notes) => dispatch(receiveNotes(notes)))
)
```


# Crazy shit
- Change UI color very slightly every day, from X to Y, only on app open