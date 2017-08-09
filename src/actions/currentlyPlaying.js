import * as actionTypes from '../constants/actionTypes';
import * as requests from '../services/apiRequests';
import CurrentlyPlayingModel from '../models/CurrentlyPlayingModel';

export const updateCurrentlyPlaying = currentlyPlaying => {
    return {
        type: actionTypes.CURRENTLY_PLAYING_CHANGE,
        currentlyPlaying
    };
};

export const stopCurrentlyPlaying = () => {
    return {
        type: actionTypes.CURRENTLY_PLAYING_STOP
    };
};

export const getCurrentlyPlaying = (author, id) => {
    return dispatch => {
        requests
            .GetCurrentlyPlaying(author, id)
            .then(response => {
                dispatch(updateCurrentlyPlaying(new CurrentlyPlayingModel(response.item)));
            })
            .catch(err => console.log(err));
    };
};