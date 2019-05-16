<template>
  <button
    class="z-button"
    :class="{noBorder: noBorder, primary:type=='primary'  }"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "z-button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    }
  }
};
</script>

<style lang="postcss" scoped>
.z-button {
  box-sizing: border-box;
  font-size: 18px;
  width: 100%;
  background: #fff;
  color: #333;
  padding: 10px 0;
  outline: none;
  border: 1px solid #eee;
}
.z-button:disabled{
  opacity: 0.8;
}
.noBorder {
  border: 0;
}
.primary {
  color: #fff;
  background-color: #108ee9;
  border: 0;
  border-radius: 0.5rem;
}
</style>


