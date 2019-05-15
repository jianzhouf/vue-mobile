<template>
  <button class="z-button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "z-button",
  components: {},
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="postcss" scoped>
.z-button {
  font-size: 18px;
  width: 100vw;
  background: #fff;
  color: #333;
  border: 0;
  padding: 10px 0;
  outline: none;
}
</style>


