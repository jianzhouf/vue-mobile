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
     <z-list title="数据录入">
      <z-list-item arrow="right">
        <router-link to="/buttonView">按钮</router-link>
      </z-list-item>
      <z-list-item arrow="right">
        <router-link to="/inputItemView">输入框</router-link>
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

