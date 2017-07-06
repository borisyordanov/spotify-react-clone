import axios from 'axios';
import requestParams from '../constants/requestParams';
import logout from '../utils/logout';

const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('authToken')).access_token;
};

export const GetUserProfile = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.user, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetUserDetails = id => {
    const authToken = getAuthToken();

    const getUserInfo = () => {
        return axios.get(requestParams.urls.userInfo + id, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        });
    };

    const getUserPlaylists = () => {
        return axios.get(requestParams.urls.userInfo + id + '/playlists', {
            headers: { Authorization: 'Bearer ' + authToken }
        });
    };

    return axios.all([getUserInfo(), getUserPlaylists()]);
};

export const GetCurrentlyPlaying = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.currentlyPlaying, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetFeaturedPlaylists = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.featuredPlaylists, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data.playlists.items;
        })
        .catch(error => {
            console.log(error);
            if (error.response.status === 401) {
                logout();
            }
        });
};

export const GetGenresMoods = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.moodsGenres, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data.categories.items;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetNewReleases = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.newReleases, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data.albums.items;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetYourAlbums = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.yourAlbums, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data.items;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetYourArtists = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.yourArtists, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data.artists.items;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetYourPlaylists = () => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.yourPlaylists, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data.items;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetPlaylistsByGenre = genreId => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.genrePlaylists + genreId + '/playlists', {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            return response.data.playlists.items;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetPlaylistDetails = (userID, playlistID) => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.playlist + userID + '/playlists/' + playlistID, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetAlbumDetails = albumID => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.album + albumID, {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetSearchResults = (searchQuery, type) => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.search, {
            params: {
                q: searchQuery,
                type: type
            },
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetArtistInfo = artistId => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.artist + artistId, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetArtistAlbums = artistId => {
    const authToken = getAuthToken();

    return axios
        .get(requestParams.urls.artistAlbums + artistId + '/albums', {
            headers: { Authorization: 'Bearer ' + authToken }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetArtistDetails = artistId => {
    const authToken = getAuthToken();

    const getArtistInfo = () => {
        return axios.get(requestParams.urls.artist + artistId, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        });
    };

    const getArtistAlbums = () => {
        return axios.get(requestParams.urls.artistAlbums + artistId + '/albums', {
            headers: { Authorization: 'Bearer ' + authToken }
        });
    };

    return axios.all([getArtistInfo(), getArtistAlbums()]);
};
