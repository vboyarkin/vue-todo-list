<template>
  <div class="todo-card" :class="todo.status">
    <div class="todo-card-head">
      <h4>{{ todo.title }}</h4>
      <div class="status-container">
        <span class="status">{{ statusCaptions[todo.status] }}</span>
      </div>
    </div>
    <p>{{ todo.description }}</p>
    <span class="date">
      Создано {{ new Date(todo.createdAt).toLocaleDateString() }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statusCaptions: {
        new: "Новая",
        "in-progress": "В процессе",
        completed: "Выполнена",
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.todo-card
  border: solid 1px $color-active
  border-left-width: 4px
  border-radius: 3px
  padding: 0.3rem 1rem 1.4rem 1rem
  margin: 0.8rem
  width: 100%

.todo-card-head
  display: flex
  margin-top: 0.8rem
  *
    margin: 0px
  h4
    font-size: 1.1rem
  div.status-container
    margin-left: auto
    width: 90px

.todo-card.new
  border-color: $color-new
  span.status
    color: $color-new

.todo-card.in-progress
  border-color: $color-active
  span.status
    color: $color-active

.todo-card.completed
  border-color: $color-inactive
  span.status
    color: $color-inactive

span.date
  font-size: 0.8rem
  color: #353535
</style>