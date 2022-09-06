export default {
  namespaced: true,
  state: {
    userToSave: {
      name: "Carlos",
      email: "carlos@gmail.com",
      cpf: "163",
      money: 10000,
      stockList: [],
    },
    saleInputs: [],
  },
  mutations: {
    moneyChange(state, payload) {
      state.userToSave.money = payload;
    },
    stockRegister(state, payload) {
      state.userToSave.stockList.push({
        name: payload.name,
        purchasePrice: payload.purchasePrice,
        quantity: payload.quantity,
      });
      state.saleInputs.push("");
    },
    addStockQuantity(state, payload) {
      state.userToSave.stockList[payload.index].quantity += payload.quantity;
    },
    subtractStockQuantity(state, payload) {
      state.userToSave.stockList[payload.index].quantity -= payload.quantity;
    },
    updateStockPurchasePrice(state, payload) {
      state.userToSave.stockList[payload.index].purchasePrice = payload.price;
    },
    removeStock(state, payload) {
      state.userToSave.stockList.splice(payload, 1);
    },
    inputChange(state, payload) {
      state.saleInputs[payload.index] = payload.input;
    },
  },
  actions: {
    stockPurchase({ commit, state }, payload) {
      if (
        (payload.quantity !== 0) &
        (state.userToSave.money >= payload.price * payload.quantity)
      ) {
        commit(
          "moneyChange",
          state.userToSave.money - payload.price * payload.quantity
        );

        let hasStock = false;
        let index = 0;
        for (let stock of state.userToSave.stockList) {
          if (stock.name === payload.name) {
            index = state.userToSave.stockList.indexOf(stock);
            hasStock = true;
            commit("addStockQuantity", {
              quantity: payload.quantity,
              index,
            });
            break;
          }
        }

        if (!hasStock) {
          commit("stockRegister", {
            name: payload.name,
            purchasePrice: payload.price,
            quantity: payload.quantity,
          });
        }
      } else if (state.userToSave.money < payload.price * payload.quantity) {
        alert("Saldo insuficiente!");
      }
    },
    stockSale({ commit, state }, payload) {
      if (
        payload.quantity !== 0 &&
        payload.quantity <= state.userToSave.stockList[payload.index].quantity
      ) {
        commit(
          "moneyChange",
          state.userToSave.money + payload.price * payload.quantity
        );

        if (
          payload.quantity < state.userToSave.stockList[payload.index].quantity
        ) {
          commit("subtractStockQuantity", {
            quantity: payload.quantity,
            index: payload.index,
          });
        } else {
          commit("removeStock", payload.index);
        }
      }
    },
    inputUpdate({ commit }, payload) {
      commit("inputChange", payload);
    },
    restartApp({ commit }, payload) {
      commit("moneyChange", payload.money);
      for (let stock of payload.stockList) {
        commit("stockRegister", stock);
      }
    },
    syncStocksPrice({ commit, state, rootState }) {
      for (let i = 0; i < state.userToSave.stockList.length; ++i) {
        let newPriceOfStock = rootState.stock.availableStocks.filter(
          (el) => el.name == state.userToSave.stockList[i].name
        )[0].price;
        commit("updateStockPurchasePrice", {
          index: i,
          price: newPriceOfStock,
        });
      }
    },
  },
};
