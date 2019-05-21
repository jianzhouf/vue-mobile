<template>
  <div>
    <div style="margin-top: 800px;display:flex;">
      <div>123</div>
      <div>123</div>
    </div>
  
    <ZButton style="margin-bottom: 800px;" @click="show" type="primary">show</ZButton>
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
body{
  width: 100%;
}
</style>

