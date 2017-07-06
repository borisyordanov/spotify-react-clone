import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const albumDetailsReducer = (state = initialState.albumDetails, action) => {
	switch (action.type) {
		case actionTypes.ALBUM_DETAILS_CHANGE:
			return action.albumDetails;
		case actionTypes.ALBUM_DETAILS_CLEAR:
			return initialState.albumDetails;
		default:
			return state;
	}
};
export default albumDetailsReducer;
