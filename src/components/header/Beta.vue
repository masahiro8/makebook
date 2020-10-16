<template>
  <div class="beta">
    <img :src="img" alt="" />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      img: "https://storage.googleapis.com/mahou_make/Assets/Beta.png",
    };
  },
};
</script>
<style lang="scss" scoped>
.beta {
  position: relative;
  text-align: center;
  img {
    width: 72px;
    /* position: absolute;
    bottom: 0; */
    /* transform: rotate(-10deg); */
  }
}
</style>