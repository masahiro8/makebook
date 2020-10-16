<template>
  <div :id="'parallax' + id" class="Casset" :style="framestyle">
    <img class="reel1" :src="Reel1" alt />
    <img class="reel2" :src="Reel2" alt />
    <img class="cover" :src="Casset" alt />
  </div>
</template>
<script>
import { parallaxCallback } from "../../util/parallaxCallback";
import * as _ from "lodash";
export default {
  data: () => {
    return {
      Casset: "https://storage.googleapis.com/mahou_make/Assets/Casset.png",
      Reel1: "https://storage.googleapis.com/mahou_make/Assets/Reel1.png",
      Reel2: "https://storage.googleapis.com/mahou_make/Assets/Reel2.png",
      move: 0,
      id: _.uniqueId() + 1000,
      style: "",
      framestyle: "",
      top: _.random(document.body.clientHeight + 100), //縦位置をランダムに
      posx: _.random(document.body.clientWidth / 2) * -1, //初期値
      scale: 0.3 + Math.random() * 0.8, //ラインの高さ
      speed: 1 + _.random(10) * (_.random(2) == 1 ? -1 : 1), //スクロールで拡大する速度
    };
  },
  mounted() {
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
      const _transform = `left:${this.posx}px;top:${
        this.top
      }px;transform:scale(${this.scale}) rotate(-45deg) translateX(${
        this.move * 100
      }px)`;
      this.framestyle = `${_transform}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.Casset {
  position: absolute;
  width: 310px;
  height: 180px;
  left: 50%;
  z-index: 10;
  transform: rotate(-45deg);

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .reel1 {
    position: absolute;
    width: 143px;
    height: 143px;
    top: 4px;
    left: 2px;
    z-index: 1;
    transform-origin: center center;
    animation: spin 2s linear infinite;
  }

  .reel2 {
    position: absolute;
    width: 128px;
    height: 128px;
    top: 13px;
    right: 9px;
    z-index: 1;
    transform-origin: center center;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
