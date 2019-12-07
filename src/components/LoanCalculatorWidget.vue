<template>
  <b-card header="Loan Calculator Widget" align="center">
    <b-card>
      <h4>Years</h4>
      <vue-slider
        :marks="true"
        :dotSize="20"
        @change="this.onYearChange"
        :min="this.yearRange.min"
        :max="this.yearRange.max"
        :value="this.yearsValue"
      ></vue-slider>
      <br />
    </b-card>
    <br />
    <b-card>
      <h4>Amount in €</h4>
      <b-form-input
        id="input-live"
        type="number"
        placeholder="Enter Amount"
        aria-describedby="input-live-help valid-feedback invalid-feedback"
        @change="this.onAmountChange"
        :state="isAmountValid"
        :value="this.amountValue"
      ></b-form-input>
      <b-form-invalid-feedback id="invalid-feedback">Amount not in specified Range</b-form-invalid-feedback>
      <b-form-valid-feedback id="valid-feedback">Amount in specified Range</b-form-valid-feedback>
      <b-form-text
        id="input-live-help"
      >Enter amount between €{{this.amountRange.min | formatPrice}} - €{{this.amountRange.max | formatPrice}}</b-form-text>
    </b-card>
    <br />
    <b-button pill size="lg" variant="dark" @click="this.handleSubmit">Calculate</b-button>
  </b-card>
</template>

<script lang='ts'>
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import { NumericRange } from "../typings/components";

const emptyfunc = () => {};
@Component({
  name: "loan-calculator-widget",
  filters: {
    formatPrice: function(price: number) {
      let formatted = new Intl.NumberFormat("de-DE", {
        currency: "EUR"
      }).format(price);
      return formatted;
    }
  }
})
export default class LoanCalculatorWidget extends Vue {
  @Prop({ required: true }) readonly yearRange!: NumericRange;
  @Prop({ required: true }) readonly amountRange!: NumericRange;
  @Prop({ required: true }) readonly yearsValue!: number;
  @Prop({ required: true }) readonly amountValue!: number;
  @Prop({ default: emptyfunc }) readonly onYearChange!: (value: number) => void;
  @Prop({ default: emptyfunc }) readonly onAmountChange!: (
    value: number
  ) => void;
  @Prop({ default: emptyfunc }) readonly onSubmit!: () => void;

  //computed
  get isAmountValid() {
    let { min, max } = this.amountRange;
    return this.amountValue >= min && this.amountValue <= max;
  }

  //methods
  handleSubmit() {
    this.isAmountValid
      ? this.$emit("onSubmit")
      : this.$bvToast.toast("Please fill the correct values", {
          title: `Form Submit`,
          variant: "danger",
          autoHideDelay: 1500,
          solid: true
        });
  }
}
</script>

