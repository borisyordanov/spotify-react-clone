import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/artistDetails';
import Albums from '../../components/Albums/Albums';
import Icon from '../../components/Icon/Icon';
import './ArtistDetails.css';

class ArtistDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getArtistDetails(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.actions.clearArtistDetails();
	}

	render() {
		if (this.props.artistDetails.length === 0) {
			return <Icon type="loading" />;
		}

		const artistDetails = (
			<div className="artist-info">
				<img className="avatar" src={this.props.artistDetails.info.image} alt="" />
				<p className="name">{this.props.artistDetails.info.name}</p>
				<p className="followers">{this.props.artistDetails.info.followers} followers</p>
			</div>
		);

		return (
			<div className="artist-view">
				{artistDetails}
				<h1 className="title">Albums</h1>
				<Albums albums={this.props.artistDetails.albums} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	artistDetails: state.artistDetails
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetails);

ArtistDetails.propTypes = {
	artistDetails: PropTypes.object.isRequired
};
