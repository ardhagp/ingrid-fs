export default {
	async autorun() {
		try{
			let varIsLoggedIn = appsmith.store.Employee_IsLoggedIn;

			if (!varIsLoggedIn||varIsLoggedIn===false){
				await storeValue("Employee_IsLoggedIn",false);
			} else {
				await navigateTo('Login Success',{},'SAME_WINDOW');
			}
		}catch(error){
			console.log('Error : ' + error.message);
		}
	}
}