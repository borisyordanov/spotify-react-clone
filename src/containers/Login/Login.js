import React from 'react';
import Button from '../../components/Button/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentlyPlayingActions from '../../actions/currentlyPlaying';
import * as userActions from '../../actions/userProfile';

import requestParams from '../../constants/requestParams';
import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.openSpotifyLogin = this.openSpotifyLogin.bind(this);
	}

	componentWillMount() {
		window.loginSuccess = () => {
			this.props.userActions.getUserProfile();
			this.props.currentlyPlayingActions.getCurrentlyPlaying();
		};
	}

	openSpotifyLogin() {
		const authURL = `${requestParams.authURLparams.baseAuthURL}?client_id=${requestParams.authURLparams
			.clientID}&redirect_uri=${encodeURIComponent(
			requestParams.authURLparams.redirectURL
		)}&response_type=${requestParams.authURLparams.responseType}&scope=${requestParams.authURLparams.scope}`;

		const width = 500,
			height = 500,
			left = window.innerWidth / 2 - width / 2,
			top = window.innerHeight / 2 - height / 2;

		window.open(
			authURL,
			'Spotify',
			'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
				width +
				', height=' +
				height +
				', top=' +
				top +
				', left=' +
				left
		);
	}

	render() {
		if (this.props.userProfile.isAuthenticated) {
			return <Redirect to="/browse/featured" />;
		} else {
			return (
				<div className="login">
					<h2>Please Log into your Spotify account</h2>
					<Button clickHandler={this.openSpotifyLogin}>
						Login
					</Button>
				</div>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentlyPlaying: state.currentlyPlaying,
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	currentlyPlayingActions: bindActionCreators(currentlyPlayingActions, dispatch),
	userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
