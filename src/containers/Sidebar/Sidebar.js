import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userProfile';
import Icon from '../../components/Icon/Icon';
import './Sidebar.css';

const Sidebar = props => {
	return (
		<div className="sidebar">
			<img
				className="logo"
				src="https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png"
				alt=""
			/>
			<nav>
				<ul className="nav">
					<li>
						<Link
							className="nav-item sidebar-search"
							to={{
								pathname: '/search/playlists',
								state: 'playlist'
							}}>
							Search<Icon type="search" />
						</Link>
					</li>
					<li><Link className="nav-item" to="/browse/featured">Browse</Link></li>
					<li><Link className="nav-item" to="/collection/playlists">Your Music</Link></li>
					<li><Link className="nav-item" to="/profile">Profile</Link></li>
				</ul>
			</nav>
			<Link to={'/profile'}>
				<div className="user-widget">
					<img className="user-avatar" src={props.userProfile.avatar} alt="" />
					<p className="user-name">{props.userProfile.name}</p>
				</div>
			</Link>

		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
