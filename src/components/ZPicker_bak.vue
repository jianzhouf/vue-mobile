<template>
  <div class="z-picker" @click="handleClick">
    <slot></slot>
    <z-action-sheet :visible="visible" :defaultCancel="false">
      <z-picker-view></z-picker-view>
    </z-action-sheet>
  </div>
</template>

<script>
import ZPickerView from "./ZPickerView";
import ZActionSheet from "./ZActionSheet/ZActionSheet";
export default {
  data() {
    return {
      visible: false
    };
  },
  components: {
    ZActionSheet,
    ZPickerView
  },
  methods: {
    handleClick: function() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style>
</style>
