export default {
	async autorun() {
		let varIsLoggedIn=appsmith.store.Employee_IsLoggedIn;

		if (!varIsLoggedIn||varIsLoggedIn===false){
			navigateTo('Login & Register',{},'SAME_WINDOW');
		} else {
			let varYear = appsmith.store.AppSettings_Page_SummaryNCR_DashboardContractorYear;
			await q_mat_sum_ncr_dashboard1.run(); 

			let var_ncr_total = q_mat_sum_ncr_dashboard1.data[0].NCR_TOTAL;
			let var_ncr_open = q_mat_sum_ncr_dashboard1.data[0].NCR_OPEN;
			let var_ncr_closed = q_mat_sum_ncr_dashboard1.data[0].NCR_CLOSED;
			let var_ncr_avg = q_mat_sum_ncr_dashboard1.data[0].NCR_AVG;

			if (!varYear||varYear==='') {
				const constCurrentYear = moment().year;
				storeValue("AppSettings_Page_SummaryNCR_DashboardContractorYear",constCurrentYear);
				q_mat_sum_ncr_dashboard4.run();
			}

			txt_Total.setText((!var_ncr_total) ? 0 : var_ncr_total + '<p style=font-size:15px>Total</p>');
			txt_Open.setText((!var_ncr_open) ? 0 : var_ncr_open + '<p style=font-size:15px>Open</p>');
			txt_Closed.setText((!var_ncr_closed) ? 0 : var_ncr_closed + '<p style=font-size:15px>Closed</p>');
			txt_Avg.setText((!var_ncr_avg) ? 0 : var_ncr_avg + '<p style=font-size:15px>Avg Day(s)</p>')

			//chrt_NCRCreated.chartData=q_mat_sum_ncr_dashboard2.data.map( p => ({x: p.YEAR_CREATED, y: p.TOTAL_NCR_CREATED}));

		}
	}
}