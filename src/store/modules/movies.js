import axios from "axios";

export default {
  namespaced: true,
  state: {
    watchedMovies: [],
    guestSession: "",
    movieList: [],
    movieApiKey: ""
  },
  getters: {
    getMoviesList(state) {
      return state.movieList;
    },
    getMovieApiKey(state) {
      return state.movieApiKey;
    },
    getWatchedMovies(state) {
      return state.watchedMovies;
    }
  },
  mutations: {
    setMovieList(store, payload) {
      store.movieList = payload;
    },
    setGuestSession(store, payload) {
      store.guestSession = payload;
    }
  },
  actions: {
    async searchMovies({ commit, getters }, payload) {
      const termsToSearch = payload.replace(/ /g, "+");
      const uri = `https://api.themoviedb.org/3/search/movie?api_key=${getters.getMovieApiKey}&query=${termsToSearch}`;
      const search = await axios(uri).then(res => res.data.results);
      const movieList = search.map(m => ({ title: m.title, id: m.id }));
      commit("setMovieList", movieList);
    },

    async createTMDBSession({ commit, getters }) {
      const uri = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${getters.getMovieApiKey}`;
      const session = await fetch(uri).then(res => res.data);
      commit("setGuestSession", session);
    }
  }
};
