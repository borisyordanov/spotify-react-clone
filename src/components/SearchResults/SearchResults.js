import React from 'react';
import PropTypes from 'prop-types';
import Playlists from '../../components/Playlists/Playlists';
import Artists from '../../components/Artists/Artists';
import Tracks from '../../components/Tracks/Tracks';
import Albums from '../../components/Albums/Albums';

const SearchResults = props => {
	if (props.results.type === 'track') {
		return <Tracks tracks={props.results.tracks} />;
	} else if (props.results.type === 'artist') {
		return <Artists artists={props.results.artists} />;
	} else if (props.results.type === 'album') {
		return <Albums albums={props.results.albums} />;
	} else {
		return <Playlists lists={props.results.playlists} />;
	}
};

export default SearchResults;

SearchResults.propTypes = {
	albums: PropTypes.array.isRequired
};
