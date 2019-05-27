<template>
  <div>
    <z-list>
      <z-picker placeholder="请选择">姓名</z-picker>
    </z-list>
  </div>
</template>

<script>
import ZPicker from "@/components/ZPicker";
import ZList from "@/components/ZList.vue";

export default {
  components: {
    ZPicker,
    ZList
  }
};
</script>

<style>
</style>
