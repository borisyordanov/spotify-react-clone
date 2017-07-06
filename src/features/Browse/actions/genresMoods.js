import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import GenresModel from '../../../models/GenresModel';

export const updateGenresMoods = genresMoods => {
	return {
		type: actionTypes.GENRES_MOODS_CHANGE,
		genresMoods
	};
};

export const getGenresMoods = () => {
	return dispatch => {
		requests
			.GetGenresMoods()
			.then(response => {
				let genres = [];

				response.map(genre => genres.push(new GenresModel(genre)));

				dispatch(updateGenresMoods(genres));
			})
			.catch(err => console.log(err));
	};
};
