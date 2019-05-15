<template>
  <div v-if="isShown" class="z-action-sheet">
    <div class="z-mask" v-if="isShown"></div>
    <div class="z-action-sheet__panel">
      <ZButton @click="hide">取消</ZButton>
    </div>
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
      isShown: false
    };
  },
  methods: {
    show() {
      this.isShown = true;
    },
    hide() {
      this.isShown = false;
    }
  },
  created() {}
};
</script>

<style lang="postcss" scoped>
.z-mask {
  position: absolute;
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
  background: #fff;
}
</style>


