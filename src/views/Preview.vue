<template>
  <div class="preview-container">
    <img src="@/assets/svg/celebration.svg" alt="" />

    <h3>Yayy you did it party 🎉 Preview your popup</h3>

    <div class="button flex">
      <span>Preview Popup</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Preview",
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

  h3 {
    max-width: 250px;
    margin-top: 20px;
    text-align: center;
  }

  img {
    max-width: 200px;
    // margin: 20px auto;
  }
}
</style>
