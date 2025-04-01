export default {
	autorun(){
		let varIsLoggedIn = appsmith.store.Employee_IsLoggedIn;

		if(!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		}
	}
}