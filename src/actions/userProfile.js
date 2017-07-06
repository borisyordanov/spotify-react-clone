import * as actionTypes from '../constants/actionTypes';
import * as requests from '../services/apiRequests';
import UserProfileModel from '../models/UserProfileModel';

export const updateUserProfile = userProfile => {
	return {
		type: actionTypes.USER_PROFILE_CHANGE,
		userProfile
	};
};

export const clearUserProfile = () => {
	return {
		type: actionTypes.USER_PROFILE_CLEAR
	};
};

export const getUserProfile = () => {
	return dispatch => {
		requests
			.GetUserProfile()
			.then(response => {
				dispatch(updateUserProfile(new UserProfileModel(response)));
			})
			.catch(err => console.log(err));
	};
};
