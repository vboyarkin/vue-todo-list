<template>
  <div class="card-list">
    <TodoCard v-for="todo of allTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoCard from "@/components/TodoCard.vue";
export default {
  computed: mapGetters(["allTodos"]),
  components: {
    TodoCard,
  },
};
</script>

<style lang="sass" scoped>
.card-list
  width: 100%
  display: flex
  flex-direction: column-reverse
</style>