<template>
  <div id="app">
    <div class="wrap">
      <div id="nav">
        <router-link class="nav-link" to="/">Список задач</router-link>
        <router-link class="nav-link" to="/task"
          >Добавить задачу</router-link
        >
      </div>
      <router-view />
    </div>
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
