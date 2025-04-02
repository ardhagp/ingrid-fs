export default {
	async f_btn_SummaryIncoming(){
		await storeValue("AppSettings_LastPage","Summary Incoming");
		await storeValue("AppSettings_Module_Open","");
		await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_SummaryOutgoing(){
		await storeValue("AppSettings_LastPage","Summary Outgoing");
		await storeValue("AppSettings_Module_Open","");
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_SummaryNCR(){
		await storeValue("AppSettings_LastPage","Summary NCR");

		if (appsmith.store.Employee_IsLoggedIn===true){
			await storeValue("AppSettings_Module_Open","APP_MAT_SUM_NCR");
			await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
		}else{
			await navigateTo('Login & Register',{},'SAME_WINDOW');
		}
	},

	async f_btn_QRForMaterial(){
		await storeValue("AppSettings_LastPage","QR For Material");
		await storeValue("AppSettings_Module_Open","");
		await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_DeliveryStatus(){
		await storeValue("AppSettings_LastPage","Delivery Status");
		await storeValue("AppSettings_Module_Open","");
		await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	},

	async f_btn_LoginAndRegister(){
		await storeValue("AppSettings_LastPage","Home");
		await storeValue("AppSettings_Module_Open","");
		await navigateTo('Login & Register',{},'SAME_WINDOW');
	},

	async f_btn_EventLog(){
		await storeValue("AppSettings_LastPage","Event Log");
		await storeValue("AppSettings_Module_Open","");
		await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
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