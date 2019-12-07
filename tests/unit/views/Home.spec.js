import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from "vuex";
import Home from '@/views/Home.vue'

const vue_mock = createLocalVue();
vue_mock.use(BootstrapVue);
vue_mock.use(Vuex);
let actions__mock = {
    calculateMonthlyInstallment: jest.fn(),
    onYearChange: jest.fn(),
    onAmountChange: jest.fn()
};
let actions_spy = {
    one: jest.spyOn(actions__mock, 'calculateMonthlyInstallment'),
    two: jest.spyOn(actions__mock, 'onYearChange'),
    three: jest.spyOn(actions__mock, 'onAmountChange'),
}
let getters__mock = {
    years: () => 1,
    amount: () => 100,
    monthlyInstallment: () => null,
    isCalculating: () => false,
    error: () => null
};
let store__mock = new Vuex.Store({
    getters: getters__mock,
    actions: actions__mock
});

describe('home component', () => {
    const wrapper = shallowMount(Home, {
        localVue: vue_mock,
        store: store__mock
    })
    test('name in kebab case', () => {
        expect(wrapper.vm.$options.name).toEqual('home')
    })

    test('[method] calculateMonthlyInstallment', () => {
        wrapper.vm.calculateMonthlyInstallment()
        expect(actions_spy.one).toHaveBeenCalled();
    })

    test('[method] handleYearChange', () => {
        wrapper.vm.handleYearChange()
        expect(actions_spy.two).toHaveBeenCalled();
    })

    test('[method] handleAmountChange', () => {
        wrapper.vm.handleAmountChange()
        expect(actions_spy.three).toHaveBeenCalled();
    })

    test('no changes as compared to last snapshot', () => {
        expect(wrapper.element).toMatchSnapshot() // https://vue-test-utils.vuejs.org/guides/#snapshot-testing
    })
})
