import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const playlistsByGenreReducer = (state = initialState.playlistsByGenre, action) => {
	switch (action.type) {
		case actionTypes.PLAYLISTS_BY_GENRE_CHANGE:
			return action.playlistsByGenre;
		default:
			return state;
	}
};
export default playlistsByGenreReducer;
