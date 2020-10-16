<template>
  <div class="logo">
    <Parallax :zindex="1" :shift="-20" :speed="100" :disabled="false">
      <img src="../assets/vrmonkey.png">
    </Parallax>
  </div>
</template>

<script>
import Parallax from "./parallax/Parallax";
export default {
  name: "Scroll",
  props: {},
  components: {
    Parallax
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo {
  height: 300px;
  overflow: hidden;
  img {
    height: 800px;
  }
}
</style>
