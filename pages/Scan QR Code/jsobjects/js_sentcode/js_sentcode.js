export default {
	scanner_QRCodeonCodeDetected () {
		const VText = scanner_QRCode.value;
		const AText = VText.split("/");
		txt_RegID.setText(AText[0]);
	}
}