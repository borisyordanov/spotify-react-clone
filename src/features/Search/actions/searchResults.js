import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import AlbumTrackModel from '../../../models/AlbumTrackModel';
import AlbumsModel from '../../../models/AlbumsModel';
import PlaylistsModel from '../../../models/PlaylistsModel';
import ArtistsModel from '../../../models/ArtistsModel';

export const updateSearchResults = searchResults => {
	return {
		type: actionTypes.SEARCH_RESULTS_CHANGE,
		searchResults
	};
};

export const clearSearchResults = () => {
	return {
		type: actionTypes.SEARCH_RESULTS_CLEAR
	};
};

export const getSearchResults = (searchQuery, type) => {
	return dispatch => {
		requests
			.GetSearchResults(searchQuery, type)
			.then(response => {
				if (type === 'track') {
					let tracks = [];
					response.tracks.items.map(track => tracks.push(new AlbumTrackModel(track)));
					dispatch(updateSearchResults({ tracks: tracks, type: type }));
				} else if (type === 'album') {
					let albums = [];
					response.albums.items.map(album => albums.push(new AlbumsModel(album)));
					dispatch(updateSearchResults({ albums: albums, type: type }));
				} else if (type === 'artist') {
					let artists = [];
					response.artists.items.map(artist => artists.push(new ArtistsModel(artist)));
					dispatch(updateSearchResults({ artists: artists, type: type }));
				} else if (type === 'playlist') {
					let playlists = [];
					response.playlists.items.map(playlist => playlists.push(new PlaylistsModel(playlist)));
					dispatch(updateSearchResults({ playlists: playlists, type: type }));
				}
			})
			.catch(err => console.log(err));
	};
};
