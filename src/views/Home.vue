<template>
  <div class="home-container">
    <div class="header flex justify-between">
      <div>
        <h3>Hello 👋</h3>
        <p>why don&#39;t we build your popup together</p>
      </div>

      <div v-if="listOfElements.length" @click="addNewFields" class="button flex">
        <div class="inner-button flex">
          <img src="@/assets/svg/icon-plus.svg" alt="" />
        </div>
        <span>Add Fields</span>
      </div>
    </div>

    <div class="element-grid">
      <div></div>
      <div class="drag-drop-container">
        <!-- empty state -->
        <div class="empty-state" v-if="!listOfElements.length">
          <img src="@/assets/svg/empty-state.svg" alt="" />

          <p>Ops seems you have no fields ! Click on add fields button and start your journey</p>

          <div v-if="!listOfElements.length" @click="addNewFields" class="button flex">
        <div class="inner-button flex">
          <img src="@/assets/svg/icon-plus.svg" alt="" />
        </div>
        <span>Add Fields</span>
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
              :animation="300"
              :group="{ name: 'listOfElements' }"
            >
              <template #item="{ element: listOfElements }">
                <div class="drag-element flex item-center">
                  <div v-if="listOfElements.category === 'input'">
                    <div class="form-control">
                      <p :style="{ color: this.previewPopData.color }">
                        {{ listOfElements?.label }}
                      </p>

                      <input :type="text" />
                    </div>
                  </div>

                  <div v-if="listOfElements.category === 'text'">
                    <div>
                      <h3 :style="{ color: this.previewPopData.color }">
                        {{ listOfElements.label }}
                      </h3>
                    </div>
                  </div>

                  <div v-if="listOfElements.category === 'button'">
                    <div class="form-control">
                      <button :type="listOfElements.type">
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
        <h4>Element preview</h4>

        <draggable
          v-model="listOfElements"
          tag="div"
          :animation="300"
          :group="{ name: 'listOfElements', pull: 'clone', put: false }"
        >
          <template #item="{ element: listOfElements }">
            <div class="drag-element flex item-center">
              <div v-if="listOfElements.category === 'input'">
                <div class="form-control">
                  <p>{{ listOfElements?.label }}</p>

                  <input :type="text" />
                </div>
              </div>

              <div v-if="listOfElements.category === 'text'">
                <div>
                  <h3>{{ listOfElements.label }}</h3>
                </div>
              </div>

              <div v-if="listOfElements.category === 'button'">
                <div class="form-control">
                  <button :type="listOfElements.type">
                    {{ listOfElements.label }}
                  </button>
                </div>
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
    ...mapMutations(["TOGGLE_TOOLKIT_MODAL"]),

    addNewFields() {
      this.TOGGLE_TOOLKIT_MODAL();
    },
  },
  watch: {
    toolKitElements: {
      handler() {
        console.log(this.toolKitElements);
        this.listOfElements = [...this.listOfElements, ...this.toolKitElements];
      },
      deep: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.home-container {
  padding: 20px 0;

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
  .button {
    color: #fff;
    background-color: #7661e0;
    align-items: center;
    justify-content: center;
    width: fit-content;

    img {
      margin-right: 4px;
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
}
</style>
