import React from 'react';
import PropTypes from 'prop-types';
import Albums from '../../../../components/Albums/Albums';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newReleases';
import './NewReleases.css';

class NewReleases extends React.Component {
	constructor(props, { listen }) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getNewReleases();
	}

	render() {
		return (
			<div>
				<h1 className="browse-title">The Best New Releases</h1>
				<Albums albums={this.props.newReleases} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	newReleases: state.newReleases
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);

NewReleases.propTypes = {
	newReleases: PropTypes.object.isRequired
};
