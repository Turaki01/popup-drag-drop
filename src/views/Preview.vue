<template>
  <div class="preview-container">
    <img src="@/assets/svg/celebration.svg" alt="" />

    <p>Yayy you did it party 🎉 <br /> Preview your popup</p>

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
