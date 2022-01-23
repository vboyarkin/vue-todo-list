export default {
  actions: {
    async fetchTodoList(ctx) {
      const res = await fetch(
        "http://localhost:3000/todos"
      );
      const data = await res.json()
      ctx.commit('updateTodoList', data);
    }
  },
  mutations: {
    updateTodoList(state, list) {
      state.todos = list;
    },
    updateTodo(state, todo) {
      state.todos[todo.id] = todo;
    },
    createTodo(state, todo) {
      todo.id = state.todos.length;
      state.todos.push(todo);
    }
  },
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    getTodo(state, id) {
      if (state.todos.length <= id) return null;

      return state.todos[id];
    }
  },
}