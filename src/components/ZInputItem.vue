<template>
  <div class="z-input-item">
    <div class="z-input-item-line">
      <div class="z-input-item-title">
        <slot></slot>
      </div>
      <textarea
        v-if="type==='textarea'"
        :type="type"
        :name="name"
        v-model="currentValue"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :rows="rows"
        @change="handleChange"
        class="z-input-item-input"
      ></textarea>
      <input
        v-else
        :type="type"
        :name="name"
        v-model="currentValue"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        @change="handleChange"
        class="z-input-item-input"
      >
      <div
        v-show="currentValue!='' && active "
        @click="handleClear"
        style="transform:rotate(45deg)"
      >+</div>
      <!-- <ZIcon v-if="isRightArrow" type="right"></ZIcon> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      active: false,
      currentValue: this.value || ""
    };
  },
  methods: {
    handleChange: function(event) {
      this.currentValue = event.target.value;
      this.$emit("change", this.currentValue);
    },
    handleClear: function() {
      this.currentValue = "";
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss">
@import "./config.scss";
.z-input-item {
  font-size: $font-size;
  padding-left: $padding-x;
  background: $background-color;
  color: $text-color-dark;
  &-line {
    padding: $padding-y $padding-x;
    padding-left: 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }
  &-title {
    align-self: flex-start;
    min-width: 6rem;
    margin-right: 0.5rem;
    color: $text-color-dark;
  }
  &-input {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    flex: auto;
    outline: 0;
    border: 0;
    font-size: $font-size;
    color: $text-color-dark;
    &:disabled,
    &:read-only {
      color: $text-color-light;
    }
  }
  &:last-child .z-input-item-line {
    border-bottom: 0;
  }
}
</style>
