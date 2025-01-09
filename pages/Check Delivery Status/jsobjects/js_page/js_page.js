export default {
autorun(){
	try{
		if (appsmith.store.Employee.IsLogged==false) {
			navigateTo('Authorization');
			console.log(appsmith.store.UserID);
			return appsmith.store.UserID;
		} else {			
			console.log(appsmith.store.Employee.UserID);
			return appsmith.store.Employee.UserID;
		}
   }catch(error){
		console.log(error.message)
   }
},
};