import * as actionTypes from '../constants/actionTypes';
import initialState from '../constants/initialState';

const userProfileReducer = (state = initialState.userProfile, action) => {
	switch (action.type) {
		case actionTypes.USER_PROFILE_CHANGE:
			return action.userProfile;
		case actionTypes.USER_PROFILE_CLEAR:
			return initialState.userProfile;
		default:
			return state;
	}
};
export default userProfileReducer;
