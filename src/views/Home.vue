<template>
  <div class="home-container">
    <div class="header">
      <h3>Hello 👋</h3>
      <p>why don&#39;t we build your popup together</p>
    </div>

    <div class="element-grid">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px 0;

  .header {
    margin-bottom: 30px;
  }
   .element-grid {
    display: grid;
    grid-template-columns: 20% 40% auto;
    column-gap: 50px;
  }
}
</style>
