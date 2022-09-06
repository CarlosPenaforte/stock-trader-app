<template>
  <div class="walletPage">
    <div class="container" v-if="userToSave.stockList.length !== 0">
      <div
        v-for="(stock, index) in userToSave.stockList"
        :key="index"
        class="stock"
      >
        <div class="stockTitle">
          <strong>{{ stock.name }}</strong>
          (Preço: {{ stock.purchasePrice | reais }} | Quantidade possuída:
          {{ stock.quantity }})
        </div>
        <div class="purchase">
          <label for="input">Quantidade</label>
          <div class="select">
            <input
              type="number"
              min="0"
              :max="stock.quantity"
              :value="saleInputs[index]"
              @input="
                inputUpdate({
                  index,
                  input: $event.target.value,
                })
              "
            />
            <button
              class="plainButton"
              :class="{
                activeButton:
                  saleInputs[index] !== '' && saleInputs[index] !== '0',
              }"
              @click="
                stockSale({
                  name: stock.name,
                  price: stock.purchasePrice,
                  quantity: Number.parseInt(saleInputs[index]),
                  index,
                })
              "
            >
              Vender
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="noStock" v-else>
      <div class="noStockContainer">
        <AlertBar color="green">Sem Ações para Gerenciar</AlertBar>
        <router-link to="/stocks">Compre ações</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import AlertBar from "@/components/AlertBar.vue";

  export default {
    components: {
      AlertBar,
    },
    computed: {
      ...mapState("wallet", {
        userToSave: (state) => state.userToSave,
        saleInputs: (state) => state.saleInputs,
      }),
    },
    methods: {
      ...mapActions("wallet", ["stockSale", "inputUpdate"]),
    },
  };
</script>

<style scoped>
  .walletPage {
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
    background-color: rgb(150, 50, 50);
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

  .noStock {
    flex: 1;
    display: flex;
  }

  .noStockContainer {
    display: flex;
    width: 100%;
    gap: 2rem;
    flex-direction: column;
  }

  .noStock a {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration-line: none;
    color: rgb(250, 250, 250);
    background-color: rgb(250, 150, 0);
    padding: 1rem;
    box-shadow: 0 2px 2px rgba(50, 50, 50, 0.6);
  }

  .noStock a:hover {
    background-color: rgb(255, 200, 0);
  }

  .noStock a:active {
    background-color: rgb(255, 150, 0);
  }
</style>
