export default function AlbumsModel(album) {
	return {
		id: album.id,
		image: album.images[0].url || 'http://via.placeholder.com/150x150',
		name: album.name,
		artists: album.artists
	};
}
