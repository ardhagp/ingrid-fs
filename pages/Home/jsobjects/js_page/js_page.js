export default {
	async autorun () {
		let varIsLoggedIn=(appsmith.store.Employee.IsLoggedIn===true)?true:false;
		
		if (varIsLoggedIn==true){
			storeValue("Employee",{"IsLoggedIn":true,"IsLoggedOut":false})
		} else {
			storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true})
		}
	}
}