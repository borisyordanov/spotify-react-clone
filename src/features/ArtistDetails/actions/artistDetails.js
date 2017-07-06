import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import ArtistDetailsModel from '../../../models/ArtistDetailsModel';
import AlbumsModel from '../../../models/AlbumsModel';

export const updateArtistDetails = artistDetails => {
	return {
		type: actionTypes.ARTIST_DETAILS_CHANGE,
		artistDetails
	};
};

export const clearArtistDetails = () => {
	return {
		type: actionTypes.ARTIST_DETAILS_CLEAR
	};
};

export function getArtistDetails(id) {
	return dispatch => {
		requests.GetArtistDetails(id).then(response => {
			let artist = {
				info: new ArtistDetailsModel(response[0].data),
				albums: []
			};

			response[1].data.items.map(track => artist.albums.push(new AlbumsModel(track)));
			dispatch(updateArtistDetails(artist));
		});
	};
}
