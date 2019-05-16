<template>
  <div class="z-list-item">
    <div class="z-list-item-line">
      <div class="z-list-item-content">
        <slot></slot>
      </div>
      <div class="z-list-item-extra"></div>
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
    arrow: String
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
<style lang="postcss" scoped>
.z-list-item {
  font-size: 1.6rem;
  padding-left: 1.4rem;
  background: #fff;
  color: #333;
}
.z-list-item-line {
  padding: 1rem 1.4rem;
  padding-left: 0;
  border-bottom: 1px solid #eee;
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

