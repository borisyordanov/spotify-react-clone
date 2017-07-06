import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

const Track = props => {
	return (
		<li className="track">
			<p className="track-name">
				{props.name}
			</p>
			<p className="duration">{props.duration}</p>
			<p className="artists-album">
				{props.artists} • {props.album}
			</p>
		</li>
	);
};

export default Track;

Track.propTypes = {
	name: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	artists: PropTypes.string.isRequired,
	album: PropTypes.string
};
