import React from 'react';
import PropTypes from 'prop-types';
import './YourMusicNav.css';
import { Link } from 'react-router-dom';

const YourMusicNav = props => {
	const yourMusicNavItems = [
		{
			route: 'playlists',
			routeState: 'playlists',
			title: 'Playlists',
			root: 'collection'
		},
		{
			route: 'albums',
			routeState: 'albums',
			title: 'Albums',
			root: 'collection'
		},
		{
			route: 'artists',
			routeState: 'artists',
			title: 'Artists',
			root: 'collection'
		}
	];

	return (
		<nav>
			<ul className="top-nav">
				{yourMusicNavItems.map(navItem =>
					<li className="nav-item" key={navItem.route}>
						<Link
							className="link-item"
							to={{ pathname: `/${navItem.root}/${navItem.route}`, state: `${navItem.routeState}` }}
							key={navItem.id}>
							{navItem.title}
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default YourMusicNav;

YourMusicNav.propTypes = {
	clickHandler: PropTypes.func
};
