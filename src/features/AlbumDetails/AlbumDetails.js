import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/albumDetails';
import Tracks from '../../components/Tracks/Tracks';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import './AlbumDetails.css';

class AlbumDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getAlbumDetails(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.actions.clearAlbumDetails();
	}

	render() {
		if (this.props.albumDetails.length === 0) {
			return <Icon type="loading" />;
		}

		const albumDetails = (
			<div className="album-info">
				<img className="image" src={this.props.albumDetails.details.image} alt="" />
				<p className="title">{this.props.albumDetails.details.name}</p>
				<p>by <span className="artist">{this.props.albumDetails.details.artists[0].name}</span></p>
				<p className="total-songs">{this.props.albumDetails.details.totalTracks} songs</p>
				<Button>Play</Button>
			</div>
		);
		return (
			<div className="album-view">
				{albumDetails}
				<Tracks tracks={this.props.albumDetails.tracks} albumName={this.props.albumDetails.details.name} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	albumDetails: state.albumDetails
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);

AlbumDetails.propTypes = {
	albumDetails: PropTypes.object.isRequired
};
