import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import ArtistsModel from '../../../models/ArtistsModel';

export const updateYourArtists = yourArtists => {
	return {
		type: actionTypes.YOUR_ARTISTS_CHANGE,
		yourArtists
	};
};

export const getYourArtists = () => {
	return dispatch => {
		requests
			.GetYourArtists()
			.then(response => {
				let artists = [];

				response.map(artist => artists.push(new ArtistsModel(artist)));

				dispatch(updateYourArtists(artists));
			})
			.catch(err => console.log(err));
	};
};
