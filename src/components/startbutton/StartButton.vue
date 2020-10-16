<template>
  <div class="StartButtonFrame">
    <button @click="onClick" class="StartButton">
      <img :src="start" alt="" />
    </button>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      start: "https://storage.googleapis.com/mahou_make/Assets/Start.png",
    };
  },
  props: {
    url: String,
  },
  methods: {
    onClick() {
      window.location.href = this.url;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/config.scss";
.StartButtonFrame {
  display: flex;
  justify-content: center;
  align-items: center;
}
.StartButton {
  background-color: $magenta;
  width: 128px;
  height: 128px;
  border-radius: 64px;
  border: 0;
  padding: 24px;
  /* border: 4px solid white; */

  img {
    width: 100%;
  }
}
</style>