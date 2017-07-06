import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../../components/Artist/Artist';

import './Artists.css';

const Artists = props => {
	return (
		<div className="artists">
			{props.artists.map(playlist => {
				return <Artist id={playlist.id} img={playlist.image} name={playlist.name} key={playlist.id} />;
			})}
		</div>
	);
};

export default Artists;

Artists.propTypes = {
	artists: PropTypes.array.isRequired
};
