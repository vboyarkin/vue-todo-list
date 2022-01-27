export default {
  state: {
    isLoading: true,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    doneLoading(state) {
      state.isLoading = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
  },
};
