export default {
	deviceType: () => {
		const w = appsmith.ui.width;		
	},
	
	async autorun () {
		try{
			await js_heartbeats.heartbeatOK();
			let varIsLoggedIn=appsmith.store.Employee_IsLoggedIn;
			await storeValue("AppSettings_Page_SummaryNCR_DashboardContractorYear",moment().year);

			if (!varIsLoggedIn||varIsLoggedIn===false){
				await storeValue("Employee_IsLoggedIn",false);
				await storeValue("Employee_IsLoggedOut",true);
				await storeValue("Employee_UserID","");
				await storeValue("Employee_IsAdmin",false);
			}
		}catch(error){
			await js_heartbeats.heartbeatFail();
			console.log('Error: ' + error.message);
				await storeValue("Employee_IsLoggedIn",false);
				await storeValue("Employee_IsAdmin",false);
				await storeValue("Employee_IsLoggedOut",true);
				await storeValue("Employee_UserID","");
				await storeValue("Employee_ID","");
		}
	}
}