import LoanAPI from '../api/loan_api';

const LoanServices = {
    getMonthlyInstallment: async function (req, res) {
        let { years, amount } = req.query
        try {
            let monthlyInstallment = await LoanAPI.getMonthlyInstallment(years, amount)
            setTimeout(() => {
                res.status(200).json({
                    years: parseInt(years),
                    amount: parseFloat(amount),
                    monthlyInstallment
                })
            }, 1000) // simulating calculation time as 1 second

        } catch (err) {
            res.status(500).json({
                error: 'Internal Server Error'
            })
        }
    }
}

export default LoanServices;