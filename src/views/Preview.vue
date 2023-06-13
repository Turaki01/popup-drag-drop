<template>
  <div class="preview-container">
    <img src="@/assets/svg/celebration.svg" alt="" />

    <p>
      Yayy you did it party 🎉 <br />
      Preview your popup
    </p>

    <div class="button flex" @click="this.TOGGLE_MODAL">
      <span>Preview Popup</span>
    </div>

    <Modal v-if="modalActive">
      <div
        v-if="toolKitElements.length"
        class="element-preview-container"
        :style="{
          background: this.previewPopData?.bgColor,
          borderRadius: this.previewPopData?.isRounded ? 50 + '%' : 0,
        }"
      >
        <div
          class="element-border"
          :style="{
            borderRadius: this.previewPopData?.isRounded ? 50 + '%' : 0,
          }"
        >
          <div class="drag-element-container-el">
            <div v-for="(el, index) in toolKitElements" :key="index">
              <div class="star-container" v-if="el.category === 'star'">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>

              <div v-if="el.category === 'input'">
                <div class="form-control">
                  <input :type="text" :placeholder="el?.label" />
                </div>
              </div>

              <div v-if="el.category === 'text'">
                <div>
                  <p :style="{ color: this.previewPopData?.color }">
                    {{ el.label }}
                  </p>
                </div>
              </div>

              <div v-if="el.category === 'header'">
                <div>
                  <h3 :style="{ color: this.previewPopData?.color }">
                    {{ el.label }}
                  </h3>
                </div>
              </div>

              <div v-if="el.category === 'button'">
                <div class="form-control">
                  <button class="element-button" :type="el.type">
                    {{ el.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import {
  toolKitLocalStorageKey,
  previewPopUpLocalStorageKey,
} from "@/utils/constants";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Preview",
  data() {
    return {
      toolKitElements: this.getElementValue(),
      previewPopData: this.getPreviewPopData(),
    };
  },
  computed: {
    ...mapState(["modalActive"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),

    getElementValue() {
      return JSON.parse(localStorage.getItem(toolKitLocalStorageKey));
    },

    getPreviewPopData() {
      return JSON.parse(localStorage.getItem(previewPopUpLocalStorageKey));
    },
  },
  components: {
    Modal,
  },
};
</script>
<style lang="scss">
.preview-container {
  max-width: 500px;
  margin: 40px auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .star-container {
    text-align: center !important;
    margin: 10px 0 !important;
  }

  .form-control {
    margin: 20px 0;
  }

  .element-button {
    margin: 20px 0 !important;
  } 

  p {
    max-width: 250px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 30px;
    line-height: 30px;
    font-size: 16px;
  }

  img {
    max-width: 200px;
    // margin: 20px auto;
  }
}
</style>
