export default {
	async f_btn_login(){
		//old using md5
		//await storeValue("Employee",{"UserID": txt_UserID.text, "UserPassword": js_function.md5(txt_Password.text)});

		//new using aes
		await storeValue("Employee",{"UserID": txt_UserID.text, "UserPassword": txt_Password.text});

		//old md5
		//await q_login.run();

		//new aes
		await q_login_aes.run();

		if (q_login_aes.data.length===1) {
			txt_Result.setVisibility(false);
			txt_Result.setText('Berhasil');
			//console.log(q_login.data.length);
			let boolean_IsAdmin;
			if	(q_login_aes.data[0].employee_isadmin===-1) {
				boolean_IsAdmin = true;
			} else {
				boolean_IsAdmin = false;
			}
			
			await storeValue("Employee",{"IsLoggedIn": true, "IsLoggedOut": false,"UserID": txt_UserID.text,"IsAdmin": q_login_aes.data[0].employee_isadmin,"IsLocked":q_login_aes.data[0].employee_islocked,"FullName":q_login_aes.data[0].employee_fullname,"ID":q_login_aes.data[0].employee_id,"Role":q_login_aes.data[0].employee_role,"Title":q_login_aes.data[0].employee_title,"SLOC":q_login_aes.data[0].employee_slocid,"IsAdminBoolean":boolean_IsAdmin});

			await navigateTo('Login Success',{},'SAME_WINDOW');
			
		} else if (q_login_aes.data.length===0) {
			txt_Result.setVisibility(true);
			txt_Result.setText('⚠️ Failed to Login! <br />Incorrect User ID or Password.<br />Please try again.');
			//console.log(q_login.data.length);

			await storeValue("Employee",{"IsLoggedIn": false, "IsLoggedOut": true,"IsAdminBoolean":false});
		}		
	}
}