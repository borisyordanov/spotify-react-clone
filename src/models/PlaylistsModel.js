export default function PlaylistsModel(playlist) {
	const model = {
		id: playlist.id,
		name: playlist.name,
		owner: playlist.owner.id
	};

	if (playlist.images.length > 0) {
		model.image = playlist.images[0].url;
	} else {
		model.image = 'http://via.placeholder.com/150x150';
	}

	return model;
}
