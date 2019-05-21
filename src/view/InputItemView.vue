<template>
  <div class="input-item-view">
    <z-list>
      <z-input-item placeholder="请输入" v-model="aaa">哈哈哈</z-input-item>
      <z-input-item type="password" placeholder="请输入" value="789">哈哈哈</z-input-item>
      <z-input-item type="number" placeholder="请输入" value="789">哈哈哈</z-input-item>

      <z-input-item disabled placeholder="请输入" value="456">哈哈哈</z-input-item>
      <z-input-item readonly placeholder="请输入" value="123">哈哈哈</z-input-item>
      <z-input-item type="textarea" placeholder="请输入" v-model="aaa">哈哈哈</z-input-item>

    </z-list>
    <z-button @click="handleClick">获取</z-button>
    <z-button @click="aaa='12313'">重置</z-button>
  </div>
</template>

<script>
import ZList from "@/components/ZList.vue";
import ZInputItem from "@/components/ZInputItem.vue";
import ZButton from "@/components/ZButton.vue";


export default {
  components: {
    ZList,
    ZInputItem,
    ZButton
  },
  data() {
    return {
      aaa: ""
    };
  },
  methods: {
    handlechange: function() {
      // console.log(value);
    },
    handleClick:function (){
      // console.log(this.aaa);
    },
    handleinput: function (){
      // console.log(value);
    }
  }
};
</script>

<style>
.input-item-view {
  padding-top: 20px;
}
</style>
