<template>
  <div class="navigation flex flex-column justify-center">
    <router-link  to="/">
    <img src="../assets/png/logo.png" alt="" />
  </router-link>
  </div>
</template>
<script>
export default {
  name: "Navigation",
};
</script>
<style lang="scss" scoped>
.navigation {
  background-color: #fff;
  height: 58px;
  padding: 0 20px;

  img {
    width: 130px
  }
}
</style>
