<template>
  <div class="images" ref="images">
    <SegmentationTitle title="DESIGN" class="title" />
    <!-- ここにスワイプを入れる -->
    <Swiper class="imagesTable" ref="swiper" :options="swiperOption">
      <SwiperSlide>
        <ImageCell />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCell />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCell />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>
<script>
import SegmentationTitle from "../common/SegmentationTitle";
import ImageCell from "./ImageCell";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  data: () => {
    return {
      swiperOption: {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 27,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {
    SegmentationTitle,
    ImageCell,
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/config.scss";
.images {
  position: relative;
}

.title {
  left: 50%;
  transform: translateX(-100%);
}

.images >>> .swiper-container {
  padding-bottom: 36px;
  width: 894px;
}

.images >>> .swiper-pagination {
  bottom: 0;
}

.images >>> .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  margin: 5px;
  border: 1px solid #000;
  background-color: #fff;
  opacity: 1;
}

.images >>> .swiper-pagination-bullet-active {
  background-color: #FF50C3;
}
</style>