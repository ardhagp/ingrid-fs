export default {
	async f_btn_Logout() {
		await storeValue("Employee",{"IsLoggedIn": false,"IsLoggedOut":true, "UserID": "","IsAdminBoolean":false});

		await storeValue("AppSettings",{"Authorization_Tab_Login_IsVisible": true,"Authorization_Tab_Register_IsVisible": true,"Authorization_Tab_Logout_IsVisible": false,"Authorization_Tab_Restricted_IsVisible": false,"Authorization_Tab_Default":"Login"});
		navigateTo('Home',{},'SAME_WINDOW');
	},
}