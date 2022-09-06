<template>
  <div class="stocksPage">
    <div class="container">
      <div v-for="(stock, index) in availableStocks" :key="index" class="stock">
        <div class="stockTitle">
          <strong>{{ stock.name }}</strong>
          (Preço: {{ stock.price | reais }})
        </div>
        <div class="purchase">
          <label for="input">Quantidade</label>
          <div class="select">
            <input
              type="number"
              min="0"
              :value="stock.input"
              @input="
                inputUpdate({ index, value: $event.target.value }),
                  quantityUpdate({ index })
              "
            />
            <button
              class="plainButton"
              :class="{ activeButton: stock.activeButton }"
              @click="
                stockPurchase({
                  name: stock.name,
                  price: stock.price,
                  quantity: stock.quantity,
                })
              "
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    computed: mapState("stock", {
      availableStocks: (state) => state.availableStocks,
    }),
    methods: {
      ...mapActions("stock", ["quantityUpdate", "inputUpdate"]),
      ...mapActions("wallet", ["stockPurchase"]),
    },
  };
</script>

<style scoped>
  .stocksPage {
    width: 100%;
    padding: 2rem 10vw;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
  }

  .stock {
    width: 26vw;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 2px rgba(50, 50, 50, 0.6);
  }

  .stockTitle {
    flex: 1;
    padding: 1rem;
    box-sizing: border-box;
    background-color: rgb(50, 150, 50);
    color: rgb(250, 250, 250);
    font-weight: 600;
  }

  .stockTitle strong {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .purchase {
    flex: 1;
    background-color: rgb(250, 250, 250);
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .purchase label {
    user-select: none;
    font-size: 0.8rem;
    color: rgb(80, 80, 80);
  }

  .select {
    flex: 1;
    display: flex;
    gap: 0.3rem;
  }

  .select input {
    flex: 1;
    padding: 0.3rem 0.1rem;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgb(50, 50, 50);
    outline: none;
    font-size: 1.1rem;
  }

  .plainButton {
    padding: 0.6rem 0.8rem;
    text-transform: uppercase;
    border: none;
    user-select: none;
    background-color: rgb(230, 230, 230);
    font-weight: 600;
    color: rgb(100, 100, 100);
  }

  .activeButton {
    background-color: rgb(50, 150, 200);
    color: rgb(250, 250, 250);
    box-shadow: 0 2px 2px rgba(50, 50, 50, 0.6);
    cursor: pointer;
  }

  .activeButton:hover {
    background-color: rgb(50, 200, 250);
  }

  .activeButton:active {
    background-color: rgb(50, 150, 200);
  }
</style>
