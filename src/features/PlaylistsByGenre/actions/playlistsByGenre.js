import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import PlaylistsModel from '../../../models/PlaylistsModel';

export const updatePlaylistsByGenre = playlistsByGenre => {
	return {
		type: actionTypes.PLAYLISTS_BY_GENRE_CHANGE,
		playlistsByGenre
	};
};

export const getPlaylistsByGenre = genre => {
	return dispatch => {
		requests
			.GetPlaylistsByGenre(genre)
			.then(response => {
				let playlists = [];

				response.map(playlist => playlists.push(new PlaylistsModel(playlist)));

				dispatch(updatePlaylistsByGenre(playlists));
			})
			.catch(err => console.log(err));
	};
};
