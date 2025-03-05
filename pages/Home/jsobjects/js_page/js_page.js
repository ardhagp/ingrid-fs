export default {
	autorun () {
		try{
			let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;
			storeValue("AppSettings",{"Page_SummaryNCR_DashboardContractorYear": "2025"});

			if (!varIsLoggedIn||varIsLoggedIn===false){
				lbl_Header.setText('not logged');
				storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true});
			} else {
				lbl_Header.setText('is logged');
				storeValue("Employee",{"IsLoggedIn":true,"IsLoggedOut":false});
			}
		}catch(error){
			console.log('Error: ' + error.message);
		}
	}
}