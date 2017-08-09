import React from 'react';
import './Profile.css';
import Button from '../../components/Button/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userProfile';
import * as currentlyPlayingActions from '../../actions/currentlyPlaying';
import logout from '../../utils/logout';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
		this.logoutUser = this.logoutUser.bind(this);
	}

	logoutUser() {
		logout();

		this.props.userActions.clearUserProfile();
		this.props.currentlyPlayingActions.stopCurrentlyPlaying();

		this.setState({
			redirect: true
		});
	}

	render() {
		if (!this.props.userProfile.isAuthenticated) {
			return <Redirect to="/login" />;
		} else {
			return (
				<div className="profile">
					<img className="avatar" src={this.props.userProfile.avatar} alt="" />
					<p className="user-name">{this.props.userProfile.name}</p>
					<Button clickHandler={this.logoutUser}>Log Out</Button>
				</div>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	currentlyPlayingActions: bindActionCreators(currentlyPlayingActions, dispatch),
	userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
