<template>
  <div @click="checkClick" ref="toolkitWrap" class="toolkit-wrapper">
    <div class="toolkit-content">
      <h3>Popup tool kit</h3>
      <p>Customize your popup experience</p>

      <div class="toolkit-style-container">
        <h4>Toolkit style config</h4>

        <div class="check-input-container">
          <div class="check-input" @click="handlePopupShape">
            <div class="inner-check" v-if="previewPopData.isRounded"></div>
          </div>
          <p>Select to make the popup circular</p>
        </div>

        <div class="color-picker">
          <p>Select a background color</p>
          <input
            type="color"
            :value="previewPopData.bgColor"
            id="bgColor"
            @change="handleBackgroundColorSelection($event)"
          />
        </div>

        <div class="color-picker">
          <p>Select a text color</p>
          <input
            type="color"
            :value="previewPopData.color"
            id="textColor"
            @change="handleColorSelection($event)"
          />
        </div>
      </div>

      <div class="toolkit-element-container">
        <h4>Toolkit Elements</h4>
        <div class="toolkit-element">
          <div
            class="tlk-container"
            v-for="(el, index) in listOfElements"
            @click="handleElementSelection(el.value)"
            :key="el.value + index"
          >
            <p>{{ el.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { ElementToJSON } from "@/utils/toolkitTransformation";
import { ListOfElements } from "@/utils/constants";
import { mapState } from "vuex";
export default {
  name: "ElementToolKit",
  data() {
    return {
      listOfElements: ListOfElements,
    };
  },
  computed: {
    ...mapState(["toolkitModal", "previewPopData", "toolKitElements"]),
  },
  methods: {
    ...mapMutations([
      "TOGGLE_TOOLKIT_MODAL",
      "SET_TOOLKIT_ELEMENT_DATA",
      "SET_PREVIEW_POPUP_DATA",
    ]),

    checkClick(e) {
      if (e.target === this.$refs.toolkitWrap) {
        this.TOGGLE_TOOLKIT_MODAL();
      }
    },

    handlePopupShape() {
      const payload = this.previewPopData;
      this.SET_PREVIEW_POPUP_DATA({
        ...payload,
        isRounded: !payload.isRounded,
      });
    },

    handleColorSelection(e) {
      const { value } = e.target;
      const payload = this.previewPopData;

      this.SET_PREVIEW_POPUP_DATA({ ...payload, color: value });
    },

    handleBackgroundColorSelection(e) {
      const { value } = e.target;
      const payload = this.previewPopData;

      this.SET_PREVIEW_POPUP_DATA({ ...payload, bgColor: value });
    },

    handleElementSelection(el) {
      if (this.toolKitElements.length == 5) {
        alert("You have reached the maximum number of elements");
        return;
      }
      this.SET_TOOLKIT_ELEMENT_DATA(ElementToJSON(el));
    },
  },
};
</script>
<style lang="scss">
.toolkit-wrapper {
  position: fixed;
  top: 0;
  left: 0 !important;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 900px) {
    left: 90px;
  }

  .toolkit-content {
    position: relative;
    height: 100%;
    padding: 56px;
    max-width: 400px;
    width: 100%;
    background-color: #ffffff;
    color: #000000;
    -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    -moz-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  }

  .toolkit-element-container {
    margin-top: 40px;
  }

  .toolkit-style-container {
    margin-top: 30px;
  }

  .toolkit-element {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 20px;
    margin-top: 15px;

    .tlk-container {
      margin-bottom: 20px;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      line-height: 19px;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      -moz-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }
}
</style>
