export default {
	async autorun () {
		try{
			let varIsLoggedIn=appsmith.store.Employee_IsLoggedIn;
			await storeValue("AppSettings_Page_SummaryNCR_DashboardContractorYear",moment().year);

			if (!varIsLoggedIn||varIsLoggedIn===false){
				await storeValue("Employee_IsLoggedIn",false);
				await storeValue("Employee_IsLoggedOut",true);
				await storeValue("Employee_UserID","");
				await storeValue("Employee_IsAdmin",false);
				await storeValue("Employee_IsAdminBoolean",false);
			}
		}catch(error){
			console.log('Error: ' + error.message);
				await storeValue("Employee_IsLoggedIn",false);
				await storeValue("Employee_IsAdmin",false);
				await storeValue("Employee_IsLoggedOut",true);
				await storeValue("Employee_UserID","");
				await storeValue("Employee_ID","");
		}
	}
}