<template>
  <img class="img" :src="imageSrc" alt />
</template>

<script>
import { imageloader } from "../../util/imageloader";

export default {
  data: () => {
    return {
      imageSrc: null,
    };
  },
  props: {
    src: String,
  },
  computed: {},
  watch: {
    src: {
      immediate: true,
      handler(newValue) {
        imageloader(newValue).then((src) => {
          this.imageSrc = src;
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/config.scss";

.img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>
