import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import ShowResult from '@/components/ShowResult.vue'

const vue_mock = createLocalVue()
vue_mock.use(BootstrapVue)


describe('show-result component', () => {
    const wrapper = shallowMount(ShowResult, {
        propsData: {
            description: 'Some Discription',
            failMessage: "Some Error Message",
            result: 3456.12,
            isLoading: false,
        },
        localVue: vue_mock
    })
    test('name in kebab case', () => {
        expect(wrapper.vm.$options.name).toEqual('show-result')
    })

    test('no changes as compared to last snapshot', () => {
        expect(wrapper.element).toMatchSnapshot() // https://vue-test-utils.vuejs.org/guides/#snapshot-testing
    })
})
