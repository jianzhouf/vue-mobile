<template>
  <div>
    <z-list title="123">
        <z-list-item arrow="right">发放的是</z-list-item>
        <z-list-item>发放的是</z-list-item>
        <z-list-item>发放的是</z-list-item>
    </z-list>
  </div>
</template>
<script>
import ZList from "@/components/ZList.vue";
import ZListItem from "@/components/ZListItem.vue";

export default {
  components: {
    ZList,
    ZListItem
  }
};
</script>
<style>
</style>
