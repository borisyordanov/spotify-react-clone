export default function AlbumDetailsModel(album) {
	return {
		id: album.id,
		description: album.description,
		image: album.images[0].url || 'http://via.placeholder.com/150x150',
		name: album.name,
		artists: album.artists,
		totalTracks: album.tracks.total
	};
}
