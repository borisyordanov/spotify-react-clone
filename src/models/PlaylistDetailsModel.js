export default function PlaylistDetailsModel(playlist) {
	return {
		id: playlist.id,
		description: playlist.description,
		image: playlist.images[0].url || 'http://via.placeholder.com/150x150',
		name: playlist.name,
		owner: playlist.owner.id,
		totalTracks: playlist.tracks.total
	};
}
