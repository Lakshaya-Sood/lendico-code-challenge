import LoanStoreModule from '@/store/LoanStoreModule';
import { createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import cloneDeep from "lodash/cloneDeep";
import {
    LoanStoreMoudleState,
    LoanStoreModule as lsm,
} from '@/typings/store';
import { CalculateMonthlyInstallmentPayload } from '@/typings/services';

jest.mock("@/services/LoanService", () => ({
    calculateMonthlyInstallment: (payload: CalculateMonthlyInstallmentPayload) => {
        if (payload.years < 0) {
            throw "error occured";
        }
        return 5390.61;
    }
}));

describe("[store module] Loan store module", () => {
    describe("[property] getters", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store: Store<LoanStoreMoudleState> = new Vuex.Store(cloneDeep(LoanStoreModule));

        test("[getter] years", () => {
            expect(store.getters.years).toEqual(store.state.years);
        });
        test("[getter] domains", () => {
            expect(store.getters.amount).toEqual(store.state.amount);
        });
        test("[getter] domains", () => {
            expect(store.getters.monthlyInstallment).toEqual(store.state.monthlyInstallment);
        });
        test("[getter] domains", () => {
            expect(store.getters.isCalculating).toEqual(store.state.isCalculating);
        });
        test("[getter] domains", () => {
            expect(store.getters.error).toEqual(store.state.error);
        });
    });

    describe("[property] actions", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store: Store<LoanStoreMoudleState> = new Vuex.Store(cloneDeep(LoanStoreModule));


        test("[action] onYearChange", () => {
            store.dispatch("onYearChange", 10);

            expect(store.state.years).toBe(10);
        });

        test("[action] onAmountChange", () => {
            store.dispatch("onAmountChange", 10000);

            expect(store.state.amount).toBe(10000);
        });
        describe("[action] calculateMonthlyInstallment", () => {

            test("[scenario] success", async done => {
                store.state.years = 1;
                await store.dispatch("calculateMonthlyInstallment");
                expect(store.state.isCalculating).toBe(false);
                expect(store.state.monthlyInstallment).toEqual(5390.61);
                expect(store.state.error).toBeFalsy();
                done();
            });

            test("[scenario] failure", async done => {
                store.state.years = -1;
                await store.dispatch("calculateMonthlyInstallment");
                expect(store.state.isCalculating).toBe(false);
                expect(store.state.monthlyInstallment).toEqual(null);
                expect(store.state.error).toBeTruthy();
                done();
            });
        });
    });
});