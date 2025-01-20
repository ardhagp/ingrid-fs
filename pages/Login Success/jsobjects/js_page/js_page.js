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
			console.log(q_login.data.length);
			storeValue("Employee",{"IsLoggedIn": true, "IsLoggedOut": false,"UserID": txt_UserID.text});
		} else if (q_login.data.length===0) {
			txt_Result.setVisibility(true);
			txt_Result.setText('Login Gagal!');
			console.log(q_login.data.length);
			storeValue("Employee",{"IsLoggedIn": false, "IsLoggedOut": true});
		}		
	}
}