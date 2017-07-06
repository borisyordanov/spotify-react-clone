import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const artistDetailsReducer = (state = initialState.userDetails, action) => {
	switch (action.type) {
		case actionTypes.USER_DETAILS_CHANGE:
			return action.userDetails;
		case actionTypes.USER_DETAILS_CLEAR:
			return initialState.userDetails;
		default:
			return state;
	}
};
export default artistDetailsReducer;
