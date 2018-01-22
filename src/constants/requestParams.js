const requestParams = {
	authURLparams: {
		baseAuthURL: 'https://accounts.spotify.com/authorize',
		clientID: '7ef237e5b7f647d0b73eb2487bc92544',
		// redirectURL: 'http://localhost:3000/callback',
		redirectURL: window.location.origin + '/callback',
		responseType: 'token',
		scope: 'user-library-read user-follow-read user-read-currently-playing'
	},
	urls: {
		user: 'https://api.spotify.com/v1/me',
		userInfo: 'https://api.spotify.com/v1/users/',
		featuredPlaylists: 'https://api.spotify.com/v1/browse/featured-playlists',
		moodsGenres: 'https://api.spotify.com/v1/browse/categories',
		newReleases: 'https://api.spotify.com/v1/browse/new-releases',
		yourAlbums: 'https://api.spotify.com/v1/me/albums',
		yourArtists: 'https://api.spotify.com/v1/me/following?type=artist',
		yourPlaylists: 'https://api.spotify.com/v1/me/playlists',
		genrePlaylists: 'https://api.spotify.com/v1/browse/categories/',
		search: 'https://api.spotify.com/v1/search',
		playlist: 'https://api.spotify.com/v1/users/',
		artist: 'https://api.spotify.com/v1/artists/',
		artistAlbums: 'https://api.spotify.com/v1/artists/',
		album: 'https://api.spotify.com/v1/albums/',
		currentlyPlaying: 'https://api.spotify.com/v1/me/player/currently-playing'
	}
};


export default requestParams;
