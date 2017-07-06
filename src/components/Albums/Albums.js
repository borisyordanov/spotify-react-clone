import React from 'react';
import PropTypes from 'prop-types';
import Album from '../../components/Album/Album';

import './Albums.css';

const Albums = props => {
	return (
		<div className="albums">
			{props.albums.map(album => {
				return <Album id={album.id} img={album.image} name={album.name} key={album.id} />;
			})}
		</div>
	);
};

export default Albums;

Albums.propTypes = {
	albums: PropTypes.array.isRequired
};
