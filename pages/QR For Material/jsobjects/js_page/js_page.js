export default {
	async	scanner_QRCodeonCodeDetected () {
		//QR Code format = "MIAPCODE\\DCDCODE\\VALTYPE\\MATERIALTYPE\\PLANT\\SLOC\\REGID\\PUBLISHCODE"
		//let QRText = "MIAPCODE\\DCDCODE\\0\\S\\GEN\\IMB1\\1MB1\\6\\ABX"
		const QRText = scanner_QRCode.value;
		const SplittedText = QRText.split("\\");
		lbl_MIAPCODE.setText("MIAP CODE : <p style=color:red>" + SplittedText[0] + "</p>");
		lbl_DCDCODE.setText("DCD CODE : <p style=color:red>" + SplittedText[1] + "</p>");
		lbl_val_mattype.setText("VT / MT / MC: <p style=color:red>" + SplittedText[2] + " / " + SplittedText[3] + " / " + SplittedText[4] + "</p>");
		lbl_PLAN_SLOC.setText("PLANT / SLOC : <p style=color:red>" + SplittedText[5] + " / " + SplittedText[6] + "</p>");
		lbl_RegID.setText("REG. ID : <p style=color:red>" + SplittedText[7] + "</p>");
		lbl_PublishCode.setText("PUBLISH : <p style=color:red>" + SplittedText[8] + "</P>");
		appsmith.store("QR_Material",{"MIAP":SplittedText[0]});
	},

	async autorun() {
		await appsmith.store("QR_Material",{"MIAP":"","DCD":"","VT":"","MT":"","MC":"","PLANT":"","SLOC":"","REGID":"","PUBLISH":""});
	}
}