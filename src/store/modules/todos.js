export default {
  state: {
    todos: [],
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    getTodo: state => id => {
      return state.todos.find(todo => todo.id === id);
    },
  },
  actions: {
    async fetchTodoList({ commit }) {
      let todos = localStorage.getItem("todos");
      if (todos) {
        try {
          const parsedTodos = JSON.parse(todos);
          commit("updateTodoList", parsedTodos);
        } catch (err) {
          console.error(err);
        }
      }
    },
    saveToStorage({ state }, todos = state.todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    updateTodo({ commit, dispatch }, todo) {
      commit("updateTodo", todo);
      dispatch("saveToStorage");
    },
    createTodo({ commit, dispatch }, todo) {
      commit("createTodo", todo);
      dispatch("saveToStorage");
    },
    deleteTodo({ commit, dispatch }, id) {
      commit("deleteTodo", id);
      dispatch("saveToStorage");
    },
  },
  mutations: {
    updateTodoList(state, list) {
      state.todos = list;
    },
    updateTodo(state, newTodo) {
      const todoi = state.todos.findIndex(todo => todo.id === newTodo.id);
      state.todos.splice(todoi, 1, newTodo);
    },
    createTodo(state, todo) {
      todo.id = todo.createdAt + todo.title;
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      const todoi = state.todos.findIndex(todo => todo.id === id);
      state.todos.splice(todoi, 1);
    },
  },
};
