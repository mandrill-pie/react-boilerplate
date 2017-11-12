import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// PublicRoute is a wrapper component for Route
// (see PrivateRoute for details)

export const PublicRoute = ({ isAuthenticated,	component: Component,	...rest }) => (
	<Route {...rest} component={(props) => (
		isAuthenticated ? (
			<Redirect to="/dashboard" />
		) : (
			<Component {...props} />
		)
	)} />
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PublicRoute);