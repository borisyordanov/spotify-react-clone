import React from 'react';
import PropTypes from 'prop-types';
import Playlists from '../../../../components/Playlists/Playlists';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/yourPlaylists';
import './YourPlaylists.css';

class YourPlaylists extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getYourPlaylists();
	}

	render() {
		return <Playlists lists={this.props.yourPlaylists} />;
	}
}

const mapStateToProps = (state, ownProps) => ({
	yourPlaylists: state.yourPlaylists
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(YourPlaylists);

YourPlaylists.propTypes = {
	yourPlaylists: PropTypes.object.isRequired
};
