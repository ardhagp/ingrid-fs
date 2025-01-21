export default {
	scanner_QRCodeonCodeDetected () {
		const QRText = scanner_QRCode.value;
		const SplittedText = QRText.split("\\");
		txt_RegID.setText(SplittedText[0]);
		txt_MIAPCODE.setText(SplittedText[1]);
		txt_DCDCODE.setText(SplittedText[2]);
	}
}