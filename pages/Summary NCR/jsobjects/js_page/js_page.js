export default {
	async autorun() {
		let varIsLoggedIn=appsmith.store.Employee.IsLoggedIn;

		if (!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {

			await q_ncr_summary.run(); 

			let var_ncr_total = q_ncr_summary.data[0].ncr_total;
			let var_ncr_open = q_ncr_summary.data[0].ncr_open;
			let var_ncr_closed = q_ncr_summary.data[0].ncr_closed;
			let var_ncr_avg = q_ncr_summary.data[0].ncr_avg;

			txt_Total.setText((!var_ncr_total) ? 0 : var_ncr_total + '<p style=font-size:15px>Total</p>');
			txt_Open.setText((!var_ncr_open) ? 0 : var_ncr_open + '<p style=font-size:15px>Open</p>');
			txt_Closed.setText((!var_ncr_closed) ? 0 : var_ncr_closed + '<p style=font-size:15px>Closed</p>');
			txt_Avg.setText((!var_ncr_avg) ? 0 : var_ncr_avg + '<p style=font-size:15px>Avg Day(s)</p>')

			//chrt_NCRCreated.chartData=q_mat_sum_ncr_dashboard2.data.map( p => ({x: p.YEAR_CREATED, y: p.TOTAL_NCR_CREATED}));

		}
	}
}