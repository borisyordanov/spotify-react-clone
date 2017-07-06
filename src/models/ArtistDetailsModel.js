export default function ArtistDetailsModel(artist) {
	return {
		id: artist.id,
		image: artist.images[0].url || 'http://via.placeholder.com/150x150',
		name: artist.name,
		followers: artist.followers.total
	};
}
