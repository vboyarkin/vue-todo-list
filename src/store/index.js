import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import loader from "./modules/loader";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    loader,
  },
});
