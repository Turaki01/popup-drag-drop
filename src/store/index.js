import { createStore } from "vuex";

export default createStore({
  state: {
    previewPopData: {
      bgColor: "#8c3937",
      color: "#ffffff",
      popup_inputs: ['text', 'Rasheed', 'Mama']
    }
  },
  mutations: {
    SET_PREVIEW_POPUP_DATA(state, payload) {
      state.previewPopData = payload;
    },
  },
  actions: {
    UPDATE_PREVIEW_POPUP({commit}, data) {
      commit("SET_PREVIEW_POPUP_DATA", data)
    }
  },
  modules: {},
});
