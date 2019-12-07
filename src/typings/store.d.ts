import { ActionContext } from 'vuex';
import { CalculateMonthlyInstallmentPayload } from './services';

export type LoanStoreMoudleState = {
  years: number;
  amount: number;
  monthlyInstallment: number | null;
  isCalculating: boolean;
  error: Error | null;
};

export type LoanStoreMoudleGetters = {
  years: (state: LoanStoreMoudleState) => LoanStoreMoudleState['years'];
  amount: (state: LoanStoreMoudleState) => LoanStoreMoudleState['amount'];
  monthlyInstallment: (state: LoanStoreMoudleState) => LoanStoreMoudleState['monthlyInstallment'];
  isCalculating: (state: LoanStoreMoudleState) => LoanStoreMoudleState['isCalculating'];
  error: (state: LoanStoreMoudleState) => LoanStoreMoudleState['error'];
};

export type LoanStoreMoudleActions = {
  calculateMonthlyInstallment: (
    context: ActionContext<LoanStoreMoudleState, {}>,
    payload: CalculateMonthlyInstallmentPayload
  ) => Promise<boolean>;
  onYearChange: (
    context: ActionContext<LoanStoreMoudleState, {}>,
    newYear: LoanStoreMoudleState['years']
  ) => void;
  onAmountChange: (
    context: ActionContext<LoanStoreMoudleState, {}>,
    newAmout: LoanStoreMoudleState['amount']
  ) => void;
};

export type LoanStoreMoudleMutations = {
  calculationRequest: (state: LoanStoreMoudleState) => void;
  calculationSuccess: (state: LoanStoreMoudleState, monthlyInstallment: number) => void;
  calculationError: (state: LoanStoreMoudleState, error: Error) => void;
  updateYear: (state: LoanStoreMoudleState, value: number) => void;
  updateAmount: (state: LoanStoreMoudleState, value: number) => void;
};

export type LoanStoreModule = {
  state: LoanStoreMoudleState;
  getters: LoanStoreMoudleGetters;
  actions: LoanStoreMoudleActions;
  mutations: LoanStoreMoudleMutations;
};
