export default {
	async autorun(){
		if (appsmith.store.Employee_IsLoggedIn===false) {
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else if (appsmith.store.Employee_IsLoggedIn===true && appsmith.store.Employee_IsFirstViewAfterLogin===false) {
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {
			
		}
	},
}
