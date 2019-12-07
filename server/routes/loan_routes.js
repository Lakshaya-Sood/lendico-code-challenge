
import LoanServices from '../services/loan_services';


const LoanRoutes = function (app) {
    app.route('/api/v01/installment').get(LoanServices.getMonthlyInstallment);
}

export default LoanRoutes;