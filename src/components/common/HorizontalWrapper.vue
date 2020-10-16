<template>
  <!-- 画面の高さを設定 -->
  <div :id="'parallax' + id" class="hwrapper">
    <!-- コンポーネント上部 -->
    <div class="marker_top" ref="marker_top"></div>
    <!-- 画面に入ったら位置を固定する -->
    <div
      :id="'wrapper' + id"
      class="scrollWrapper"
      :class="fixed ? 'fixed' : ''"
    >
      <!-- ここがアニメーションする -->
      <div class="inner" ref="inner" :style="innerstyle">
        <slot></slot>
      </div>
    </div>
    <!-- コンポーネント下部 -->
    <div class="marker_bottom" ref="marker_bottom"></div>
  </div>
</template>
<script>
import {
  scrolling,
  topCallBack,
  bottomCallBack,
} from "../../util/scrollCallback";
import * as _ from "lodash";

export default {
  data: () => {
    return {
      id: _.uniqueId(),
      style: "",
      innerstyle: "",
      speed: 1 + _.random(20) * (_.random(2) === 1 ? -1 : 1), //速度
      fixed: false,
      delay: null, //遅延実行
      displayRange: 0.4, //表示範囲マージン幅
    };
  },
  async mounted() {
    const winHeight = window.innerHeight;

    scrolling(() => {
      const enter_top = topCallBack(
        this.$refs.marker_top,
        -winHeight * this.displayRange
      );

      const enter_bottom = bottomCallBack(
        this.$refs.marker_bottom,
        winHeight * (1.0 + this.displayRange)
      );

      const n = winHeight * (1.0 + this.displayRange);

      if (!enter_top && !enter_bottom) {
        //画面内に入った時
        this.innerstyle = `transform: translateY(0);`;
      } else {
        if (enter_top) {
          //画面上へ
          this.innerstyle = `transform: translateY(-${n}px);`;
        }
        if (enter_bottom) {
          //画面下へ
          this.innerstyle = `transform: translateY(${n}px);`;
        }
      }

      //最後に設定された状態を適用
      clearTimeout(this.deplay);
      this.delay = setTimeout(() => {
        this.fixed = !enter_top && !enter_bottom;
      }, 300);
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../style/config.scss";
.hwrapper {
  position: relative;
  z-index: $info_z;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 0 16px;

  .marker_top {
    position: absolute;
    top: 0;
    left: 0;
  }
  .marker_bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .inner {
    flex: 1;
    /* max-width: 800px; */
    width: 100%;
    transition-property: all;
    transition-duration: 800ms;
  }

  .scrollWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &.fixed {
      position: fixed;
      top: 0;
    }
  }
}
</style>

