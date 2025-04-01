export default {
	async f_btn_SummaryIncoming(){
		await storeValue("AppSettings_LastPage","Summary Incoming");
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_SummaryOutgoing(){
		await storeValue("AppSettings_LastPage","Summary Outgoing");
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_SummaryNCR(){
		await storeValue("AppSettings_LastPage","Summary NCR");
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_QRForMaterial(){
		await storeValue("AppSettings_LastPage","QR For Material");
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_DeliveryStatus(){
		await storeValue("AppSettings_LastPage","Delivery Status");
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_LoginAndRegister(){
		await storeValue("AppSettings_LastPage","Home");
		navigateTo('Login & Register',{},'SAME_WINDOW');
	},

	async f_btn_ClearVariables(){
		clearStore();
		await storeValue("Employee_IsLoggedIn",false);
		await storeValue("Employee_IsLoggedOut",true);
		await storeValue("Employee_UserID","");
		await storeValue("Employee_IsAdmin",false);
		await storeValue("Employee_IsAdminBoolean",false);
		await storeValue("Employee_IsFirstViewAfterLogin",false);
	}
}