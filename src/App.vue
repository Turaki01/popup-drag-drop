<template>
  <div>
    <div v-if="!mobile" class="app">
      <Navigation />
      <div class="app-content">
        <router-view />
      </div>
    </div>

    <div v-else class="mobile-message flex flex-column">
      <h2>Sorry, this app is not supported on Mobile Devices</h2>
      <p>To use this app, please use a computer or Tablet</p>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  data() {
    return {
      mobile: null,
    };
  },
  components: {
    Navigation,
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
    },
  },
  computed: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  background-color: #f8f9fd;
  min-height: 100vh;

  @media (min-width: 900px) {
    flex-direction: row !important;
  }

  .app-content {
    padding: 0 30px;
    flex: 1;
    position: relative;
  }
}

.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fd;
  color: #141625;

  p {
    margin-top: 16px;
  }
}

// utility classes

.flex {
  display: flex;
}

h3 {
  color: #000d26;
}

p {
  font-size: 14px;
  color: #323232;
}

.flex-column {
  flex-direction: column;
}

.item-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.drag-drop-container {
  border: 2px dashed #59bfba;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
}

.drag-element {
  background-color: #fff;
  width: 100%;
  margin-bottom: 10px;
  min-height: 60px;
  padding: 0 20px;
  color: #595959;
  font-size: 14.5px;
  cursor: pointer;
  -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  -moz-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.card-container {
  background-color: #fff;
  min-height: 100vh;
  width: 100%;
  -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  -moz-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.empty-drop-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 350px;
  text-align: center;
  margin: 0 auto;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

// utility classes
</style>
