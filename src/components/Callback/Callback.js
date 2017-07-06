import React from 'react';
import * as requests from '../../services/apiRequests';
import './Callback.css';

class Callback extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		var hash = {};

		this.props.location.hash.replace(/^#\/?/, '').split('&').forEach(function(kv) {
			var spl = kv.indexOf('=');
			if (spl !== -1) {
				hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
			}

			localStorage.setItem('authToken', JSON.stringify(hash));
		});

		requests.GetUserProfile(hash).then(response => {
			window.opener.loginSuccess();
			window.close();
		});
	}

	render() {
		return <div>Loggin in...</div>;
	}
}

export default Callback;
