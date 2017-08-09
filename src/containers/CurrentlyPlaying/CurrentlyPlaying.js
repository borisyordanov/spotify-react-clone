import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/currentlyPlaying';
import Icon from '../../components/Icon/Icon';
import './CurrentlyPlaying.css';

class CurrentlyPlaying extends React.Component {
	constructor(props) {
		super(props);
		this.currTime = null;
		this.lastCheckTime = Date.now();
		this.checkInterval = 1000;
		this.update = this.update.bind(this);
	}

	componentWillMount() {
		if (this.props.userProfile.isAuthenticated) {
        	this.update();
        }
	}

	componentWillUnmount() {
		this.props.actions.stopCurrentlyPlaying();
	}

	update() {
		this.currTime = Date.now();

		if (this.lastCheckTime + this.checkInterval < this.currTime) {
			this.props.actions.getCurrentlyPlaying();
			this.lastCheckTime = this.currTime;
		}

		requestAnimationFrame(this.update);
	}

	render() {
		return (
			<div className="currently-playing">
				<img className="album-image" src={this.props.currentlyPlaying.image} alt="" />
				<div className="track-info">
					<p className="track">{this.props.currentlyPlaying.name}</p>
					<p className="artist">{this.props.currentlyPlaying.artistName}</p>
				</div>
				<div className="controls">
					<span className="small">
						<Icon type="shuffle" />
					</span>
					<span className="small">
						<Icon type="previous" />
					</span>
					<Icon type="play" />
					<span className="small">
						<Icon type="next" />
					</span>
					<span className="small">
						<Icon type="loop" />
					</span>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentlyPlaying: state.currentlyPlaying,
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyPlaying);

CurrentlyPlaying.propTypes = {
	currentlyPlaying: PropTypes.object.isRequired
};
