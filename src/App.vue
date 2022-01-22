<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">Список задач</router-link>
      <router-link class="nav-link" to="/new-task">Добавить задачу</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      todos: [],
    };
  },
  async mounted() {
    this.fetchTodoList();
  },
  methods: mapActions(["fetchTodoList"]),
};
</script>

<style lang="sass">
body
  font-family: $main-font

#nav
  display: flex
  justify-content: center
  font-size: 1.2rem

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
</style>
