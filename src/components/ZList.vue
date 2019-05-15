<template>
  <div class="z-list">
    <div v-if="title" class="z-list-header">{{title}}</div>
    <div class="z-list-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  }
};
</script>
<style lang="postcss" scoped>
.z-list {
  text-align: left;
}
.z-list-body::before {
    content: "";
    display: block;
    border-top: 1px solid #eee;
}
.z-list-body::after {
    content: "";
    display: block;
    border-top: 1px solid #eee;
}
.z-list .z-list-header {
  font-size: 1.4rem;
  color: rgb(136, 136, 136);
  width: 100%;
  box-sizing: border-box;
  padding: 15px 15px 9px;
}

</style>

