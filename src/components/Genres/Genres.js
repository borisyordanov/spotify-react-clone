import React from 'react';
import PropTypes from 'prop-types';
import Genre from '../../components/Genre/Genre';
import './Genres.css';

const Genres = props => {
	return (
		<div className="genres">
			{props.genres.map(genre => <Genre key={genre.id} id={genre.id} name={genre.name} icon={genre.icon} />)}
		</div>
	);
};

export default Genres;

Genres.propTypes = {
	genres: PropTypes.array.isRequired
};
