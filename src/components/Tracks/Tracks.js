import React from 'react';
import PropTypes from 'prop-types';
import Track from '../../components/Track/Track';
import formatTrackDuration from '../../utils/formatTrackDuration';
import './Tracks.css';

const Tracks = props => {
	return (
		<ol className="tracks">
			{props.tracks.map(track => {
				const artists = track.artists
					.map(artist => {
						return artist.name;
					})
					.join(', ');
				return (
					<Track
						id={track.id}
						key={track.key}
						name={track.name}
						duration={formatTrackDuration(track.duration)}
						artists={artists}
						album={track.album || props.albumName}
					/>
				);
			})}
		</ol>
	);
};

export default Tracks;

Tracks.propTypes = {
	tracks: PropTypes.array
};
