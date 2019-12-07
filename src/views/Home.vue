<template>
  <div class="home">
    <b-card class="widget">
      <loan-calculator-widget
        :yearRange="this.yearRange"
        :amountRange="this.amountRange"
        :yearsValue="this.years"
        :amountValue="this.amount"
        :onYearChange="this.handleYearChange"
        :onAmountChange="this.handleAmountChange"
        :onSubmit="this.calculateMonthlyInstallment"
      />
      <br />
      <show-result
        :description="'Monthly installment:'"
        :failMessage="'Compute Again!!!'"
        :result="this.monthlyInstallment"
        :isLoading="this.isCalculating"
      />
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import LoanCalculatorWidget from "../components/LoanCalculatorWidget.vue";
import ShowResult from "../components/ShowResult.vue";
import { __YearRange__, __AmountRange__ } from "../constants/HomeConstants";

export default {
  name: "home",
  components: {
    LoanCalculatorWidget,
    ShowResult
  },
  computed: {
    ...mapGetters([
      "years",
      "amount",
      "monthlyInstallment",
      "isCalculating",
      "error"
    ]),
    yearRange() {
      return __YearRange__;
    },
    amountRange() {
      return __AmountRange__;
    }
  },
  methods: {
    ...mapActions(["onYearChange", "onAmountChange"]),
    async calculateMonthlyInstallment() {
      const isSuccess = await this.$store.dispatch(
        "calculateMonthlyInstallment"
      );
    },
    handleYearChange(value) {
      this.$store.dispatch("onYearChange", value);
    },
    handleAmountChange(value) {
      this.$store.dispatch("onAmountChange", value);
    }
  }
};
</script>
