import * as actionTypes from '../constants/actionTypes';
import initialState from '../constants/initialState';

const currentlyPlayingReducer = (
	state = initialState.currentlyPlaying,
	action
) => {
	console.log(action);

	switch (action.type) {
		case actionTypes.CURRENTLY_PLAYING_CHANGE:
			return action.currentlyPlaying;
		case actionTypes.CURRENTLY_PLAYING_STOP:
			return initialState.currentlyPlaying;
		default:
			return state;
	}
};
export default currentlyPlayingReducer;
