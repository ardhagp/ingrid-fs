export default {
	md5(Input) {
		var md = forge.md.md5.create();
		md.update(Input);
		return md.digest().toHex();
	},

	async f_login() {
		{{storeValue("Employee",{"UserID": txt_UserID.text, "UserPassword": js_page.md5(txt_Password.text)})}}

		await q_login.run();

		if (q_login.data.length===1) {
			txt_Result.setVisibility(false);
			txt_Result.setText('Berhasil');
			//console.log(q_login.data.length);
			storeValue("Employee",{"IsLoggedIn": true, "IsLoggedOut": false,"UserID": txt_UserID.text,"IsAdmin": q_login.data[0].employee_isadmin,"IsLocked":q_login.data[0].employee_islocked,"FullName":q_login.data[0].employee_fullname,"ID":q_login.data[0].employee_id,"Role":q_login.data[0].employee_role,"Title":q_login.data[0].employee_title,"SLOC":q_login.data[0].employee_slocid});
			storeValue("AppSettings",{"Authorization_Tab_Login_IsVisible": false,"Authorization_Tab_Register_IsVisible": false,"Authorization_Tab_Logout_IsVisible": true,"Authorization_Tab_Restricted_IsVisible": false,"Authorization_Tab_Default":"Logout"});
			navigateTo('Login Success');
		} else if (q_login.data.length===0) {
			txt_Result.setVisibility(true);
			txt_Result.setText('Login Gagal!');
			//console.log(q_login.data.length);
			await storeValue("Employee",{"IsLoggedIn": false, "IsLoggedOut": true});
			await storeValue("AppSettings",{"Authorization_Tab_Login_IsVisible": true,"Authorization_Tab_Register_IsVisible": true,"Authorization_Tab_Logout_IsVisible": false,"Authorization_Tab_Restricted_IsVisible": false,"Authorization_Tab_Default":"Login"});
		}		
	},

	async f_logout() {
		await storeValue("Employee",{"IsLoggedIn": false,"IsLoggedOut":true, "UserID": ""});
		await storeValue("AppSettings",{"Authorization_Tab_Login_IsVisible": true,"Authorization_Tab_Register_IsVisible": true,"Authorization_Tab_Logout_IsVisible": false,"Authorization_Tab_Restricted_IsVisible": false,"Authorization_Tab_Default":"Login"});
		navigateTo('Home');
	},

	f_autorun() {
		if (appsmith.store.Employee.IsLoggedIn==true && appsmith.store.Employee.UserID != "") {
			navigateTo('Logout');
		}
	}
}