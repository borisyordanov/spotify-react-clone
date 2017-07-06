import React from 'react';
import PropTypes from 'prop-types';
import './BrowseNav.css';
import { Link } from 'react-router-dom';

const BrowseNav = props => {
	const browseNavItems = [
		{
			route: 'featured',
			routeState: 'featured-playlists',
			title: 'Featured',
			root: 'browse'
		},
		{
			route: 'genres',
			routeState: 'categories',
			title: 'Genres & Moods',
			root: 'browse'
		},
		{
			route: 'new-releases',
			routeState: 'new-releases',
			title: 'New Releases',
			root: 'browse'
		}
	];

	return (
		<nav>
			<ul className="top-nav">
				{browseNavItems.map(navItem =>
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

export default BrowseNav;

BrowseNav.propTypes = {
	clickHandler: PropTypes.func
};
