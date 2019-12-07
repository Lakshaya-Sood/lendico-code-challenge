import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import LoanCalculatorWidget from "../src/components/LoanCalculatorWidget.vue";
// import ShowResult from "../src/components/ShowResult.vue";

export const data = {
    yearRange: {
        min: 1,
        max: 5,
    },
    amountRange: {
        min: 10000,
        max: 100000,
    },
    yearsValue: 2,
    amountValue: 20000,
    style: { width: '45%' }
};

export const methods = {
    onYearChange: action('onYearChange'),
    onAmountChange: action('onAmountChange'),
    onSubmit: action('onSubmit')
};

storiesOf('Loan Calculator Widget', module)
    .add('component', () => {
        return {
            components: { LoanCalculatorWidget },
            template: `
            <div :style="style">
                <loan-calculator-widget
                    :yearRange = "yearRange"
                    :amountRange = "amountRange"
                    :yearsValue = "yearsValue"
                    :amountValue = "amountValue"
                    @onYearChange="onYearChange"
                    @onAmountChange="onAmountChange"
                    @onSubmit="onSubmit"
                />
                </div>`,
            data: () => ({ ...data }),
            methods,
        };
    });