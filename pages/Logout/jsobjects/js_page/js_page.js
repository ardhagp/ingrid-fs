export default {
	autorun() {
		let varIsLoggedIn = appsmith.store.Employee.IsLoggedIn;		

		if(!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		}
	}
}