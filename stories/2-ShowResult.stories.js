import { storiesOf } from '@storybook/vue';

import ShowResult from "../src/components/ShowResult.vue";


storiesOf('Show Result', module)
    .add('Success', () => {
        return {
            components: { ShowResult },
            template: `
            <show-result
                :description="description"
                :failMessage="failMessage"
                :result="result"
                :isLoading="isLoading"
            />`,
            data: () => ({ description: 'Monthly installment:', failMessage: 'Compute Again!!!', result: '1234.67', isLoading: false }),
        };
    })
    .add('Loading', () => {
        return {
            components: { ShowResult },
            template: `
            <show-result
                :description="description"
                :failMessage="failMessage"
                :result="result"
                :isLoading="isLoading"
            />`,
            data: () => ({ description: 'Monthly installment:', failMessage: 'Compute Again!!!', result: '1234.67', isLoading: true }),
        };
    })
    .add('Failure', () => {
        return {
            components: { ShowResult },
            template: `
            <show-result
                :description="description"
                :failMessage="failMessage"
                :result="result"
                :isLoading="isLoading"
            />`,
            data: () => ({ description: 'Monthly installment:', failMessage: 'Compute Again!!!', result: null, isLoading: false }),
        };
    });