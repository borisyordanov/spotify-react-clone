import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import AlbumsModel from '../../../models/AlbumsModel';

export const updateNewReleases = newReleases => {
	return {
		type: actionTypes.NEW_RELEASES_CHANGE,
		newReleases
	};
};

export function getNewReleases() {
	return dispatch => {
		requests
			.GetNewReleases()
			.then(response => {
				let albums = [];

				response.map(album => albums.push(new AlbumsModel(album)));

				dispatch(updateNewReleases(albums));
			})
			.catch(err => console.log(err));
	};
}
