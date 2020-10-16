<template>
  <div class="home">
    <Header />
    <HWrapper>
      <Balloon message="Try!">
        <StartButton
          url="https://app.mahoumake.com/?utm_source=lp&utm_medium=referral&utm_campaign=lp"
        />
      </Balloon>
    </HWrapper>
    <HWrapper>
      <!-- <Vrmonkey /> -->
      <MahouBook />
    </HWrapper>
    <!-- ここから背景 -->
    <div>
      <Square v-for="index in squares" :key="index" />
      <Lip v-for="index in lips" :key="index" />
      <Casset v-for="index in cassets" :key="index" />
    </div>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import HWrapper from "../components/common/HorizontalWrapper";
import Square from "../components/square/Square";
import Lip from "../components/lip/Lip.vue";
import Casset from "../components/casset/Casset";
import Balloon from "../components/balloon/Balloon";
import StartButton from "../components/startbutton/StartButton";
// import Vrmonkey from "../components/vrmonkey/Vrmonkey";
import MahouBook from "../components/mahoubook/MahouBook";

export default {
  data: () => {
    return {
      squares: [],
      lips: [],
      cassets: [],
    };
  },
  components: {
    Header,
    HWrapper,
    Square,
    Lip,
    Casset,
    Balloon,
    StartButton,
    // Vrmonkey,
    MahouBook,
  },
  mounted() {
    this.squares = Array(200);
    this.lips = Array(10);
    this.cassets = Array(10);
  },
};
</script>
<style lang="scss" scoped>
@import "../style/config.scss";
.home {
  height: 2000px;
  background-color: #50FFEA;
  overflow: hidden;
  position: relative;
}
</style>