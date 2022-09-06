export default {
  namespaced: true,
  state: {
    availableStocks: [
      {
        name: "apple",
        price: 120.0,
        quantity: 0,
        activeButton: false,
        input: "",
      },
      {
        name: "google",
        price: 150.0,
        quantity: 0,
        activeButton: false,
        input: "",
      },
      {
        name: "facebook",
        price: 80.0,
        quantity: 0,
        activeButton: false,
        input: "",
      },
      {
        name: "tesla",
        price: 250.0,
        quantity: 0,
        activeButton: false,
        input: "",
      },
    ],
  },
  mutations: {
    quantityChange(state, payload) {
      state.availableStocks[payload.index].quantity = payload.value;
    },
    priceChange(state, payload) {
      state.availableStocks[payload.index].price = payload.value;
    },
    activeButtonChange(state, payload) {
      state.availableStocks[payload.index].activeButton = payload.value;
    },
    inputChange(state, payload) {
      state.availableStocks[payload.index].input = payload.value;
    },
    aleatoryPriceChange(state, payload) {
      state.availableStocks[payload.index].price *=
        1 + (Math.random() - 0.5) / 5;
    },
  },
  actions: {
    quantityUpdate({ commit, state }, payload) {
      if (state.availableStocks[payload.index].input === "") {
        commit("quantityChange", {
          index: payload.index,
          value: 0,
        });
        commit("activeButtonChange", {
          index: payload.index,
          value: false,
        });
      } else {
        let number = Number.parseInt(
          state.availableStocks[payload.index].input
        );
        commit("quantityChange", {
          index: payload.index,
          value: number,
        });
        commit("activeButtonChange", {
          index: payload.index,
          value: number === 0 ? false : true,
        });
      }
    },
    priceUpdate({ commit }, payload) {
      commit("priceChange", payload);
    },
    aleatoryPriceUpdate({ commit, state }) {
      for (let i = 0; i < state.availableStocks.length; ++i) {
        commit("aleatoryPriceChange", {
          index: i,
        });
      }
    },
    activeButtonUpdate({ commit }, payload) {
      commit("activeButtonChange", payload);
    },
    inputUpdate({ commit }, payload) {
      commit("inputChange", payload);
    },
  },
};
