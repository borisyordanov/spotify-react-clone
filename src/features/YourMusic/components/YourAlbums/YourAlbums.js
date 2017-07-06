import React from 'react';
import PropTypes from 'prop-types';
import Albums from '../../../../components/Albums/Albums';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/yourAlbums';
import './YourAlbums.css';

class YourAlbums extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getYourAlbums();
	}

	render() {
		return <Albums albums={this.props.yourAlbums} />;
	}
}

const mapStateToProps = (state, ownProps) => ({
	yourAlbums: state.yourAlbums
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(YourAlbums);

YourAlbums.propTypes = {
	yourAlbums: PropTypes.object.isRequired
};
