import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const newReleasesReducer = (state = initialState.newReleases, action) => {
	switch (action.type) {
		case actionTypes.NEW_RELEASES_CHANGE:
			return action.newReleases;
		default:
			return state;
	}
};
export default newReleasesReducer;
