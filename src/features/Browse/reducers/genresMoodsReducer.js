import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const genresMoodsReducer = (state = initialState.genresMoods, action) => {
	switch (action.type) {
		case actionTypes.GENRES_MOODS_CHANGE:
			return action.genresMoods;
		default:
			return state;
	}
};
export default genresMoodsReducer;
