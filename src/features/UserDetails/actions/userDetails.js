import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import UserDetailsModel from '../../../models/UserDetailsModel';
import PlaylistsModel from '../../../models/PlaylistsModel';

export const updateUserDetails = userDetails => {
	return {
		type: actionTypes.USER_DETAILS_CHANGE,
		userDetails
	};
};

export const clearUserDetails = () => {
	return {
		type: actionTypes.USER_DETAILS_CLEAR
	};
};

export function getUserDetails(id) {
	return dispatch => {
		requests.GetUserDetails(id).then(response => {
			console.log(response);
			let user = {
				info: new UserDetailsModel(response[0].data),
				playlists: []
			};

			response[1].data.items.map(playlist => user.playlists.push(new PlaylistsModel(playlist)));
			dispatch(updateUserDetails(user));
		});
	};
}
