<template>
  <div>
    <label for="name">name</label>
    <input type="text" name="name" v-model="todo.name" />
    <label for="description">description</label>
    <input type="text" name="description" v-model="todo.description" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      todo: {
        id: -1,
        name: "",
        description: "",
        status: "new",
        createdAt: new Date().getTime(),
      },
    };
  },
  methods: mapGetters(["getTodo"]),
  mounted() {
    const id = this.$route.query.id;

    if (id !== undefined) {
      this.todo = this.getTodo(id);
    }
  },
};
</script>

<style>
</style>