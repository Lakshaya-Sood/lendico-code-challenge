import mockAxios from "axios";
import MockAdapter from "axios-mock-adapter";
import LoanService from "@/services/LoanService";

jest.mock("@/utils/URIUtils.ts", () => ({
    getURIForInstallmentCalculation: () => "apiURI__mock",
}));


describe("[services] Loan service", () => {
    let mock: MockAdapter;
    beforeAll(() => {
        mock = new MockAdapter(mockAxios);
    });
    beforeEach(() => {
        mock.reset();
    });

    test("[service-name] calculateMonthlyInstallment (staus 200)", async done => {
        const payload__mock = {
            years: 2,
            amount: 100
        };
        const response__mock = {
            years: 2,
            amount: 100,
            monthlyInstallment: 5390.61
        };

        mock.onGet("apiURI__mock").reply(200, response__mock);

        const val = await LoanService.calculateMonthlyInstallment(payload__mock);
        expect(val).toEqual(5390.61);
        done();
    });

})