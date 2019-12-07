import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import VueSlider from "vue-slider-component";

import LoanCalculatorWidget from '@/components/LoanCalculatorWidget.vue'

const vue_mock = createLocalVue()
vue_mock.use(BootstrapVue)
vue_mock.component('VueSlider', VueSlider)


describe('loan-calculator-widget  component', () => {
    const mocks = {
        yearsValue: 2,
        yearRange: { min: 1, max: 5 },
        amountRange: { min: 10, max: 100 },
        onYearChange: (value: number) => { },
        onAmountChange: (value: number) => { },
        onSubmit: jest.fn()
    }
    const wrapper_valid_feilds = mount(LoanCalculatorWidget, {
        propsData: {
            amountValue: 80,
            ...mocks
        },
        localVue: vue_mock
    });
    const wrapper_invalid_feilds = mount(LoanCalculatorWidget, {
        propsData: {
            amountValue: 120,
            ...mocks
        },
        localVue: vue_mock
    });
    const spyOnToast = jest.spyOn(wrapper_invalid_feilds.vm.$bvToast, 'toast')

    test('name in kebab case', () => {
        expect(wrapper_valid_feilds.vm.$options.name).toEqual('loan-calculator-widget')
    })

    describe('[method] handleSubmit()', () => {
        test('valid feilds', () => {
            wrapper_valid_feilds.find('button').trigger('click')
            expect(wrapper_valid_feilds.emitted().onSubmit).toBeTruthy()
        })
        test('invalid feilds', () => {
            wrapper_invalid_feilds.find('button').trigger('click')
            expect(wrapper_invalid_feilds.emitted().onSubmit).toBeFalsy()
            expect(spyOnToast).toHaveBeenCalled();
        })
    })
    test('no changes as compared to last snapshot', () => {
        expect(wrapper_valid_feilds.element).toMatchSnapshot() // https://vue-test-utils.vuejs.org/guides/#snapshot-testing
    })
})
