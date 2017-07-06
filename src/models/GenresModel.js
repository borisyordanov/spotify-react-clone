export default function GenresModel(genre) {
	const model = {
		id: genre.id,
		name: genre.name
	};

	if (genre.icons.length > 0) {
		model.icon = genre.icons[0].url;
	} else {
		model.icon = 'http://via.placeholder.com/150x150';
	}

	return model;
}
