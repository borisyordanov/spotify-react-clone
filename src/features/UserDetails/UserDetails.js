import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/userDetails';
import Playlists from '../../components/Playlists/Playlists';
import Icon from '../../components/Icon/Icon';
import './UserDetails.css';

class UserDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getUserDetails(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.actions.clearUserDetails();
	}
	
	render() {
		if (this.props.userDetails.length === 0) {
			return <Icon type="loading" />;
		}

		const userDetails = (
			<div className="user-info">
				<img className="avatar" src={this.props.userDetails.info.image} alt="" />
				<p className="name">{this.props.userDetails.info.name}</p>
			</div>
		);

		return (
			<div className="user-view">
				{userDetails}
				<h1 className="title">Public Playlists</h1>
				<Playlists lists={this.props.userDetails.playlists} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	userDetails: state.userDetails
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

UserDetails.propTypes = {
	userDetails: PropTypes.object.isRequired
};
