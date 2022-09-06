<template>
  <div id="app">
    <TopBar @saveData="saveData" />
    <router-view />
  </div>
</template>

<script>
  import TopBar from "./components/TopBar.vue";
  import { mapActions, mapState } from "vuex";

  export default {
    components: {
      TopBar,
    },
    data() {
      return {
        user: [],
      };
    },
    computed: {
      ...mapState("wallet", {
        userToSave: (state) => state.userToSave,
      }),
    },
    methods: {
      ...mapActions("wallet", ["restartApp"]),
      saveData() {
        this.$http.get("/").then((res) => {
          this.user = res.data;
        });
        console.log(this.user);
        if (this.user.length !== 0) {
          if (this.user[0].name === this.userToSave.name) {
            this.$http
              .put(`/${this.user[0].id}`, this.userToSave)
              .then((res) => console.log(res));
          } else {
            this.$http
              .post("/", this.userToSave)
              .then((res) => console.log(res));
          }
        } else {
          this.$http.post("/", this.userToSave).then((res) => console.log(res));
        }
      },
      loadData() {
        this.$http
          .get("/")
          .then((res) => {
            this.user = res.data;
          })
          .then(() => {
            if (this.user.length !== 0) {
              this.restartApp(this.user[0]);
            }
          });
      },
    },
    created() {
      this.loadData();
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    background-color: rgb(245, 245, 245);
  }
</style>
