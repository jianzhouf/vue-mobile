<template>
  <button
    class="z-button"
    :class="classObject"
    :disabled="disabled"
    :inline="inline"
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
    inline: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    size: {
      type: String // small
    }
  },
  computed: {
    classObject: function() {
      return {
        "z-button-primary": this.type === "primary",
        "z-button-warning": this.type === "warning",
        "z-button-inline": this.inline,
        "z-button-small": this.size === "small",
        "z-button-radius": true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./config.scss";
.z-button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: block;
  box-sizing: border-box;
  font-size: $font-size;
  width: 100%;
  background: $background-color;
  color: $text-color;
  padding: $padding-y $padding-x;
  outline: none;
  border: 0;
  border-radius: $border-radius;

  &:disabled {
    opacity: $opactiy-light;
  }
  &-primary {
    color: $text-color-white;
    background-color: $primary-color;
  }
  &-warning {
    color: $text-color-white;
    background-color: $warning-color;
  }
  &-inline {
    display: inline-block;
    width: auto;
  }
  &-small {
    padding: $padding-y-small $padding-x-small;
    font-size: $font-size-small;
  }
}
</style>


