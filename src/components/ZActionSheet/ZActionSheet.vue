<template>
  <div class="z-action-sheet">
    <div class="z-mask" v-if="visible" @click="maskClosable&&hide()"></div>
    <transition name="fade">
      <div v-if="visible" class="z-action-sheet__panel">
        <ZButton
          noBorder
          v-for="item in options"
          :key="item.title"
          @click="item.event&&item.event($event)"
        >{{item.title}}</ZButton>
        <ZButton noBorder style="margin-top: 1rem" @click="hide">取消</ZButton>
      </div>
    </transition>
  </div>
</template>

<script>
import ZButton from "@/components/ZButton.vue";
export default {
  name: "ActionSheet",
  components: {
    ZButton
  },
  data() {
    return {
      visible: false,
      maskClosable: true,
      options: [],
      top: 0
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  },
  watch: {
    visible: function(val) {
      if (val) {
        this.top =
        document.body.scrollTop || document.documentElement.scrollTop;
        document.body.style.position = "fixed";
        document.body.style.top = -this.top + "px";
      } else {
        document.body.style.position = "";
        document.documentElement.scrollTop = document.body.scrollTop = this.top;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.z-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
}
.z-action-sheet__panel {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f7f7f7;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(100%);
}
</style>


