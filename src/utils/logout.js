const logout = () => {
	let blankUserData = {
		avatar:
			'https://static1.squarespace.com/static/5494c048e4b0af099ee17eb8/t/56ce13f122482ef842f74b9d/1456346101630/',
		displayName: 'user',
		isAuthenticated: false
	};

	localStorage.setItem('userData', JSON.stringify(blankUserData));
	localStorage.setItem('authToken', JSON.stringify({}));
	window.history.pushState('login', 'Login', '/login');
};

export default logout;
