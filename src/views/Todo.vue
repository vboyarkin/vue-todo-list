<template>
  <form @submit.prevent="submit">
    <div class="todo-container">
      <input
        type="text"
        name="title"
        v-model="todo.title"
        placeholder="Название задачи"
      />
      <textarea
        type="text"
        name="description"
        v-model="todo.description"
        placeholder="Описание задачи"
      />
      <select name="status" v-model="todo.status" :class="todo.status">
        <option class="new" value="new">Новая</option>
        <option class="in-progress" value="in-progress" mu>В процессе</option>
        <option class="completed" value="completed">Выполнена</option>
      </select>
      <button
        type="submit"
        class="add"
        :class="{ disabled: todo.title.trim() === '' }"
      >
        {{ isEditing ? "Сохранить" : "Добавить" }}
      </button>
      <button v-if="todo.id" @click="deleteClick" class="delete">
        Удалить
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      todo: {
        title: "",
        description: "",
        status: "new",
        createdAt: new Date().getTime(),
      },
      isEditing: false,
    };
  },
  computed: {
    ...mapGetters(["getTodo"]),
  },
  methods: {
    ...mapMutations(["createTodo", "deleteTodo", "updateTodo"]),
    submit() {
      if (this.todo.title.trim() === "") return;

      if (this.isEditing) this.updateTodo(this.todo);
      else this.createTodo(this.todo);

      this.todo = {
        title: "",
        description: "",
        status: "new",
        createdAt: new Date().getTime(),
      };

      this.$router.push("/");
    },
    deleteClick() {
      this.deleteTodo(this.todo.id);
      this.todo = {
        title: "",
        description: "",
        status: "new",
        createdAt: new Date().getTime(),
      };
      this.$router.push("/");
    },
  },
  mounted() {
    if (this.$route.query.id !== undefined) {
      this.isEditing = true;
      this.todo = this.getTodo(this.$route.query.id);
    }
  },
};
</script>

<style lang="sass" scoped>
.todo-container
  input, textarea, select
    display: block
    box-sizing: border-box
    width: 100%
    padding: 0.7rem
    margin: .8rem .3rem
    font-size: 1rem

input[type="text"]
  font-size: 1.1rem
  font-weight: 600
textarea
  min-width: 200px
  min-height: 30px
  max-width: 100%
  font: inherit

.new
  color: $color-new

.in-progress
  color: $color-active

.completed
  color: $color-inactive

button
  padding: 0.7rem
  margin: .3rem
  font-size: 1rem
  border-radius: 3px
  border: solid 1px
  cursor: pointer

button.add
  background-color: $color-active
  border-color: $color-active
  color: white

button.disabled
  cursor: not-allowed
  filter: opacity(0.6)

button.delete
  background-color: white
  border-color: $color-warning
  color: $color-warning
</style>