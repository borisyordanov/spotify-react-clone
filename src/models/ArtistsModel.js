export default function ArtistsModel(artist) {
	const model = {
		id: artist.id,
		name: artist.name
	};

	if (artist.images.length > 0) {
		model.image = artist.images[0].url;
	} else {
		model.image = 'http://via.placeholder.com/150x150';
	}
	
	return model;
}
