import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// PrivateRoute is a wrapper component for Route
// It checks if user is authenticated
// and renders <Component /> with props
// eg Component could be ExpenseDashboardPage sent from AppRouter
// <Redirect /> is a special component that simply redirects

export const PrivateRoute = ({ isAuthenticated,	component: Component,	...rest }) => (
	<Route {...rest} component={(props) => (
		isAuthenticated ? (
			<div>
				<Header />
				<Component {...props} />
			</div>
		) : (
			<Redirect to="/" />
		)
	)} />
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);