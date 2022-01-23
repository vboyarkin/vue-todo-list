export default {
  actions: {
    fetchTodoList({ commit, dispatch }) {
      let todos = localStorage.getItem("todos");
      if (!todos) {
        todos = [];
        dispatch('saveToStorage', []);
      } else
        todos = JSON.parse(todos)
      commit('updateTodoList', todos);
    },
    saveToStorage({ state }, todos = state.todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    updateTodo({ commit, dispatch }, todo) {
      commit('updateTodo', todo)
      dispatch('saveToStorage');
    },
    createTodo({ commit, dispatch }, todo) {
      commit('createTodo', todo)
      dispatch('saveToStorage');
    },
    deleteTodo({ commit, dispatch }, id) {
      commit('deleteTodo', id)
      dispatch('saveToStorage');
    }
  },
  mutations: {
    updateTodoList(state, list) {
      state.todos = list;
    },
    updateTodo(state, todo) {
      state.todos[todo.id - 1] = todo;
    },
    createTodo(state, todo) {
      todo.id = state.todos.length + 1;
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      if (id - 1 <= state.todos.length)
        state.todos.splice(id - 1, 1)
    }
  },
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    getTodo:
      (state) => (id) => {
        if (id - 1 >= state.todos.length) return null;

        console.log('id :>> ', id);

        console.log("getTodo()");
        return state.todos[id - 1];
      },
  },
}