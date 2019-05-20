<template>
  <div>
    <z-list>
        <z-input-item></z-input-item>
    </z-list>
  </div>
</template>

<script>
import ZList from "@/components/ZList.vue";
import ZListItem from "@/components/ZListItem.vue";
import ZInputItem from "@/components/ZInputItem.vue";

export default {
  components: {
    ZList,
    ZListItem,
    ZInputItem
  }
};
</script>

<style>
</style>
