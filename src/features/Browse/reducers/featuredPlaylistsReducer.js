import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const featuredPlaylistsReducer = (state = initialState.featuredPlaylists, action) => {
	switch (action.type) {
		case actionTypes.FEATURED_PLAYLISTS_CHANGE:
			return action.featuredPlaylists;
		default:
			return state;
	}
};
export default featuredPlaylistsReducer;
