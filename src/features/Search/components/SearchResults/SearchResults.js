import React from 'react';
import Playlists from '../../../../components/Playlists/Playlists';
import Artists from '../../../../components/Artists/Artists';
import Tracks from '../../../../components/Tracks/Tracks';
import Albums from '../../../../components/Albums/Albums';

import './SearchResults.css';

const SearchResults = props => {
	if (props.results.type === 'track') {
		return (
			<div className="search-results">
				<Tracks tracks={props.results.tracks} />
			</div>
		);
	} else if (props.results.type === 'artist') {
		return (
			<div className="search-results">
				<Artists artists={props.results.artists} />)}
			</div>
		);
	} else if (props.results.type === 'album') {
		return (
			<div className="search-results">
				<Albums albums={props.results.albums} />)}
			</div>
		);
	} else {
		return (
			<div className="search-results">
				<Playlists lists={props.results.playlists} />)}
			</div>
		);
	}
};

export default SearchResults;
