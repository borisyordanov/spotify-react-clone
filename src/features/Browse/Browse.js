import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BrowseNav from './components/BrowseNav/BrowseNav';
import FeaturedPlaylists from './components/FeaturedPlaylists/FeaturedPlaylists';
import GenresMoods from './components/GenresMoods/GenresMoods';
import NewReleases from './components/NewReleases/NewReleases';

const Browse = () => {
    return (
        <div>
            <BrowseNav />
            <Switch>
                <Route path="/browse/featured" component={FeaturedPlaylists} />
                <Route path="/browse/genres" component={GenresMoods} />
                <Route path="/browse/new-releases" component={NewReleases} />
            </Switch>
        </div>
    );
};

export default Browse;
