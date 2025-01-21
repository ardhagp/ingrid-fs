export default {
	async autorun () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		if (appsmith.store.AppSettings.IsFirstVisit!=false) {
			setTimeout(()=> {navigateTo('Home')},5000);			
		} else {
			navigateTo('Home');
		}
	}
}