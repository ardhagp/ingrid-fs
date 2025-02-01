export default {
	async autorun () {
		let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;

		if (!varIsLoggedIn){
			storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true});
		}
		
		return appsmith.store.Employee.IsLoggedIn;
	}
}