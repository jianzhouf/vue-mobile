<template>
  <div class="z-list-item">
    <div class="z-list-item-line">
      <div class="z-list-item-content">
        <slot></slot>
      </div>
      <div class="z-list-item-extra">{{extra}}</div>
      <ZIcon v-if="isRightArrow" type="right"></ZIcon>
    </div>
  </div>
</template>
<script>
import ZIcon from "@/components/ZIcon.vue";
export default {
  components: {
    ZIcon
  },
  props: {
    arrow: String,
    extra: String
  },
  data() {
    return {};
  },
  computed: {
    isRightArrow: function() {
      return this.arrow == "right";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./config.scss";
.z-list-item {
  font-size: $font-size;
  padding-left: $padding-x;
  background: $background-color;
  color: $text-color-dark;
}
.z-list-item-line {
  padding: $padding-y $padding-x;
  padding-left: 0;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
}
.z-list-item-content {
  flex: auto;
}
.z-list-item:last-child .z-list-item-line {
  border-bottom: 0;
}
</style>

