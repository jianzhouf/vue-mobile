<template>
  <div class="z-list-item">
    <div class="z-list-item-line">
      <div class="z-list-item-content">
        <slot></slot>
      </div>
      <div class="z-list-item-extra"></div>
    </div>
  </div>
</template>
<script>
export default {
  //   props: ["title"],
  data() {
    return {};
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
}
.z-list-item:last-child .z-list-item-line{
  border-bottom: 0;
}

</style>

