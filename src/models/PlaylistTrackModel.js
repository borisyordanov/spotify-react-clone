export default function TrackModel(track) {
	return {
		id: track.id,
		key: track.id,
		duration: track.duration_ms,
		name: track.name,
		artists: track.artists,
		album: track.album.name
	};
}
