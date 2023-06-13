<template>
  <div class="modal">
    <div class="modal-container">
      <div class="close" @click="this.TOGGLE_MODAL">&times;</div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "modal",
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
  },
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  display: block;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .element-preview-container {
    margin: auto;
  }

  .close {
    color: #aaaaaa;
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: -80px;
    font-size: 18px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    margin: auto;
    padding: 20px;
    width: 50%;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
