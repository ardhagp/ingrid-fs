export default {
	async	scanner_QRCodeonCodeDetected () {
		//QR Code format = "MIAPCODE\\DCDCODE\\VALTYPE\\MATERIALTYPE\\PLANT\\SLOC\\REGID\\PUBLISHCODE"
		//let QRText = "493NAW0000196S\\A-2022-00004#0030\\2\\DCD\\GEN\\IMB1\\1MB1\\-\\-"
		const QRText = await scanner_QRCode.value;
		const SplittedText = QRText.split("\\");
		await lbl_MIAPCODE.setText("MIAP CODE : <p style=color:red>" + SplittedText[0] + "</p>");
		await lbl_DCDCODE.setText("DCD CODE : <p style=color:red>" + SplittedText[1] + "</p>");
		await lbl_val_mattype.setText("VT / MT / MC: <p style=color:red>" + SplittedText[2] + " / " + SplittedText[3] + " / " + SplittedText[4] + "</p>");
		await lbl_PLAN_SLOC.setText("PLANT / SLOC : <p style=color:red>" + SplittedText[5] + " / " + SplittedText[6] + "</p>");
		await lbl_RegID.setText("REG. ID : <p style=color:red>" + SplittedText[7] + "</p>");
		await lbl_PublishCode.setText("PUBLISH : <p style=color:red>" + SplittedText[8] + "</P>");
		await storeValue("QR_Material",{"MIAP":SplittedText[0],"DCD":SplittedText[1],"VT":SplittedText[2],"MT":SplittedText[3],"MC":SplittedText[4],"PLANT":SplittedText[5],"SLOC":SplittedText[6],"REGID":SplittedText[7],"PUBLISH":SplittedText[8]});
	},

	async autorun() {
		await storeValue("QR_Material",{"MIAP":"","DCD":"","VT":"","MT":"","MC":"","PLANT":"","SLOC":"","REGID":"","PUBLISH":""});
	}
}