import React from 'react';
import PropTypes from 'prop-types';
import './SearchNav.css';
import { Link } from 'react-router-dom';

const SearchNav = props => {
	const searchNavItems = [
		{
			route: 'playlists',
			routeState: 'playlist',
			title: 'Playlists',
			root: 'search'
		},
		{
			route: 'tracks',
			routeState: 'track',
			title: 'Tracks',
			root: 'search'
		},
		{
			route: 'artists',
			routeState: 'artist',
			title: 'Artists',
			root: 'search'
		},
		{
			route: 'albums',
			routeState: 'album',
			title: 'Albums',
			root: 'search'
		}
	];

	return (
		<nav>
			<ul onClick={props.onClick} className="top-nav">
				{searchNavItems.map(navItem =>
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

export default SearchNav;

SearchNav.propTypes = {
	clickHandler: PropTypes.func
};
