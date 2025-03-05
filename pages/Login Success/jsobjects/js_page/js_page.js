export default {
	async f_autorun(){
		if (appsmith.store.Employee.IsLoggedIn===true && appsmith.store.Employee.UserID != "") {
			navigateTo('Home',{},'SAME_WINDOW');
		}			
	},
	f_btn_VisitLastPage(){
		let varLastPage=appsmith.store.AppSettings.LastPage;

		if(!varLastPage||varLastPage===""){
			navigateTo("Home",{},"SAME_WINDOW")
		} else {
			navigateTo(appsmith.store.AppSettings.LastPage,{},'SAME_WINDOW');
		}
	}
}