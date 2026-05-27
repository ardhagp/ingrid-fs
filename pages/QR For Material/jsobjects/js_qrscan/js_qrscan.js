export default {
	f_manual(){
		
	},
	
	f_ScanCode () {
		try{
			//QR Code format = "PLANT_._SLOC_._MIAPCODE_._DCDCODE_._BATCH_._VALTYPE_._SPONSOR_._PO_._QTY_._REGID_._ITEMID_._BINLOC_._SPCSTOCK_._APPNAME"
			//let QRText = "IMB1_._1MB1_._493NAW0000196S_._A-2022-00004#0030_._0_._0_._I04_._450036XXXX_._1_._3884_._25500_._25FL01D000_._Q_._XO"
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
			const SplittedText = await QRResultString.split("_._");
			
			await storeValue("QR_Material",{"PLANT":SplittedText[0],"SLOC":SplittedText[1],"MIAP":SplittedText[2],"DCD":SplittedText[3],"B":SplittedText[4],"VT":SplittedText[5],"PO":SplittedText[6],"QTY":SplittedText[7],"REGID":SplittedText[8],"ITEMID":SplittedText[9],"BINLOC":SplittedText[10],"SPC":SplittedText[11],"APPNAME":SplittedText[12]});
		}catch(error){
			console.log(error);
		}
	},
}