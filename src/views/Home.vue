<template>
  <div class="home">
    <b-card class="widget">
      <loan-calculator-widget
        :yearRange="this.yearRange"
        :amountRange="this.amountRange"
        :yearsValue="this.years"
        :amountValue="this.amount"
        @onYearChange="this.handleYearChange"
        @onAmountChange="this.handleAmountChange"
        @onSubmit="this.calculateMonthlyInstallment"
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

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Emit } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import LoanCalculatorWidget from "../components/LoanCalculatorWidget.vue";
import ShowResult from "../components/ShowResult.vue";

import { __YearRange__, __AmountRange__ } from "../constants/HomeConstants";

@Component({
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
    ])
  },
  methods: {
    ...mapActions(["onYearChange", "onAmountChange"])
  }
})
export default class Home extends Vue {
  get yearRange() {
    return __YearRange__;
  }
  get amountRange() {
    return __AmountRange__;
  }

  @Emit("onSubmit")
  async calculateMonthlyInstallment() {
    const isSuccess = await this.$store.dispatch("calculateMonthlyInstallment");
    isSuccess
      ? this.$bvToast.toast("Calculated Successfully", {
          title: "Calculate Monthly Installment",
          variant: "success",
          autoHideDelay: 1500,
          solid: true
        })
      : this.$bvToast.toast("Server Error", {
          title: "Calculate Monthly Installment",
          variant: "danger",
          autoHideDelay: 1500,
          solid: true
        });
  }

  @Emit("onYearChange")
  handleYearChange(value: number): void {
    this.$store.dispatch("onYearChange", value);
  }

  @Emit("onAmountChange")
  handleAmountChange(value: number) {
    this.$store.dispatch("onAmountChange", value);
  }
}
</script>

