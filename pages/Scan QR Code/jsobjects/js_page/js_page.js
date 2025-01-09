export default {
	scanner_QRCodeonCodeDetected () {
		const VText = scanner_QRCode.value;
		const AText = VText.split("\\");
		txt_RegID.setText(AText[0]);
		txt_MIAPCODE.setText(AText[1]);
		txt_DCDCODE.setText(AText[2]);
	}
}