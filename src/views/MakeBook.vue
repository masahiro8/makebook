<template>
  <div class="MAHOU_BOOK">
    <Header />
    <!-- 0ページ目 -->
    <SectionAdjustDoc class="MAHOU_BOOK_SECTION_BLOCK">
      <div class="MAHOU_BOOK_SECTION">
        <div class="MAHOU_TEXT">
          <p>
            はじめに<a href="https://mahoumake.com/book" target="_blank"
              >MAHOUBOOK</a
            >を開きます。
          </p>
          <br />
          <p>スクロールして表示したいECサイトやWEBサイトにコスメを探します</p>
          <br />
          <p>表示したいコスメの「LINK」ボタンをクリックします</p>
        </div>
        <div class="MAHOU_IMAGE">
          <div class="MAHOU_VIDEO">
            <video
              controls
              muted
              autoplay
              playinline
              loop
              src="https://storage.googleapis.com/mahou_make/Assets/mv1_32.mp4"
            ></video>
          </div>
          <div class="MAHOU_VIDEO">
            <video
              controls
              muted
              autoplay
              playinline
              loop
              src="https://storage.googleapis.com/mahou_make/Assets/mv2_32.mp4"
            ></video>
          </div>
        </div>
      </div>
    </SectionAdjustDoc>
    <!-- 1ページ目 -->
    <SectionAdjustDoc class="MAHOU_BOOK_SECTION_BLOCK">
      <div class="MAHOU_BOOK_SECTION">
        <div class="MAHOU_TEXT">
          <p>
            はじめに<a href="https://mahoumake.com/book" target="_blank"
              >MAHOUBOOK</a
            >を開きます。
          </p>
          <br />
          <p>スクロールして表示したいECサイトやWEBサイトにコスメを探します</p>
          <br />
          <p>表示したいコスメの「LINK」ボタンをクリックします</p>
        </div>
        <div class="MAHOU_IMAGE">
          <img
            src="https://storage.googleapis.com/mahou_make/Assets/makebook_1.png"
            alt=""
          />
        </div>
      </div>
    </SectionAdjustDoc>
    <!-- ２ページ目 -->
    <SectionAdjustDoc class="MAHOU_BOOK_SECTION_BLOCK">
      <div class="MAHOU_BOOK_SECTION">
        <div class="MAHOU_TEXT">
          <p>ポップアップが開きます</p>
          <br />
          <p>
            スクリプト欄の右上にあるアイコンをクリックすると、スクリプトがコピーされます
          </p>
          <br />
        </div>
        <div class="MAHOU_IMAGE">
          <img
            src="https://storage.googleapis.com/mahou_make/Assets/makebook_2.png"
            alt=""
          />
        </div>
      </div>
    </SectionAdjustDoc>
    <!-- 3ページ目 -->
    <SectionAdjustDoc class="MAHOU_BOOK_SECTION_BLOCK">
      <div class="MAHOU_BOOK_SECTION">
        <div class="MAHOU_TEXT">
          <p>ECサイトWEBサイトのHTMLの表示したいところに</p>
          <br />
          <p>スクリプトをペーストするだけ</p>
        </div>
        <div class="MAHOU_IMAGE">
          <img
            src="https://storage.googleapis.com/mahou_make/Assets/makebook_3.png"
            alt=""
          />
        </div>
      </div>
    </SectionAdjustDoc>
    <SectionAdjustDoc>
      <div class="MAHOU_BOOK_SECTION">
        <div class="MAHOU_TEXT">
          <p>MAHOU BOOKを入れたページを開くと</p>
          <br />
          <p>こんな感じで使えるようになります。</p>
        </div>
        <div class="MAHOU_IMAGE">
          <div class="MAHOU_PREVIEW">
            <iframe
              allow="camera;microphone"
              src="https://book.mahoumake.com/?mahou=1601603498179949"
              frameborder="0"
              width="100%"
              height="100%"
            >
            </iframe>
          </div>
        </div>
      </div>
    </SectionAdjustDoc>
    <!-- 装飾 -->
    <Square v-for="index in squares" :key="index" />
  </div>
</template>
<script>
import Header from "../components/header/HeaderMakeBook";
import Square from "../components/square/Square";
import ParallaxWrapper from "../components/common/ParallaxWrapper";
import SectionAdjustDoc from "../components/common/SectionAdjustDocs";
export default {
  data: () => {
    return {
      squares: [],
      docYScale: 5,
    };
  },
  components: {
    Header,
    Square,
    SectionAdjustDoc,
    ParallaxWrapper,
  },
  mounted() {
    this.squares = Array(200);
  },
  computed: {
    winHeight() {
      return window.innerHeight;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/config.scss";

.MAHOU_BOOK {
  height: 5000px;
  background-color: #50FFEA;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 6000px;
  }
}

.MAHOU_BOOK_SECTION {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .MAHOU_IMAGE {
    order: 2;
  }
  .MAHOU_TEXT {
    order: 1;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
}

.MAHOU_BOOK_SECTION_BLOCK {
  @media screen and (max-width: 800px) {
    margin-bottom: 96px;
    &:nth-child(odd) {
      .MAHOU_IMAGE {
        order: 2;
      }
      .MAHOU_TEXT {
        order: 1;
      }
    }
  }
}

.MAHOU_IMAGE {
  flex: 1.5;
  padding: 32px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 32px;
    overflow: hidden;
  }
}

.MAHOU_TEXT {
  flex: 1;
  padding: 32px;
  p {
    color: white;
    background-color: black;
    font-size: 24px;
    font-weight: 800;
    text-align: left;
    padding: 0 16px;
    position: relative;
    margin-bottom: 8px;
    display: inline-block;
    &:nth-child(4n + 1) {
      left: -16px;
    }
    &:nth-child(4n + 2) {
      left: 16px;
    }

    a {
      padding: 8px 0;
      color: $magenta;
    }
  }
}

.MAHOU_PREVIEW {
  width: 240px;
  height: 460px;
}
.MAHOU_VIDEO {
  height: 640px;
  video {
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 440px;
  }
}
</style>