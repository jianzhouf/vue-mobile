<template>
  <div class="z-input-item">
    <div class="z-input-item-line">
      <div class="z-input-item-title">
        <slot></slot>
      </div>
      <div class="z-input-item-content">
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
        >
      </div>

      <div
        v-show="currentValue!='' && active "
        @click="handleClear"
        style="transform:rotate(45deg)"
      >+</div>
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
    },
    arrow: String
  },
  data() {
    return {
      active: false,
      currentValue: this.value || ""
    };
  },
  computed: {
    isRightArrow: function() {
      return this.arrow == "right";
    }
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
$font-size-input: 17px;
.z-input-item {
  font-size: $font-size-input;
  padding-left: $padding-x;
  background: $background-color;
  color: $text-color-dark;
  &-line {
    padding: $padding-y $padding-x;
    padding-left: 0;
    border-bottom: 1px solid #eee;
    display: flex;
    font-size: $font-size-input;
    align-items: center;
  }
  &-title {
    font-size: $font-size-input;
    min-width: 6rem;
    margin: 0;
    margin-right: 0.5rem;
    bottom: 0;
    line-height: 1;
    color: $text-color-dark;
  }
  &-content {
    flex: 1;
    input {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      appearance: none;
      width: 100%;
      margin: 0;
      padding: 2px 0;
      min-width: 0;
      outline: 0;
      border: 0;
      font-size: $font-size-input;
      color: $text-color-dark;
      line-height: 1;
      box-sizing: border-box;
      &:disabled,
      &:read-only {
        color: $text-color-light;
        background: #fff;
      }
      &::placeholder {
        line-height: 1.2;
      }
    }
  }

  &:last-child .z-input-item-line {
    border-bottom: 0;
  }
}
</style>
