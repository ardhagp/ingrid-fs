export default {
	async autorun() {
		let varIsLoggedIn = appsmith.store.Employee.IsLoggedIn;

		if (!varIsLoggedIn||varIsLoggedIn===false){
			storeValue("Employee",{"IsLoggedIn":false})
		} else {
			navigateTo('Login Success',{},'SAME_WINDOW');
		}
	}
}