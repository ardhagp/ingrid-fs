export default {
	async autorun(){
		if (appsmith.store.Employee.IsLoggedIn===false || appsmith.store.Employee.UserID === "") {
			navigateTo('Login & Register',{},'SAME_WINDOW');
		}			
	},
}
