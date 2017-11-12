import authReducer from '../../reducers/auth';

const user = {
	uid: 12,
	email: 'test@email.com'
};

test('should set uid for LOGIN', () => {
	const action = {
		type: 'LOGIN',
		user
	};
	const state = authReducer({}, action);
	expect(state.user.uid).toEqual(action.user.uid);
});

test('should clear uid for LOGOUT', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer({ user }, action);
	expect(state).toEqual({});
});