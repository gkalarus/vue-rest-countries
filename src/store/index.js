import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import getCountries from "@/api/getCountries";
import {
  FETCH_COUNTRIES,
  RECEIVE_COUNTRIES,
  GET_COUNTRY_DETAILS,
  COUNTRIES_FILTERED,
  SET_SEARCH,
  VISIBLE_PAGES,
  RESET_CURRENT_PAGE,
} from "@/utils/consts";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    countries: [],
    search: null,
    isLoading: true,
    currentPage: 1,
    perPage: 24,
  },
  getters: {
    [GET_COUNTRY_DETAILS]: (state) => (countryCode) => {
      return state.countries.filter((country) => {
        return country.cca3 === countryCode;
      });
    },
    [COUNTRIES_FILTERED]: (state) => {
      if (!state.search) {
        return state.countries;
      }

      return state.countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(state.search.toLowerCase());
      });
    },
    [VISIBLE_PAGES]: (state, getters) => {
      if (!state.search) {
        return state.countries.slice(
          (state.currentPage - 1) * state.perPage,
          state.currentPage * state.perPage
        );
      }
      return getters[COUNTRIES_FILTERED].slice(
        (state.currentPage - 1) * state.perPage,
        state.currentPage * state.perPage
      );
    },
  },
  mutations: {
    [RECEIVE_COUNTRIES](state, countries) {
      state.countries = countries;
      state.isLoading = false;
    },
    [SET_SEARCH](state, value) {
      state.search = value ? value.trim() : value;
    },
    [RESET_CURRENT_PAGE](state) {
      state.currentPage = 1;
    },
  },
  actions: {
    [FETCH_COUNTRIES]: async (context) => {
      const countries = await getCountries();
      context.commit(RECEIVE_COUNTRIES, countries);
    },
  },
  modules: {},
});
