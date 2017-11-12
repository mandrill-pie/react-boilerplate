import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('render DashboardPage', () => {
	const wrapper = shallow(<DashboardPage />);
	expect(wrapper).toMatchSnapshot();
});