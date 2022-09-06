<template>
  <div class="home">
    <h4>Negocie e Consulte suas Ações!</h4>
    <AlertBar color="green">Você Pode Salvar & Carregar os Dados</AlertBar>
    <AlertBar color="red">
      Clique em Finalizar Dia para Iniciar um Novo Dia
    </AlertBar>
    <router-link to="/wallet">Gerencie suas ações</router-link>
    <router-link to="/stocks">Compre ações</router-link>
  </div>
</template>

<script>
  import AlertBar from "@/components/AlertBar.vue";

  export default {
    name: "HomeView",
    components: {
      AlertBar,
    },
  };
</script>

<style scoped>
  .home {
    width: 100%;
    padding: 2rem 10vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-sizing: border-box;
  }

  .home > h4 {
    font-size: 3rem;
    color: rgb(50, 50, 50);
    font-weight: 300;
  }

  .home > a {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration-line: none;
    color: rgb(250, 250, 250);
    background-color: rgb(50, 150, 200);
    padding: 1rem;
    box-shadow: 0 2px 2px rgba(50, 50, 50, 0.6);
  }

  .home > a:hover {
    background-color: rgb(50, 200, 250);
  }

  .home > a:active {
    background-color: rgb(50, 150, 200);
  }
</style>
