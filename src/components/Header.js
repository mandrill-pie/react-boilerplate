import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ user, startLogout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>Boilerplate</h1>
				</Link>
				<button className="btn btn--link" onClick={startLogout}>Logout {user.displayName}</button>
			</div>
		</div>
	</header>
);

const mapStateToProps = (state) => ({
	user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);