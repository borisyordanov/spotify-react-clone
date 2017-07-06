import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const playlistDetailsReducer = (state = initialState.playlistDetails, action) => {
	switch (action.type) {
		case actionTypes.PLAYLIST_DETAILS_CHANGE:
			return action.playlistDetails;
		case actionTypes.PLAYLIST_DETAILS_CLEAR:
			return initialState.playlistDetails;
		default:
			return state;
	}
};
export default playlistDetailsReducer;
