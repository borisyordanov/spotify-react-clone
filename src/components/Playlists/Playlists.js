import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../components/Playlist/Playlist';

import './Playlists.css';

const Playlists = props => {
	return (
		<div className="playlists">
			{props.lists.map(playlist => {
				return (
					<Playlist
						id={playlist.id}
						img={playlist.image}
						name={playlist.name}
						key={playlist.id}
						author={playlist.owner}
					/>
				);
			})}
		</div>
	);
};

export default Playlists;

Playlists.propTypes = {
	lists: PropTypes.array
};
