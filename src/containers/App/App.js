import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userProfile';
import {withRouter} from 'react-router';
import Callback from '../../components/Callback/Callback';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import CurrentlyPlaying from '../../containers/CurrentlyPlaying/CurrentlyPlaying';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Login from '../../containers/Login/Login';
import Profile from '../../containers/Profile/Profile';
import PlaylistsByGenre from '../../features/PlaylistsByGenre/PlaylistsByGenre';
import Search from '../../features/Search/Search';
import PlaylistDetails from '../../features/PlaylistDetails/PlaylistDetails';
import ArtistDetails from '../../features/ArtistDetails/ArtistDetails';
import AlbumDetails from '../../features/AlbumDetails/AlbumDetails';
import UserDetails from '../../features/UserDetails/UserDetails';
import Browse from '../../features/Browse/Browse';
import YourMusic from '../../features/YourMusic/YourMusic';
import init from '../../utils/init';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		init();	
		this.props.actions.getUserProfile();
		console.log(this.props.userProfile);
	}

	render() {
		return (
			<main className="app">
				<Sidebar />
				<CurrentlyPlaying />
				<section className="main-view">
					<Switch>
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/browse" component={Browse} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/collection" component={YourMusic} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/search/:type" component={Search} />
						<Route path="/login" component={Login} />
						<Route path="/callback" component={Callback} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/profile" component={Profile} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/view/:id" component={PlaylistsByGenre} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/user/:author/playlist/:id" component={PlaylistDetails} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/artist/:id" component={ArtistDetails} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/album/:id" component={AlbumDetails} />
						<PrivateRoute authed={this.props.userProfile.isAuthenticated} path="/user/:id" component={UserDetails} />
					</Switch>
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
