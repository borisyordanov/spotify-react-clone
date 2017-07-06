import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import PlaylistsModel from '../../../models/PlaylistsModel';

export const updateYourPlaylists = yourPlaylists => {
	return {
		type: actionTypes.YOUR_PLAYLISTS_CHANGE,
		yourPlaylists
	};
};

export function getYourPlaylists() {
	return dispatch => {
		requests
			.GetYourPlaylists()
			.then(response => {
				let playlists = [];

				response.map(playlist => playlists.push(new PlaylistsModel(playlist)));

				dispatch(updateYourPlaylists(playlists));
			})
			.catch(err => console.log(err));
	};
}
