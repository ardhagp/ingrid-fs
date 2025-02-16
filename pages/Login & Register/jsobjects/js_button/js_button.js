export default {
	async f_btn_login(){
		await storeValue("Employee",{"UserID": txt_UserID.text, "UserPassword": js_function.md5(txt_Password.text)});

		await q_login.run();

		if (q_login.data.length===1) {
			txt_Result.setVisibility(false);
			txt_Result.setText('Berhasil');
			//console.log(q_login.data.length);
			let boolean_IsAdmin;
			if	(q_login.data[0].employee_isadmin_boolean=='true') {
				boolean_IsAdmin = true;
			} else {
				boolean_IsAdmin = false;
			}
			storeValue("Employee",{"IsLoggedIn": true, "IsLoggedOut": false,"UserID": txt_UserID.text,"IsAdmin": q_login.data[0].employee_isadmin,"IsLocked":q_login.data[0].employee_islocked,"FullName":q_login.data[0].employee_fullname,"ID":q_login.data[0].employee_id,"Role":q_login.data[0].employee_role,"Title":q_login.data[0].employee_title,"SLOC":q_login.data[0].employee_slocid,"IsAdminBoolean":boolean_IsAdmin});

			navigateTo('Login Success');
		} else if (q_login.data.length===0) {
			txt_Result.setVisibility(true);
			txt_Result.setText('⚠️ Failed to Login! <br />Incorrect User ID or Password.<br />Please try again.');
			//console.log(q_login.data.length);

			await storeValue("Employee",{"IsLoggedIn": false, "IsLoggedOut": true,"IsAdminBoolean":false});

		}		

	}
}