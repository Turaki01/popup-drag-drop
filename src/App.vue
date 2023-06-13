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

.element-preview-container {
  width: 550px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  .element-border {
    width: 90%;
    height: 90%;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.form-control {
  p {
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    height: 40px;
    width: 100%;
    padding: 0 10px;
    outline: none;
  }

  button {
    height: 40px;
    width: 100%;
    padding: 0 20px;
  }
}

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

.justify-between {
  justify-content: space-between;
}

.drag-drop-container {
  border: 2px dashed #000000;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
}

.element-button {
  height: 50px !important;
  background-color: #1a1a1a;
  font-weight: 600;
  font-size: 17px;
}

.full-width {
  width: 100%;
}

.check-input-container {
display: flex;
margin-top: 10px;
align-items: center;
  p {
    font-size: 14px;
    margin-left: 10px;
  }

  .check-input {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #ACACAC;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .inner-check {
      background-color: #7661e0;
      width: 13px;
      height: 13px;
      border-radius: 5px;
    }
  }
}

.color-picker {
  margin-top: 14px;
  p {
    color: #4c4c4c;
    font-size: 15px;
    margin-bottom: 10px;
  }

  input {
    width: 50px;
    height: 50px;
  }
}

.drag-element-container-el {
  max-width: 380px;
  margin: 20px auto;
  cursor: pointer;
}

.drag-element {
  width: 100%;
  margin-bottom: 10px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  -moz-box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  min-height: 60px;
  padding: 20px 20px;
  color: #595959;
  font-size: 14.5px;
  cursor: pointer;
  position: relative;
}

.fa-star {
  font-size: 22px;
  color: #cb3735;
}

.card-container {
  background-color: #fff;
  min-height: 100vh;
  padding: 30px;
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


button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  color: #fff;
}

// animated invoice
.toolkit-enter-active,
.toolkit-leave-active {
  transition: 0.8s ease all;
}

.toolkit-enter-from,
.toolkit-leave-to {
  transform: translateX(-700px);
}

// utility classes
</style>
