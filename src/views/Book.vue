<template>
  <div class="book">
    <h1 class="heading">MAHOU BOOK</h1>
    <div>
      <div class="header">
        <p class="col-image"></p>
        <p class="col-date">Date</p>
        <p class="col-category">Category</p>
        <p class="col-brand">Brand</p>
        <p class="col-product">Product</p>
        <p class="col-link">link</p>
      </div>
      <ul class="products" id="products">
        <li v-for="(product, index) in products" :key="index" class="product">
          <div class="col-image">
            <div class="image">
              <!-- <img :src="getImage(product.images[0])" /> -->
              <Thumbnail :src="getImage(product.images[0])" />
            </div>
          </div>
          <div class="col-date">{{ editDate(product.updatedate) }}</div>
          <div class="col-category">{{ product.category }}</div>
          <div class="col-brand">{{ getBrandName(product.brand) }}</div>
          <div class="col-product">{{ product.title }}</div>
          <div class="col-link">
            <button
              class="link-button"
              @click="openModal(product.jsonBookName)"
            >
              link
            </button>
          </div>
        </li>
      </ul>
      <div>
        <Popup @close="closeModal" v-if="modal">
          <p>Link URL</p>
          <p class="script">
            https://book.mahoumake.com/?mahou={{ json_book_name }}
          </p>
          <p>埋め込みスクリプト</p>
          <div class="script-group">
            <button class="copy-button" @click="copyToClipboard">
              <ContentCopy :size="20" fillColor="#999" />
            </button>
            <div class="script" id="copyFrom">
              &lt;iframe allow="camera;microphone"
              src="https://book.mahoumake.com/?mahou={{ json_book_name }}"
              frameborder="0" width="100%" height="100%" &gt; &lt;/iframe&gt;
            </div>
          </div>
        </Popup>
      </div>
    </div>
  </div>
</template>
<script>
import * as _ from "lodash";
import { SEGMENTS } from "../constants";
import Thumbnail from "../components/thumbnail/Thumbnail.vue";
import Popup from "../components/popup/Popup.vue";
import ContentCopy from "vue-material-design-icons/ContentCopy.vue";

export default {
  data: () => {
    return {
      SEGMENTS,
      projects: null,
      products: [],
      brands: [],
      images: [],
      modal: false,
      json_book_name: null,
    };
  },
  components: { Thumbnail, Popup, ContentCopy },
  async created() {
    let response = await fetch(
      "https://book.mahoumake.com/books/projects.json"
    );
    this.projects = await response.json();

    this.setProducts();
  },
  methods: {
    setProducts() {
      if (_.isNil(this.projects)) return;

      let items = [];
      _.forEach(SEGMENTS, (segments_value) => {
        let categoryItems = this.projects[segments_value];
        if (_.isNil(categoryItems)) return;

        _.forEach(categoryItems, (value) => {
          let item = _.cloneDeep(value);
          item["category"] = segments_value;
          items.push(item);
        });
      });

      let sortedItems = [];
      if (items.length > 0)
        sortedItems = _.orderBy(items, "updatedate", "desc");
      this.products = sortedItems;
      this.brands = this.projects["brands"];
      this.images = this.projects["images"];
    },
    getImage(id) {
      if (_.isNil(id)) return "";
      const _image = _.find(this.images, ["id", id]);
      //TODO:bookのuploadsから画像を読み込む
      return _image ? `https://lab.backham.biz/uploads${_image.file_path}` : "";
    },
    editDate(date) {
      if (_.isNil(date)) return "";
      return date.substr(0, 10);
    },
    getBrandName(id) {
      if (_.isNil(id)) return "";
      let brand = this.brands[id];
      return brand ? brand["title"] : "";
    },
    openModal(id) {
      this.modal = true;
      this.json_book_name = id;
    },
    closeModal() {
      this.modal = false;
    },
    copyToClipboard() {
      let textVal = document.getElementById("copyFrom").innerHTML;
      textVal = textVal.replace(/&lt;/g, "<");
      textVal = textVal.replace(/&gt;/g, ">");
      alert("コピーされました！");

      //テキストエリアに値をセット
      let copyFrom = document.createElement("textarea");
      copyFrom.textContent = textVal;

      //bodyにテキストエリアを置く
      let bodyElm = document.getElementsByTagName("body")[0];
      bodyElm.appendChild(copyFrom);

      //テキストエリアの値を選択してコピー
      copyFrom.select();
      let retVal = document.execCommand("copy");
      bodyElm.removeChild(copyFrom);
      return retVal;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/config.scss";
.book {
  overflow: hidden;
  box-sizing: border-box;
  max-width: 980px;
  height: 100vh;
  margin: 0 auto;
  background: white;
  text-align: left;
}

.heading {
  padding: 20px;
}
.header {
  display: flex;
  padding: 0 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.products {
  margin: 0;
  padding: 0 20px;
  overflow-y: scroll;
  height: calc(100vh - 110px);
  list-style: none;
}
.product {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 8px 0;
}

.col-image,
.col-date,
.col-category,
.col-brand,
.col-product {
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0 8px;
  font-size: 14px;
}

.col-image {
  flex-basis: 80px;
  width: 80px;
}

.col-date {
  flex-basis: 100px;
  width: 100px;
}

.col-category {
  flex-basis: 120px;
  width: 120px;
}

.col-brand {
  flex-basis: 180px;
  width: 180px;
}

.col-product {
  flex-basis: 360px;
  width: 360px;
}

.script-group {
  position: relative;
}

.script {
  margin-bottom: 16px;
  padding: 8px 10px;
  border: 1px solid #999;
  background: #eee;
}

.link-button {
  background: #eee;
  border-radius: 100px;
  padding: 0 12px;
}

.copy-button {
  position: absolute;
  top: 8px;
  right: 8px;
  outline: none;
  border: none;
}
</style>