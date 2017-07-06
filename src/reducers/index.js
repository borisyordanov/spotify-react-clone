import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import featuredPlaylists from '../features/Browse/reducers/featuredPlaylistsReducer';
import genresMoods from '../features/Browse/reducers/genresMoodsReducer';
import newReleases from '../features/Browse/reducers/newReleasesReducer';
import yourPlaylists from '../features/YourMusic/reducers/yourPlaylistsReducer';
import yourAlbums from '../features/YourMusic/reducers/yourAlbumsReducer';
import yourArtists from '../features/YourMusic/reducers/yourArtistsReducer';
import playlistDetails from '../features/PlaylistDetails/reducers/playlistDetailsReducer';
import artistDetails from '../features/ArtistDetails/reducers/artistDetailsReducer';
import albumDetails from '../features/AlbumDetails/reducers/albumDetailsReducer';
import playlistsByGenre from '../features/PlaylistsByGenre/reducers/playlistsByGenreReducer';
import searchResults from '../features/Search/reducers/searchResultsReducer';
import currentlyPlaying from '../reducers/currentlyPlayingReducer';
import userDetails from '../features/UserDetails/reducers/userDetailsReducer';
import userProfile from '../reducers/userProfileReducer';

const rootReducer = combineReducers({
	routing,
	userProfile,
	featuredPlaylists,
	genresMoods,
	newReleases,
	yourPlaylists,
	yourAlbums,
	yourArtists,
	albumDetails,
	playlistDetails,
	artistDetails,
	playlistsByGenre,
	searchResults,
	currentlyPlaying,
	userDetails
});

export default rootReducer;
