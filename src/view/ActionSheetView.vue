<template>
  <div style="padding: 20px;">
    <ZButton @click="show" type="primary">show</ZButton>
  </div>
</template>
<script>
import ZButton from "@/components/ZButton.vue";
import ZActionSheet from "@/components/ZActionSheet/index";
export default {
  name: "ActionSheetView",
  components: {
    ZButton
  },
  methods: {
    show() {
      ZActionSheet.show({
        options: [{title: "哈哈哈",event: ()=>{alert(123)}}]
      })
    }
  }
};
</script>
<style>
</style>

