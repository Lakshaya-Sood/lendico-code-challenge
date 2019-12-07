import { ActionContext } from 'vuex';
import {
  LoanStoreMoudleState,
  LoanStoreMoudleGetters,
  LoanStoreMoudleActions,
  LoanStoreMoudleMutations,
  LoanStoreModule as lsm,
} from '../typings/store';
import { CalculateMonthlyInstallmentPayload } from '../typings/services';

import LoanService from '../services/LoanService';

const state: LoanStoreMoudleState = {
  years: 2,
  amount: 20000,
  monthlyInstallment: null,
  isCalculating: false,
  error: null,
};

const getters: LoanStoreMoudleGetters = {
  years: (state: LoanStoreMoudleState) => state.years,
  amount: (state: LoanStoreMoudleState) => state.amount,
  monthlyInstallment: (state: LoanStoreMoudleState) => state.monthlyInstallment,
  isCalculating: (state: LoanStoreMoudleState) => state.isCalculating,
  error: (state: LoanStoreMoudleState) => state.error,
};

const actions: LoanStoreMoudleActions = {
  async calculateMonthlyInstallment(
    { commit, state }: ActionContext<LoanStoreMoudleState, {}>
  ) {
    try {
      commit('calculationRequest');
      let payload: CalculateMonthlyInstallmentPayload = {
        years: state.years,
        amount: state.amount
      }
      const monthlyInstallment: number = await LoanService.calculateMonthlyInstallment(payload);
      commit('calculationSuccess', monthlyInstallment);
      return true;
    } catch (error) {
      commit('calculationError', error);
      return false;
    }
  },
  onYearChange({ commit }: ActionContext<LoanStoreMoudleState, {}>, value: number) {
    commit('updateYear', value);
  },
  onAmountChange({ commit }: ActionContext<LoanStoreMoudleState, {}>, value: number) {
    commit('updateAmount', value);
  },
};

const mutations: LoanStoreMoudleMutations = {
  calculationRequest: (state: LoanStoreMoudleState) => {
    state.isCalculating = true;
  },
  calculationSuccess: (state: LoanStoreMoudleState, monthlyInstallment: number) => {
    state.isCalculating = false;
    state.monthlyInstallment = monthlyInstallment;
    state.error = null;
  },
  calculationError: (state: LoanStoreMoudleState, error: Error) => {
    state.isCalculating = false;
    state.monthlyInstallment = null;
    state.error = error;
  },
  updateYear: (state: LoanStoreMoudleState, value: number) => {
    state.years = value;
  },
  updateAmount: (state: LoanStoreMoudleState, value: number) => {
    state.amount = value;
  },
};

const LoanStoreModule: lsm = {
  state,
  getters,
  actions,
  mutations,
};

export default LoanStoreModule;
