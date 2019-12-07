import Vue from 'vue';
import Vuex from 'vuex';

import LoanStoreModule from './LoanStoreModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    LoanStoreModule,
  },
});
