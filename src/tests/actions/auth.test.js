import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
	const user = {
		uid: 12,
		email: 'test@email.com'
	};
	expect(login(user)).toEqual({
		type: 'LOGIN',
		user
	});
});

test('should generate logout action object', () => {
	expect(logout()).toEqual({
		type: 'LOGOUT'
	});
});