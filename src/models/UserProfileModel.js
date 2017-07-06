export default function UserDetailsModel(user) {
	const model = {
		id: user.id,
		name: user.display_name,
		isAuthenticated: true
	};

	if (user.images.length > 0) {
		model.avatar = user.images[0].url;
	} else {
		model.avatar = 'http://via.placeholder.com/150x150';
	}

	return model;
}
