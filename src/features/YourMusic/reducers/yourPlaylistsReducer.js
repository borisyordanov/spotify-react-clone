import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const yourPlaylistsReducer = (state = initialState.yourPlaylists, action) => {
	switch (action.type) {
		case actionTypes.YOUR_PLAYLISTS_CHANGE:
			return action.yourPlaylists;
		default:
			return state;
	}
};
export default yourPlaylistsReducer;
