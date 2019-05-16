<template>
  <div>
    <z-list title="123">
      <z-list-item arrow="right">
        <router-link to="/actionSheetView">动作面板</router-link>
      </z-list-item>
      <z-list-item arrow="right">
        <router-link to="/listView">List</router-link>
      </z-list-item>
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
  },
  name: "Home"
};
</script>
<style>
</style>

