export default function CurrentlyPlayingModel(currentlyPlaying) {

    const model = {
        id: currentlyPlaying.id,
        name: currentlyPlaying.name,
        artistName: currentlyPlaying.artists[0].name
    };

    if (currentlyPlaying.album.images.length > 0) {
        model.image = currentlyPlaying.album.images[0].url;
    } else {
        model.image = 'http://via.placeholder.com/150x150';
    }

    return model;
}