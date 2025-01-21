export default {
	async autorun () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		if (appsmith.store.AppSettings.IsFirstVisit!=false) {
			showModal('mod_Home');
			setTimeout(()=> {closeModal('mod_Home'),10000});
			{{storeValue("AppSettings",{"IsFirstVisit": false})}}
		}
	}
}