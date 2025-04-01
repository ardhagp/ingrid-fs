export default {
	f_btn_Home(){
		navigateTo('Home',{},'SAME_WINDOW');
	},
	
	f_btn_MyProfile(){
		navigateTo('My Profiles',{},'SAME_WINDOW');
	},
	
	f_btn_VisitLastPage(){
		navigateTo(appsmith.store.AppSettings_LastPage,{},'SAME_WINDOW');
	}
}