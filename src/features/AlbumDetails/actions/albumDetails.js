import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import AlbumTrackModel from '../../../models/AlbumTrackModel';
import AlbumDetailsModel from '../../../models/AlbumDetailsModel';

export const updateAlbumDetails = albumDetails => {
	return {
		type: actionTypes.ALBUM_DETAILS_CHANGE,
		albumDetails
	};
};

export const clearAlbumDetails = () => {
	return {
		type: actionTypes.ALBUM_DETAILS_CLEAR
	};
};

export const getAlbumDetails = (author, id) => {
	return dispatch => {
		requests
			.GetAlbumDetails(author, id)
			.then(response => {
				let album = {
					details: new AlbumDetailsModel(response),
					tracks: []
				};

				response.tracks.items.map(track => album.tracks.push(new AlbumTrackModel(track)));

				dispatch(updateAlbumDetails(album));
			})
			.catch(err => console.log(err));
	};
};
