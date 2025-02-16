export default {
	autorun () {
		let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;

		if (!varIsLoggedIn){
			storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true});
		}
	}
}