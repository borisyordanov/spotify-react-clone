import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const newReleasesReducer = (state = initialState.yourAlbums, action) => {
	switch (action.type) {
		case actionTypes.YOUR_ALBUMS_CHANGE:
			return action.yourAlbums;
		default:
			return state;
	}
};
export default newReleasesReducer;
