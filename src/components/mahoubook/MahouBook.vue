<template>
  <a class="mahou-book" href="https://mahoumake.com/book">
    <div class="image anim">
      <img :src="img" alt="" />
    </div>
    <div class="name anim">Open MAHOU BOOK!</div>
  </a>
</template>
<script>
export default {
  data: () => {
    return {
      img: "https://storage.googleapis.com/mahou_make/Assets/mahoubook.png",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/config.scss";
.mahou-book {
  text-decoration: none;
}

.anim {
  animation-name: vrmonkey_anim;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1s;
}
@keyframes vrmonkey_anim {
  0% {
    transform: translate(0, 0px);
  }

  100% {
    transform: scale(1.02);
  }
}
.name {
  font-weight: 600;
  text-decoration: none;
  color: $magenta;
}
.image {
  width: 240px;
  img {
    width: 100%;
  }
}
</style>