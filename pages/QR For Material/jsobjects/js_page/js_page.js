export default {
	async autorun() {
		let varIsLoggedIn = appsmith.store.Employee_IsLoggedIn;

		if(!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {
			await storeValue("QR_Material",{"PLANT":"-","SLOC":"-","MIAP":"-","DCD":"-","B":"-","VT":"-","SP":"-","PO":"-","QTY":"-","REGID":"-","ITEMID":"-","BINLOC":"-","SPC":"-","APPNAME":"-"});
			await storeValue("QR_Material2",{"MATERIALNAME":"-","PN":"-","UOM":""});
		}
	}
}