<template>
  <div class="info">
    <SegmentationTitle title="INFO" />
    <ul class="infoTable">
      <li>
        <div class="title">10/1 MAHOU MAKEを公開しました</div>
      </li>
    </ul>
  </div>
</template>
<script>
import SegmentationTitle from "../common/SegmentationTitle";
export default {
  components: {
    SegmentationTitle,
  },
};
</script>
<style lang="scss">
@import "../../style/config.scss";
.info {
  background-color: black;
  padding: 0 16px;
  padding-top: 24px;
  padding-bottom: 16px;
  position: relative;
  left: 0;
  border-bottom-left-radius: 32px;
  margin: 0 16px;
  box-sizing: border-box;
}
.infoTable {
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    color: $cyan;
    font-size: 18px;
    padding: 8px 0;
    margin: 0;

    .date {
      width: 120px;
      padding: 0 8px;
      box-sizing: border-box;
    }
    .title {
      flex: 1;
    }
  }
}
</style>