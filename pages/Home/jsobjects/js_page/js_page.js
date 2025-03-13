export default {
	autorun () {
		try{
			let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;
			storeValue("AppSettings",{"Page_SummaryNCR_DashboardContractorYear": "2025"});

			if (!varIsLoggedIn||varIsLoggedIn===false){
				storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true,"UserID ":""});
			} else {
				storeValue("Employee",{"IsLoggedIn":true,"IsLoggedOut":false});
			}
		}catch(error){
			console.log('Error: ' + error.message);
			storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true,"IsFirstViewAfterLogin":false,"UserID ":""});
		}
	}
}