export default {
	async f_btn_Find(){
		navigateTo('Delivery Status',{"REGID": txt_RegID.text,"PUBLISH": txt_PublishCode.text},'SAME_WINDOW');
		
		let varRegID=appsmith.URL.queryParams.REGID;
		let varPUBLISH=appsmith.URL.queryParams.PUBLISH;
				
		if((!varRegID||varRegID==='') && (!varPUBLISH||varPUBLISH==='')){
			//do nothing
		} else {
			await q_Material_Find.run();
			await q_Material_Find_Contractor.run();
			if(!q_Material_Find_Contractor.data||q_Material_Find_Contractor.data.length===0){
				console.log("Empty");
				//do nothing				
			} else {
				console.log("Filled");
				storeValue("DeliveryStatus",{"RegID":q_Material_Find_Contractor.data[0].mtx_rowid,"Contractor":q_Material_Find_Contractor.data[0].mtx_origin,"DateDelivery":q_Material_Find_Contractor.data[0].mtx_datedelivery,"Manifest":q_Material_Find_Contractor.data[0].mtx_manifest,"DateReceived":q_Material_Find_Contractor.data[0].mtx_datereceived,"URL":q_Material_Find_Contractor.data[0].mtx_att_link})
			}
		}
	}
}