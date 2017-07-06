import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/playlistDetails';
import Tracks from '../../components/Tracks/Tracks';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import './PlaylistDetails.css';

class PlaylistDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getPlaylistDetails(this.props.match.params.author, this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.actions.clearPlaylistDetails();
	}

	render() {
		if (this.props.playlistDetails.length === 0) {
			return <Icon type="loading" />;
		}

		const playlistDetails = (
			<div className="playlist-info">
				<img className="image" src={this.props.playlistDetails.details.image} alt="" />
				<p className="title">{this.props.playlistDetails.details.name}</p>
				<p>by <span className="artist">{this.props.playlistDetails.details.owner}</span></p>
				<p>{this.props.playlistDetails.details.description}</p>
				<p className="total-songs">{this.props.playlistDetails.details.totalTracks} songs</p>
				<Button>Play</Button>
			</div>
		);

		return (
			<div className="playlist-view">
				{playlistDetails}
				<Tracks className="tracks" tracks={this.props.playlistDetails.tracks} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	playlistDetails: state.playlistDetails
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetails);

PlaylistDetails.propTypes = {
	playlistDetails: PropTypes.object.isRequired
};