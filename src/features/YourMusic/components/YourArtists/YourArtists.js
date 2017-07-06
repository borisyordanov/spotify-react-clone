import React from 'react';
import PropTypes from 'prop-types';
import Artists from '../../../../components/Artists/Artists';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/yourArtists';
import './YourArtists.css';

class YourArtists extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getYourArtists();
	}

	render() {
		return <Artists artists={this.props.yourArtists} />;
	}
}

const mapStateToProps = (state, ownProps) => ({
	yourArtists: state.yourArtists
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(YourArtists);

YourArtists.propTypes = {
	yourArtists: PropTypes.object.isRequired
};