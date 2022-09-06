<template>
  <div class="top-bar">
    <div class="logo">
      <h1>
        <strong>Stock</strong>
        Trader
      </h1>
    </div>
    <nav>
      <ul class="links">
        <router-link to="/" tag="li"><a>Início</a></router-link>
        <router-link to="/wallet" tag="li"><a>Portfólio</a></router-link>
        <router-link to="/stocks" tag="li"><a>Ações</a></router-link>
      </ul>

      <ul class="actions">
        <li @click="dispatchPriceUpdate">
          <strong>Finalizar Dia</strong>
        </li>
        <li @click="$emit('saveData')">
          <strong>Salvar & Carregar</strong>
        </li>
        <li>Saldo: {{ userToSave.money | reais }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    name: "TopBar",
    computed: mapState("wallet", {
      userToSave: (state) => state.userToSave,
    }),
    methods: {
      ...mapActions(["dispatchPriceUpdate"]),
    },
  };
</script>

<style scoped>
  * {
    text-transform: uppercase;
  }

  .top-bar {
    display: flex;
    height: 4rem;
    background-color: rgb(240, 240, 240);
    box-shadow: 0 2px 2px rgba(50, 50, 50, 0.6);
    z-index: 2;
    box-sizing: border-box;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: 4rem;
  }

  .logo h1 {
    font-size: 1.2rem;
    font-weight: 500;
    color: rgb(50, 50, 50);
    user-select: none;
  }

  nav {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .links,
  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    height: 100%;
  }

  .links li {
    height: 100%;
  }

  .links li a:hover {
    background-color: rgb(200, 200, 200);
  }

  .links li a:active {
    background-color: transparent;
  }

  .links li a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 7rem;
    height: 100%;
    color: rgb(50, 50, 50);
    user-select: none;
  }

  .actions li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 0 0.8rem;
    height: 100%;
    color: rgb(50, 50, 50);
    user-select: none;
  }

  .actions li:nth-child(1):hover,
  .actions li:nth-child(2):hover {
    cursor: pointer;
    background-color: rgb(200, 200, 200);
  }

  .actions li:nth-child(1):active,
  .actions li:nth-child(2):active {
    cursor: pointer;
    background-color: transparent;
  }
</style>
