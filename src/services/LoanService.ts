import axios, { AxiosResponse } from 'axios';
import { LoanService as ls, CalculateMonthlyInstallmentPayload } from '../typings/services';
import URIUtils from '../utils/URIUtils';

const LoanService: ls = {
  calculateMonthlyInstallment: async (payload: CalculateMonthlyInstallmentPayload) => {
    const uri = URIUtils.getURIForInstallmentCalculation();
    const response: AxiosResponse<any> = await axios.get(uri, {
      params: {
        ...payload,
      },
    });
    return response.data.monthlyInstallment;
  },
};
export default LoanService;
