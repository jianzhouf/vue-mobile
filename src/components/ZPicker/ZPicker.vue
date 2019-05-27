<template>
  <div class="z-picker" @click.capture="handleClick">
    <z-input-item ref="inputRef" :value="inputValue" arrow="right" :placeholder="placeholder">
      <slot></slot>
    </z-input-item>
    <z-action-sheet ref="actionsheet" :defaultCancel="false">
      <div class="z-picker-header">
        <span @click="cancel">取消</span>
        <span @click="ok">确定</span>
      </div>
      <div class="z-picker-body">
        <z-picker-col
          v-for="(item,index) in data"
          :key="index"
          :list="item"
          :value="value[index]"
          @change="(val)=>handleChange(index,val)"
        ></z-picker-col>
      </div>
    </z-action-sheet>
  </div>
</template>

<script>
import ZPickerCol from "./ZPickerCol";
import ZInputItem from "@/components/ZInputItem.vue";
import ZActionSheet from "@/components/ZActionSheet/ZActionSheet";
export default {
  components: {
    ZActionSheet,
    ZPickerCol,
    ZInputItem
  },
  props: {
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      cols: 3,
      value: [],
      inputValue: "",
      data: [
        [
          { label: "浙江省", value: "1" },
          { label: "北京市", value: "2" },
          { label: "内蒙古的说法", value: "3" },
          { label: "安吉", value: "4" }
        ],
        [
          { label: "浙江省", value: "1" },
          { label: "北京市", value: "2" },
          { label: "内蒙古的说法", value: "3" },
          { label: "安吉", value: "4" }
        ],
        [
          { label: "浙江省", value: "1" },
          { label: "北京市", value: "2" },
          { label: "内蒙古的说法", value: "3" },
          { label: "安吉", value: "4" }
        ]
      ]
    };
  },

  methods: {
    handleClick: function() {
      console.log(this.value);
      this.$refs.actionsheet.show();
    },
    ok: function() {
      this.inputValue = this.value.map(c => c.label).join("");
      this.$refs.actionsheet.hide();
    },
    cancel: function() {
      this.$refs.actionsheet.hide();
    },
    handleChange: function(index, val) {
      this.$set(this.value, index, val);
    }
  }
};
</script>

<style lang="scss" scoped>
.z-picker {
  &-header {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px;
  }
  &-body {
    display: flex;
    background: #f7f7f7;
  }
}
</style>
