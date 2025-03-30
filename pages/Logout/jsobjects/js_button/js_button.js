export default {
	async f_btn_Logout() {
		await storeValue("Employee",{"IsLoggedIn": false,"IsLoggedOut":true, "UserID": "","IsAdminBoolean":false});

		navigateTo('Home',{},'SAME_WINDOW');
	},
}