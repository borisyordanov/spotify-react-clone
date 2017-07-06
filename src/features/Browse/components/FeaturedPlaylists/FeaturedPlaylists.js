import React from 'react';
import PropTypes from 'prop-types';
import Playlists from '../../../../components/Playlists/Playlists';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/featuredPlaylists';
import './FeaturedPlaylists.css';

class FeaturedPlaylists extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getFeaturedPlaylists();
	}

	render() {
		return (
			<div>
				<h1 className="browse-title">Featured Playlists</h1>
				<Playlists lists={this.props.featuredPlaylists} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	featuredPlaylists: state.featuredPlaylists
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);

FeaturedPlaylists.propTypes = {
	featuredPlaylists: PropTypes.object.isRequired
};
