export default {
	async f_btn_Logout() {
		await storeValue("Employee_IsLoggedIn", false);
		await storeValue("Employee_IsLoggedOut", true);
		await storeValue("Employee_IsAdmin", false);
		await storeValue("Employee_UserID", "");

		navigateTo('Home',{},'SAME_WINDOW');
	},
}