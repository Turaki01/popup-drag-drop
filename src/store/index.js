import { createStore } from "vuex";

export default createStore({
  state: {
    previewPopData: {
      bgColor: "#8c3937",
      color: "#000000",
      isRounded: true,
    },
    toolkitModal: null,
    toolKitElements: []
  },
  mutations: {
    SET_PREVIEW_POPUP_DATA(state, payload) {
      state.previewPopData = payload;
    },
    TOGGLE_TOOLKIT_MODAL(state) {
      state.toolkitModal = !state.toolkitModal;
    },
    SET_TOOLKIT_ELEMENT_DATA(state, payload) {
      state.toolKitElements.push(payload);
    },
  },
  actions: {
  },
  modules: {},
});
