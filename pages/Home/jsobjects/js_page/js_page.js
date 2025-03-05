export default {
	autorun () {
		let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;
		storeValue("AppSettings",{"Page_SummaryNCR_DashboardContractorYear": "2025"});

		if (!varIsLoggedIn||varIsLoggedIn===false){
			storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true});
		} else {
			storeValue("Employee",{"IsLoggedIn":true,"IsLoggedOut":false});
		}
	}
}