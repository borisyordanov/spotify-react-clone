export default function UserDetailsModel(user) {
	return {
		id: user.id,
		image: user.images[0].url || 'http://via.placeholder.com/150x150',
		name: user.display_name,
	};
}
