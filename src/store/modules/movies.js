export default {
  namespaced: true,
  state: {
    movieList: []
  },
  getters: {
    getMoviesList(state) {
      return state.movieList;
    }
  },
  mutations: {
      setMovieList(store, payload){
          store.movieList = payload
      }
  },
  actions: {
    searchMovies({ commit }, payload) {
        commit("setMovieList", payload)
    }
  }
};
