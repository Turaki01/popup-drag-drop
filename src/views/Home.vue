<template>
  <div class="home-container">
    <div class="header">
      <h3>Hello 👋</h3>
      <p>why don&#39;t we build your popup together</p>
    </div>

    <div class="element-grid">
      <div class="drag-drop-container">
        <draggable
          v-model="meals"
          tag="div"
          :animation="300"
          :group="{ name: 'meals', pull: 'clone', put: false }"
        >
          <template #item="{ element: meal }">
            <div class="drag-element flex item-center">{{ meal.name }}</div>
          </template>
        </draggable>
      </div>
      <div class="drag-drop-container">
        <draggable
          v-model="yuckyMeals"
          tag="div"
          group="meals"
          :animation="300"
          style="min-height: 140px"
        >
          <template #item="{ element: meal, index }">
            <div>
              <div class="icon-container">
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash" @click="handleDelete(index)"></i>
              </div>
              <div class="drag-element flex item-center">
                <div v-if="meal.category === 'input'">
                  <div class="form-control">
                    <p>{{ meal.label }}</p>

                    <input :type="text" />
                  </div>
                </div>

                <div v-if="meal.category === 'text'">
                  <div>
                    <h3>{{ meal.label }}</h3>
                  </div>
                </div>

                <div v-if="meal.category === 'button'">
                  <div class="form-control">
                    <button :type="meal.type">{{ meal.label }}</button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="card-container">
        <div>
            
        </div>
      </div>
    </div>

    <!-- <div class="element-grid">
      <div class="drag-drop-container">
        <div class="drag-element flex item-center">Text Field</div>
        <div class="drag-element flex item-center">Button</div>
        <div class="drag-element flex item-center">Star rating</div>
      </div>
      <div class="drag-drop-container">
        <div class="empty-drop-container">
        <p>Drag an element and drop to start customizing your popup</p>
      </div>
      </div>
      <div class="card-container"></div>
    </div> -->
  </div>
</template>

<script setup>
import {  ref, watch } from "vue";
import draggable from "vuedraggable";
import {useStore} from "vuex";

const store = useStore();


const meals = ref([
  {
    name: "Input",
    label: "Default input field",
    category: "input",
    type: "text",
    options: {
      placeholder: "",
      required: false,
      value: "",
    },
  },

  {
    name: "Text",
    category: "text",
    label: "Default Header",
    type: "header",
    options: {
      headerClass: ""
    },
  },

  {
    name: "button",
    category: "button",
    type: "submit",
    label: "Submit",
    options: {
      placeholder: "",
      required: false,
      value: "",
    },
  },

  {
    name: "star",
    category: "star",
    label: "",
    options: {
      placeholder: "",
      required: false,
      value: "",
    },
  },
  // "Hamburger",
  // "Pizza",
  // "Spaghetti",
  // "Tacos",
  // "Teriyaki Chicken",
]);

let yuckyMeals = ref([ ]);


const handleDelete = (index) => {
 yuckyMeals.value.splice(index, 1)
}

watch(yuckyMeals, () => {
  yuckyMeals.value.forEach((value) => {
    console.log(value)
    updatePopupPreview()
  })
})

// const getFlows = computed(() => {
//   // console.log(store.state.previewPopData)
//   return store.state.previewPopData
// })

const updatePopupPreview = () => {
  store.commit("SET_PREVIEW_POPUP_DATA", {
    previewPopData: {
      bgColor: "#8c3937",
      color: "#ffffff",
      popup_inputs: ['Spleet', 'Spleet', 'Spleet']
    }
  })
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px 0;

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
    grid-template-columns: 20% 30% auto;
    column-gap: 50px;
  }
}
</style>
