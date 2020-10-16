<template>
  <div :id="'parallax' + id" class="lipframe" :style="framestyle">
    <img class="lip" :src="lipPath" :style="style" />
  </div>
</template>
<script>
import { parallaxCallback } from "../../util/parallaxCallback";
import * as _ from "lodash";
export default {
  data: () => {
    return {
      lipPath: "https://storage.googleapis.com/mahou_make/Assets/Lip.png",
      id: _.uniqueId(),
      style: "",
      framestyle: "",
      move: 0,
      top: _.random(document.body.clientHeight + 100), //縦位置をランダムに
      posx: _.random(document.body.clientWidth), //初期値
      rot: _.random(360), //回転初期値
      scale: 0.5 + Math.random() * 1.0, //ラインの高さ
      speed: 1 + _.random(2) * (_.random(2) == 1 ? -1 : 1), //スクロールで拡大する速度
    };
  },
  mounted() {
    this.framestyle = `top:${this.top}px;left:${this.posx}px;`;

    parallaxCallback("#parallax" + this.id)(this.speed, this.top, (move) => {
      if (!move) return;
      this.move = move;
      this.moving();
    });

    setInterval(() => {
      this.move = this.move + 0.01;
      this.moving();
    }, 100);
  },
  methods: {
    moving() {
      const _transform = `transform: rotate(${
        this.move * 90 + this.rot
      }deg) scale(${this.scale});`;
      this.style = `${_transform}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.lipframe {
  position: absolute;
  z-index: 10;
}
.lip {
  width: 32px;
  transform-origin: center center;
}
</style>
