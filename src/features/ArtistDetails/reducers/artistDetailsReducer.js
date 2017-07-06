import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const artistDetailsReducer = (state = initialState.artistDetails, action) => {
	switch (action.type) {
		case actionTypes.ARTIST_DETAILS_CHANGE:
			return action.artistDetails;
		case actionTypes.ARTIST_DETAILS_CLEAR:
			return initialState.artistDetails;
		default:
			return state;
	}
};
export default artistDetailsReducer;
