import * as actionTypes from '../../../constants/actionTypes';
import initialState from '../../../constants/initialState';

const searchResultsReducer = (state = initialState.searchResults, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_RESULTS_CHANGE:
			return action.searchResults;
		case actionTypes.SEARCH_RESULTS_CLEAR:
			return initialState.searchResults;
		default:
			return state;
	}
};
export default searchResultsReducer;
