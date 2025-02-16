export default {
	async autorun() {
		let varIsLoggedIn = appsmith.store.Employee.IsLoggedIn;

		if(!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {
			await storeValue("QR_Material",{"MIAP":"-","DCD":"-","VT":"-","MT":"-","MC":"-","PLANT":"-","SLOC":"-","REGID":"-","PUBLISH":"-"});
		}
	}
}