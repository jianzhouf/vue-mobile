<template>
  <div>
    <ZButton @click="show">show</ZButton>
    <ActionSheet ref="ActionSheet"></ActionSheet>
  </div>
</template>
<script>
import ActionSheet from "@/components/ActionSheet.vue";
import ZButton from "@/components/ZButton.vue";

export default {
  name: "ActionSheetView",
  components: {
    ActionSheet,
    ZButton
  },
  methods: {
    show() {
      this.$refs.ActionSheet.show();
    }
  }
};
</script>
<style>
</style>

