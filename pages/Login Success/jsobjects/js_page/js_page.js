export default {
	async f_autorun(){
		if (appsmith.store.Employee.IsLoggedIn==true && appsmith.store.Employee.UserID != "") {
			//navigateTo('Logout');
		}
	}
}