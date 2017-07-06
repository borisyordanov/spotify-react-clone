import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userProfile';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				rest.userProfile.isAuthenticated === true
					? <Component {...props} />
					: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
		/>
	);
};

const mapStateToProps = (state, ownProps) => ({
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
