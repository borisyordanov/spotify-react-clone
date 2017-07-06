import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import AlbumsModel from '../../../models/AlbumsModel';

export const updateYourAlbums = yourAlbums => {
	return {
		type: actionTypes.YOUR_ALBUMS_CHANGE,
		yourAlbums
	};
};

export const getYourAlbums = () => {
	return dispatch => {
		requests
			.GetYourAlbums()
			.then(response => {
				let albums = [];

				response.map(album => albums.push(new AlbumsModel(album.album)));

				dispatch(updateYourAlbums(albums));
			})
			.catch(err => console.log(err));
	};
};
