<template>
  <div class="button-view">
    <ZButton>按钮</ZButton>
    <ZButton disabled>按钮</ZButton>
    <ZButton type="primary">按钮</ZButton>
    <ZButton type="primary" disabled>按钮</ZButton>
    <ZButton type="warning">按钮</ZButton>
    <ZButton type="primary" disabled>按钮</ZButton>
    <ZButton class="z-space" type="primary" inline>按钮</ZButton>
    <ZButton type="warning" inline>按钮</ZButton>
    <br>
    <ZButton class="z-space" type="primary" inline size="small">按钮</ZButton>
    <ZButton type="warning" inline size="small">按钮</ZButton>
  </div>
</template>

<script>
import ZButton from "@/components/ZButton.vue";
export default {
  components: {
    ZButton
  }
};
</script>

<style>
.button-view{
    padding: 1rem;
}
.z-button {
  margin-top: 1rem;
}
.z-space {
  margin-right: 1rem;
}
</style>
