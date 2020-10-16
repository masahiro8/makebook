<template>
  <div class="ballonWrapper">
    <div class="balloon anim">
      <div class="text">{{ message }}</div>
      <div class="triangle"></div>
    </div>
    <div class="wrap">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: String,
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/config.scss";
.balloon {
  padding: 16px;
  display: inline-block;
  background-color: $yellow;

  .text {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.2em;
    color: black;
  }
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 20px 0 20px;
  border-color: $yellow transparent transparent transparent;
}

.anim {
  position: relative;
  top: -30px;
  animation-name: balloon_anim;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1s;
}

@keyframes balloon_anim {
  0% {
    transform: translate(0, 0px);
  }

  100% {
    transform: translate(0, -15px) scale(1.1);
  }
}
</style>