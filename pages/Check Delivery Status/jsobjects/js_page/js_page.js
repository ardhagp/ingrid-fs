export default {
autorun(){
	try{
		if (appsmith.store.UserID=='') {
			navigateTo('Login or Register');
			console.log(appsmith.store.UserID);
			return appsmith.store.UserID;
		} else {			
			console.log(appsmith.store.UserID);
			return appsmith.store.UserID;
		}
   }catch(error){
		console.log(error.message)
   }
},
};