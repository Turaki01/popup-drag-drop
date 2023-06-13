import { createStore } from "vuex";

export default createStore({
  state: {
    previewPopData: {
      bgColor: "#8c3937",
      color: "#ffffff",
      isRounded: true,
    },
    toolkitModal: null,
    toolKitElements: [],
    modalActive: false,
  },
  mutations: {
    SET_PREVIEW_POPUP_DATA(state, payload) {
      state.previewPopData = payload;
    },
    TOGGLE_TOOLKIT_MODAL(state) {
      state.toolkitModal = !state.toolkitModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    },
    SET_TOOLKIT_ELEMENT_DATA(state, payload) {
      state.toolKitElements.push(payload)
    },
  },
  actions: {
  },
  modules: {},
});
