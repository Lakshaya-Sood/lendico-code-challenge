export type CalculateMonthlyInstallmentPayload = {
  years: number;
  amount: number;
};

export type LoanService = {
  calculateMonthlyInstallment: (payload: CalculateMonthlyInstallmentPayload) => Promise<any>;
};
