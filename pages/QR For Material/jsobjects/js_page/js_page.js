export default {
	f_manual(){
		lbl_QRResult.setText("DCD:" + appsmith.store.QR_Material.DCD);
		console.log(appsmith.store.QR_Material.DCD);
	},
	f_ScanCode () {
		try{
			//QR Code format = "MIAPCODE\\DCDCODE\\VALTYPE\\MATERIALTYPE\\PLANT\\SLOC\\REGID\\PUBLISHCODE"
			//let QRText = "493NAW0000196S\\A-2022-00004#0030\\2\\DCD\\GEN\\IMB1\\1MB1\\-\\-"
			const QRText = scanner_QRCode.value;
			storeValue("QR_Material",{"QRResult":QRText});
			
		}catch(error){
			console.log(error);
			showAlert("Error");
		}
	},
	async f_ExtractString(){
		try{
			const QRResultString = await appsmith.store.QR_Material.QRResult;			
			const SplittedText = await QRResultString.split("\\");
			
			await storeValue("QR_Material",{"MIAP":SplittedText[0],"DCD":SplittedText[1],"VT":SplittedText[2],"MT":SplittedText[3],"MC":SplittedText[4],"PLANT":SplittedText[5],"SLOC":SplittedText[6],"REGID":SplittedText[7],"PUBLISH":SplittedText[8]});
			
			//await lbl_QRResult.setText("QR Result : " + QRResultString + "");
			//await lbl_MIAPCODE.setText("MIAP CODE : <p style=color:red>" + appsmith.store.QR_Material.MIAP + "</p>");
			//await lbl_DCDCODE.setText("DCD CODE : <p style=color:red>" + appsmith.store.QR_Material.DCD + "</p>");
			//await lbl_val_mattype.setText("VT / MT / MC: <p style=color:red>" + appsmith.store.QR_Material.VT + " / " + appsmith.store.QR_Material.MT + " / " + appsmith.store.QR_Material.MC + "</p>");
			//await lbl_PLAN_SLOC.setText("PLANT / SLOC : <p style=color:red>" + appsmith.store.QR_Material.PLANT + " / " + appsmith.store.QR_Material.SLOC + "</p>");
			//await lbl_RegID.setText("REG. ID : <p style=color:red>" + appsmith.store.QR_Material.REGID + "</p>");
			//await lbl_PublishCode.setText("PUBLISH : <p style=color:red>" + appsmith.store.QR_Material.PUBLISH + "</P>");
		}catch(error){
			console.log(error);
		}
	},
	async autorun() {
		await storeValue("QR_Material",{"MIAP":"-","DCD":"-","VT":"-","MT":"-","MC":"-","PLANT":"-","SLOC":"-","REGID":"-","PUBLISH":"-"});
	}
}