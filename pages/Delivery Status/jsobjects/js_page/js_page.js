export default {
	async autorun(){
		try{

			let varIsLoggedIn = appsmith.store.Employee_IsLoggedIn;

			if (!varIsLoggedIn||varIsLoggedIn===false) {
				navigateTo('Login & Register',{},'SAME_WINDOW');
			} else {
				
				let varRegID = appsmith.store.DeliveryStatus.RegID;

				if(!varRegID){
					storeValue("DeliveryStatus",{"RegID":"","Contractor":"-","DateDelivery":"-","Manifest":"-","DateReceived":"-","URL":"-"});
				}
			}
		}catch(error){
			console.log(error.message)
		}
	},
};