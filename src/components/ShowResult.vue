<template>
  <b-card align="center">
    <b-spinner v-if="isLoading" style="width: 3rem; height: 3rem;"></b-spinner>
    <div v-else>
      <h2 v-if="!!result">
        {{this.description}}
        <span style="color:black;">{{this.result}}</span>
      </h2>
      <h3 v-else>{{this.failMessage}}</h3>
    </div>
  </b-card>
</template>

<script lang='ts'>
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

@Component({
  name: "show-result"
})
export default class ShowResult extends Vue {
  @Prop({ required: true }) readonly description!: string;
  @Prop({ required: true }) readonly failMessage!: string;
  @Prop({ required: true }) readonly result!: number | null;
  @Prop({ required: true }) readonly isLoading!: boolean;
}
</script>

<style>
</style>
