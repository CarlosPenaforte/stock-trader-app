import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("reais", function (value) {
  let strValue = "" + value.toFixed(2);
  let commaStr = strValue.replace(".", ",");
  let charArray = commaStr.split("");
  let arrayLength = charArray.length;
  let reversedArray = charArray.reverse();
  if (arrayLength > 6) {
    reversedArray.splice(6, 0, ".");
  }
  if (arrayLength > 9) {
    reversedArray.splice(9, 0, ".");
  }
  return "R$ " + reversedArray.reverse().join("");
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
