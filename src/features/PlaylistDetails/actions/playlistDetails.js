import * as actionTypes from '../../../constants/actionTypes';
import * as requests from '../../../services/apiRequests';
import PlaylistTrackModel from '../../../models/PlaylistTrackModel';
import PlaylistDetailsModel from '../../../models/PlaylistDetailsModel';

export const updatePlaylistDetails = playlistDetails => {
	return {
		type: actionTypes.PLAYLIST_DETAILS_CHANGE,
		playlistDetails
	};
};


export const clearPlaylistDetails = () => {
	return {
		type: actionTypes.PLAYLIST_DETAILS_CLEAR
	};
};

export function getPlaylistDetails(author, id) {
	return dispatch => {
		requests
			.GetPlaylistDetails(author, id)
			.then(response => {
				let playlist = {
					details: new PlaylistDetailsModel(response),
					tracks: []
				};

				response.tracks.items.map(track => {
					if (track.track !== null) {
						playlist.tracks.push(new PlaylistTrackModel(track.track));
					}
				});
				dispatch(updatePlaylistDetails(playlist));
			})
			.catch(err => console.log(err));
	};
}
