import React from 'react';
import { Switch, Route } from 'react-router-dom';
import YourPlaylists from './components/YourPlaylists/YourPlaylists';
import YourAlbums from './components/YourAlbums/YourAlbums';
import YourArtists from './components/YourArtists/YourArtists';
import YourMusicNav from './components/YourMusicNav/YourMusicNav';

const YourMusic = () => {
    return (
        <div>
            <YourMusicNav />
            <Switch>
                <Route path="/collection/playlists" component={YourPlaylists} />
                <Route path="/collection/albums" component={YourAlbums} />
                <Route path="/collection/artists" component={YourArtists} />
            </Switch>
        </div>
    );
};

export default YourMusic;
