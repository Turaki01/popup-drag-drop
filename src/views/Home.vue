<template>
  <div class="home-container">
    <div class="header flex justify-between">
      <div>
        <h3>Hello 👋</h3>
        <p>why don&#39;t we build your popup together</p>
      </div>

      <div class="header-button">
        <div
          v-if="listOfElements.length"
          @click="addNewFields"
          class="button flex"
        >
          <div class="inner-button flex">
            <img src="@/assets/svg/icon-plus.svg" alt="" />
          </div>
          <span>Add Fields</span>
        </div>

       
        <div
          class="button"
          v-if="listOfElements.length"
          @click="navigateToPreview"
        >Preview
        </div>
      </div>
    </div>

    <div class="element-grid">
      <div></div>
      <div class="drag-drop-container">
        <!-- empty state -->
        <div class="empty-state" v-if="!listOfElements.length">
          <img src="@/assets/svg/empty-state.svg" alt="" />

          <p>
            Ops seems you have no fields ! Click on add field button and start
            your journey
          </p>

          <div
            v-if="!listOfElements.length"
            @click="addNewFields"
            class="button flex"
          >
            <div class="inner-button flex">
              <img src="@/assets/svg/icon-plus.svg" alt="" />
            </div>
            <span>Add Field</span>
          </div>
        </div>
        <!-- empty state -->

        <div
          v-if="listOfElements.length"
          class="element-preview-container"
          :style="{
            background: this.previewPopData.bgColor,
            borderRadius: this.previewPopData.isRounded ? 50 + '%' : 0,
          }"
        >
          <div
            class="element-border"
            :style="{
              borderRadius: this.previewPopData.isRounded ? 50 + '%' : 0,
            }"
          >
            <!-- render pop elements here -->
            <draggable
              v-model="listOfElements"
              tag="div"
              class="full-width"
              :animation="300"
              :group="{ name: 'listOfElements' }"
            >
              <template #item="{ element: listOfElements }">
                <div class="drag-element-container-el">
                  <div
                    class="star-container"
                    v-if="listOfElements.category === 'star'"
                  >
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>

                  <div v-if="listOfElements.category === 'input'">
                    <div class="form-control">
                      <input
                        :type="text"
                        :placeholder="listOfElements?.label"
                      />
                    </div>
                  </div>

                  <div v-if="listOfElements.category === 'text'">
                    <div>
                      <p :style="{ color: this.previewPopData.color }">
                        {{ listOfElements.label }}
                      </p>
                    </div>
                  </div>

                  <div v-if="listOfElements.category === 'header'">
                    <div>
                      <h3 :style="{ color: this.previewPopData.color }">
                        {{ listOfElements.label }}
                      </h3>
                    </div>
                  </div>

                  <div v-if="listOfElements.category === 'button'">
                    <div class="form-control">
                      <button
                        class="element-button"
                        :type="listOfElements.type"
                      >
                        {{ listOfElements.label }}
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
            <!-- render pop elements here -->
          </div>
        </div>
      </div>
      <div class="card-container">
        <h4 style="margin-bottom: 20px">Element preview</h4>

        <draggable
          v-model="listOfElements"
          tag="div"
          :animation="300"
          :group="{ name: 'listOfElements', pull: 'clone', put: false }"
        >
          <template #item="{ element: listOfElements, index }">
            <div class="drag-element flex item-center">
              <div class="icon-container">
                <i class="fa fa-trash" @click="handleDelete(index)"></i>
              </div>
              <div class="form-control">
                <h4 class="element-preview-type">
                  Type : {{ listOfElements?.category }}
                </h4>
                <p
                  v-if="listOfElements?.type !== 'star'"
                  class="editable-content"
                  contenteditable="true"
                  @input="handleTextEdit($event, index)"
                >
                  {{ listOfElements?.label }}
                </p>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>

    <transition name="toolkit">
      <ElementToolKit v-if="toolkitModal" />
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ElementToolKit from "@/components/ElementToolKit";
import draggable from "vuedraggable";
import { toolKitLocalStorageKey, previewPopUpLocalStorageKey } from  "@/utils/constants"

export default {
  name: "Home",
  components: {
    ElementToolKit,
    draggable,
  },
  data() {
    return {
      listOfElements: [],
    };
  },
  computed: {
    ...mapState(["toolkitModal", "toolKitElements", "previewPopData"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_TOOLKIT_MODAL", "SET_TOOLKIT_ELEMENT_DATA"]),

    addNewFields() {
      this.TOGGLE_TOOLKIT_MODAL();
    },

    handleDelete(index) {
      this.toolKitElements.splice(index, 1);
    },

    navigateToPreview() {
      localStorage.setItem(toolKitLocalStorageKey, JSON.stringify( this.toolKitElements))
      localStorage.setItem(previewPopUpLocalStorageKey, JSON.stringify(this.previewPopData))
      window.location.replace('/preview')
    },

    handleTextEdit(e, index) {
      const { innerText } = e.target;
      this.toolKitElements[index].label = innerText;
    },
  },
  watch: {
    toolKitElements: {
      handler() {
        this.listOfElements = [...this.toolKitElements];
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px 0;

  .element-preview-type {
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  .icon-container {
    position: absolute;
    color: red;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  

  .header-button {
    display: flex;

    :first-child {
      margin-right: 10px;
    }
  }

  .editable-content {
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    word-wrap: break-word;
    width: 100%;
    max-width: 240px;
    outline: none;
    padding: 10px;
  }

  .empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    p {
      text-align: center;
      max-width: 400px;
      margin-top: 25px;
      margin-bottom: 20px;
    }
    img {
      max-width: 300px;
    }
  }
  .icon-container {
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    justify-content: flex-end;

    :first-child {
      margin-right: 5px;
      cursor: pointer;
    }

    :last-child {
      color: red;
      cursor: pointer;
    }
  }

  .header {
    margin-bottom: 30px;
  }
  .element-grid {
    display: grid;
    grid-template-columns: 25% auto 25%;
    column-gap: 50px;
  }

  .preview-link {
    text-decoration: none;
  }
}
</style>
