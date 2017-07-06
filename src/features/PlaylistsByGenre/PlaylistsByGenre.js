import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/playlistsByGenre';
import Playlists from '../../components/Playlists/Playlists';
import './PlaylistsByGenre.css';

class PlaylistsByGenre extends React.Component {
	constructor(props, { listen }) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getPlaylistsByGenre(this.props.match.params.id);
	}

	render() {
		return (
			<div>
				<Playlists lists={this.props.playlistsByGenre} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	playlistsByGenre: state.playlistsByGenre
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsByGenre);
