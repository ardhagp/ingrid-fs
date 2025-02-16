export default {
	async autorun() {
		let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;

		if (!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {
			await q_ncr_summary.run();
		}
	}
}