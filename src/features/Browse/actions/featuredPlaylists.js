import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import PlaylistsModel from '../../../models/PlaylistsModel';

export const updateFeaturedPlaylists = featuredPlaylists => {
	return {
		type: actionTypes.FEATURED_PLAYLISTS_CHANGE,
		featuredPlaylists
	};
};

export const getFeaturedPlaylists = () => {
	return dispatch => {
		requests
			.GetFeaturedPlaylists()
			.then(response => {
				let playlists = [];

				response.map(playlist => playlists.push(new PlaylistsModel(playlist)));

				dispatch(updateFeaturedPlaylists(playlists));
			})
			.catch(err => console.log(err));
	};
};
