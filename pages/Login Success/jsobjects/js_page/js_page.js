export default {
	async autorun(){
		if (appsmith.store.Employee.IsLoggedIn===false) {
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else if (appsmith.store.Employee.IsLoggedIn===true && appsmith.store.Employee.IsFirstViewAfterLogin===false) {
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {
			
		}
	},
}
