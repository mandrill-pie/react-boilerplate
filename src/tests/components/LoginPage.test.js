import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

// run before running each test
let startLogin, wrapper;

beforeEach(() => {
	// create spy functions
	startLogin = jest.fn();
	wrapper = shallow(
		<LoginPage
			startLogin={startLogin} />
	);
});

test('render LoginPage', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});