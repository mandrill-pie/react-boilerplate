import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

// run before running each test
let startLogout, wrapper;

beforeEach(() => {
	const mockUser = {
		uid: '123abc',
		displayName: 'Logged In User'
	};
	// create spy functions
	startLogout = jest.fn();
	wrapper = shallow(
		<Header
			user={mockUser}
			startLogout={startLogout} />
	);
});

test('render header', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});

