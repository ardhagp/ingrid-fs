export default {
	async f_btn_SummaryIncoming(){
		await storeValue("AppSettings",{"LastPage":"Summary Incoming"});
		navigateTo(appsmith.store.AppSettings.LastPage,{},'SAME_WINDOW');
	},
	
	async f_btn_SummaryOutgoing(){
		await storeValue("AppSettings",{"LastPage":"Summary Outgoing"});
		navigateTo(appsmith.store.AppSettings.LastPage,{},'SAME_WINDOW');
	},
	
	async f_btn_SummaryNCR(){
		await storeValue("AppSettings",{"LastPage":"Summary NCR"});
		navigateTo(appsmith.store.AppSettings.LastPage,{},'SAME_WINDOW');
	},
	
	async f_btn_QRForMaterial(){
		await storeValue("AppSettings",{"LastPage":"QR For Material"});
		navigateTo(appsmith.store.AppSettings.LastPage,{},'SAME_WINDOW');
	},
	
	async f_btn_DeliveryStatus(){
		await storeValue("AppSettings",{"LastPage":"Delivery Status"});
		navigateTo(appsmith.store.AppSettings.LastPage,{},'SAME_WINDOW');
	},
	
	async f_btn_ClearVariables(){
		clearStore();
		await storeValue("Employee",{"IsLoggedIn":false,"IsLoggedOut":true,"IsAdminBoolean":false});
	}
}