<template>
  <div :id="'parallax'+id">
    <div class="square" :style="matrix"></div>
  </div>
</template>

<script>
import { parallaxCallback } from "../../util/parallaxCallback";
import * as _ from "lodash";

const colors = ["#FF50C3", "#FEF400", "#50FFEA", "#000000"];
export default {
  name: "Square",
  data: () => {
    return {
      id: _.uniqueId(),
      rotate: 45,
      matrix: "",
      side: _.random(2) == 1 ? "left" : "right", //左側か右側
      top: _.random(document.body.clientHeight + 100), //縦位置をランダムに
      scaleY: 0.1 + Math.random() * 1.5, //ラインの高さ
      speed: 1 + _.random(5) * (_.random(2) == 1 ? -1 : 1), //スクロールで拡大する速度
      color: colors[_.random(colors.length) - 1], //色
      baseScaleX: 2.0 + Math.random() * 2 //ベースの幅
    };
  },
  props: {},
  components: {},
  mounted() {
    parallaxCallback("#parallax" + this.id)(this.speed, this.top, move => {
      if (!move) return;

      const _side = this.side == "left" ? "left:-100px" : "right:-100px";
      const _transform = `transform:rotate(-45deg) scaleX(${this.baseScaleX +
        move}) scaleY(${this.scaleY});`;
      const _top = `top:${this.top}px;`;
      const _background = `background-color:${this.color};`;
      this.matrix = `${_transform} ${_top} ${_background} ${_side}`;
    });
  }
};
</script>

<style lang="scss" scoped>
.square {
  background-color: transparent;
  width: 100px;
  height: 100px;
  transform-origin: center center;
  position: absolute;
  right: -100px;
  background-repeat: repeat;
}
</style>
