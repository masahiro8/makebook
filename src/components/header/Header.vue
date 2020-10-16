<template>
  <header :id="'parallax' + id" :style="framestyle">
    <h1 ref="h1" :style="style">
      <div class="inner" ref="inner" :style="innerstyle">
        <ParallaxWrapper :rate="0.1">
          <p class="MAHOU">MAHOU</p>
          <p class="MAKE">MAKE</p>
          <Beta />
        </ParallaxWrapper>
      </div>
    </h1>
    <div>
      <!-- パララックス -->
      <ParallaxWrapper :rate="0.2">
        <div class="message">
          <p>Wake up to Make up,</p>
          <p>Right here Right Now!😂😂</p>
          <p>LIVE VIRTUAL MAKE-UP CAMERA</p>
        </div>
      </ParallaxWrapper>
    </div>
  </header>
</template>
<script>
import { parallaxCallback } from "../../util/parallaxCallback";
import { topCallBack } from "../../util/scrollCallback";
import ParallaxWrapper from "../common/ParallaxWrapper";
import * as _ from "lodash";
import Beta from "./Beta";

export default {
  name: "Header",
  data: () => {
    return {
      id: _.uniqueId(),
      style: "",
      innerstyle: "",
      framestyle: "",
      speedRate: 120, //パララックス速度
      speed: 1 + _.random(6) * (_.random(2) == 1 ? -1 : 1), //速度
    };
  },
  components: {
    ParallaxWrapper,
    Beta,
  },
  mounted() {
    parallaxCallback("#parallax" + this.id)(this.speed, 0, () => {
      const enter = topCallBack(this.$refs.h1, 0);
      this.innerstyle = enter
        ? "transform: translateY(-200px);"
        : "transform: translateY(0);";
    });
  },
};
</script>
<style lang="scss" src="./header.scss" scoped></style>