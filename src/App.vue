<template>
  <div id="app">
    <div class="wrap">
      <div id="nav">
        <router-link class="nav-link" to="/">Список задач</router-link>
        <router-link class="nav-link" to="/new-task">
          Добавить задачу
        </router-link>
      </div>
      <Loader v-if="isLoading" />
      <router-view v-else />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: { Loader },
  mounted() {
    this.fetchTodoList().then(() => {
      setTimeout(() => this.doneLoading(), 1000);
    });
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions(["fetchTodoList"]),
    ...mapMutations(["doneLoading"]),
  },
};
</script>

<style lang="sass">
body
  font-family: $main-font

#nav
  font-size: 1.2rem
  display: flex
  justify-content: center

.nav-link
  color: $color-active
  padding: 0.6rem
  text-decoration: none
  border: solid 1px $color-active
  border-radius: 3px
  margin: 1rem

.router-link-exact-active
  background: $color-active
  color: white

#app
  width: 100%

  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

div.wrap
  width: 600px
</style>
