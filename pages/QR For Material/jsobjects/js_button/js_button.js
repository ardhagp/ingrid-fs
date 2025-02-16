export default {
	f_btn_ViewRegID(){
		navigateTo('Delivery Status',{"REGID": appsmith.store.QR_Material.REGID,"PUBLISH": appsmith.store.QR_Material.PUBLISH},'SAME_WINDOW');
	}
}