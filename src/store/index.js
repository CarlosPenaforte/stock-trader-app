import Vue from "vue";
import Vuex from "vuex";

import stock from "./modules/stock";
import wallet from "./modules/wallet";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    dispatchPriceUpdate({ dispatch }) {
      dispatch("stock/aleatoryPriceUpdate");
      dispatch("wallet/syncStocksPrice");
    },
  },
  modules: {
    stock,
    wallet,
  },
});
