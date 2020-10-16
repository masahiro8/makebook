<template>
  <div class="sys-parallax" :id="'parallax'+id">
    <slot></slot>
  </div>
</template>
<script>
import { parallax } from "../../util/parallax";
import * as _ from "lodash";

export default {
  data: () => {
    return {
      id: _.uniqueId()
    };
  },
  props: {
    zindex: {
      type: Number,
      default: 1
    },
    shift: {
      type: Number,
      default: 20
    },
    speed: {
      type: Number,
      default: 1.0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.disabled) return;
    this.init();
  },
  methods: {
    init() {
      parallax("#parallax" + this.id)(this.zindex, this.shift, this.speed);
    }
  }
};
</script>
<style lang="scss">
.sys-parallax {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: all 0.1s ease-out;
}
</style>