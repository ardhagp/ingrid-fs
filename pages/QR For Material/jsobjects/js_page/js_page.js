export default {
	f_manual(){
		
	},
	f_ScanCode () {
		try{
			//QR Code format = "MIAPCODE_||_DCDCODE_||_VALTYPE_||_MATERIALTYPE_||_PLANT_||_SLOC_||_REGID_||_PUBLISHCODE"
			//let QRText = "493NAW0000196S_||_A-2022-00004#0030_||_2_||_DCD_||_GEN_||_IMB1_||_1MB1_||_-_||_-"
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
			const SplittedText = await QRResultString.split("_||_");
			
			await storeValue("QR_Material",{"MIAP":SplittedText[0],"DCD":SplittedText[1],"VT":SplittedText[2],"MT":SplittedText[3],"MC":SplittedText[4],"PLANT":SplittedText[5],"SLOC":SplittedText[6],"REGID":SplittedText[7],"PUBLISH":SplittedText[8]});
		}catch(error){
			console.log(error);
		}
	},
	async autorun() {
		await storeValue("QR_Material",{"MIAP":"-","DCD":"-","VT":"-","MT":"-","MC":"-","PLANT":"-","SLOC":"-","REGID":"-","PUBLISH":"-"});
	}
}