export default {
	scanner_QRCodeonCodeDetected () {
		//QR Code format = "MIAPCODE\\DCDCODE\\VALTYPE\\MATERIALTYPE\\PLANT\\SLOC\\REGID\\PUBLISHCODE"
		let QRText = "MIAPCODE\\DCDCODE\\0\\S\\IMB1\\1MB1\\6\\ABX"
		//const QRText = scanner_QRCode.value;
		const SplittedText = QRText.split("\\");
		lbl_MIAPCODE.setText("MIAP CODE : <p style=color:red>" + SplittedText[0] + "</p>");
		lbl_DCDCODE.setText("DCD CODE : <p style=color:red>" + SplittedText[1] + "</p>");
		lbl_val_mattype.setText("VT / MT : <p style=color:red>" + SplittedText[2] + " / " + SplittedText[3] + "</p>");
		lbl_PLAN_SLOC.setText("PLANT / SLOC : <p style=color:red>" + SplittedText[4] + " / " + SplittedText[5] + "</p>");
		lbl_RegID.setText("REG. ID : <p style=color:red>" + SplittedText[6] + "</p>");
		lbl_PublishCode.setText("PUBLISH : <p style=color:red>" + SplittedText[7] + "</P>");
	}
}