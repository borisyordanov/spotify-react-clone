import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const genresMoodsReducer = (state = initialState.yourArtists, action) => {
	switch (action.type) {
		case actionTypes.YOUR_ARTISTS_CHANGE:
			return action.yourArtists;
		default:
			return state;
	}
};
export default genresMoodsReducer;
