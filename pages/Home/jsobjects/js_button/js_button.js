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

		// check if user is logged in
		if (appsmith.store.Employee_IsLoggedIn===true){

			// check if user has access to modules if he is not an admin
			if (appsmith.store.Employee_IsAdmin===false){
				await q_access_level.run();
			}

			if (appsmith.store.Employee_IsAdmin===true){
				// open module if admin
				await storeValue("AppSettings_Module_Open","APP_MAT_SUM_NCR");
				await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
			} else if (appsmith.store.Employee_IsAdmin===false && q_access_level.data[0].is_exist===1) {
				// open module if not admin and have access
				await storeValue("AppSettings_Module_Open","APP_MAT_SUM_NCR");
				await navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
			} else {
				// redirect to restricted page if have no access
				await navigateTo('Restricted',{},'SAME_WINDOW');
			}			
		} else {
			// redirect to login page if not logged in
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
		// variables for confirmation
		await storeValue("Employee_IsLoggedIn",false);
		await storeValue("Employee_IsLoggedOut",true);
		await storeValue("Employee_IsAdmin",false);
		await storeValue("Employee_IsFirstViewAfterLogin",false);

		// variables for forms
		await storeValue("Employee_ID","");
		await storeValue("Employee_UserID","");
	}
}