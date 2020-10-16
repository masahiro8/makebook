<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <header class="modal-header">
          <slot name="header">
            <button class="close-button" @click="$emit('close')">
              <Close />
            </button>
          </slot>
        </header>
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Close from "vue-material-design-icons/Close.vue";
export default {
  components: {
    Close,
  },
};
</script>>


<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-window {
    background: #fff;
    border-radius: 32px;
    overflow: hidden;
    max-width: 400px;
  }

  .modal-content {
    padding: 0 36px 24px;
  }

  .modal-header {
    padding: 24px;
    text-align: right;
  }

  .close-button {
    outline: none;
    border: none;
  }
}

// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;

  // モーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// モーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>