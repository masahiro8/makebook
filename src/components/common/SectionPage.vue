<template>
  <div
    class="MAHOUMAKE_SECTION_SECTION_HEIGHT"
    :style="'height:' + winHeight + 'px'"
  >
    <slot></slot>
  </div>
</template>
<script>
/**
 * windowの高さと同じ高さのDOM
 */
export default {
  computed: {
    winHeight() {
      return window.innerHeight;
    },
  },
};
</script>
<style lang="scss" scoped>
.MAHOUMAKE_SECTION_SECTION_HEIGHT {
  position: relative;
  z-index: 1;
}
</style>