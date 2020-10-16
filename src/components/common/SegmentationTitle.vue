<template>
  <div class="title">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/config.scss";
.title {
  background-color: $magenta;
  display: inline-block;
  height: 24px;
  padding: 4px 8px;
  z-index: 100;
  position: absolute;
  left: 0;
  top: -8px;
  text-align: center;
  min-width: 100px;
  p {
    color: white;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 8px;
    height: auto;
    padding: 0;
    margin: 0;
  }
}
</style>
