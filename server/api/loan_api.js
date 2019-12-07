const LoanAPI = {
    getMonthlyInstallment: async function (years, amount) {
        // some business logic  to  calculate monthly installment
        // Currently hardcoded  value  is retured
        let monthlyInstallment = 5390.61
        console.info(`Years: ${years}, Amount:${amount}, Monthly Installment:${monthlyInstallment}`)
        return Promise.resolve(monthlyInstallment)
    }
}

export default LoanAPI;