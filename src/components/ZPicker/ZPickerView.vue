<template>
  <div>
    <div class="z-picker-view">
      <div class="z-picker-view-col">
        <div class="z-picker-view-col-indicator"></div>
        <div ref="aaa" class="z-picker-view-col-content">
          <div
            v-for="(item,index) in list"
            :key="item.label"
            :class="{'z-picker-view-col-item': true, 'active':index*30 == -deltaTranslateY }"
          >{{item.label}}</div>
        </div>
      </div>
      <div class="z-picker-view-col">
        <div class="z-picker-view-col-indicator"></div>
        <div ref="bbb" class="z-picker-view-col-content">
          <div
            v-for="(item,index) in list"
            :key="item.label"
            :class="{'z-picker-view-col-item': true, 'active':index*30 == -deltaTranslateY }"
          >{{item.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { label: "浙江省", value: "1" },
        { label: "北京市", value: "1" },
        { label: "内蒙古的说法", value: "1" },
        { label: "安吉", value: "1" }
      ],
      deltaTranslateY: 0
    };
  },
  created() {
    setTimeout(() => {
      const target = this.$refs.aaa;
      let touchStartPageY,
        deltaTranslateY = 0;
      let elasticityHeight = 100;
      let paddingTop = 100;
      let boundaryTop = 0;
      let boundaryBottom;
      const rect = target.getBoundingClientRect();
      boundaryBottom = -rect.height + paddingTop * 2 + 30;
      console.log(boundaryBottom);
      target.addEventListener("touchstart", e => {
        const touch = e.targetTouches[0];
        touchStartPageY = touch.pageY;
      });

      target.addEventListener("touchmove", e => {
        e.preventDefault();
        const touch = e.targetTouches[0];
        //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
        const endY = touch.pageY;
        if (deltaTranslateY < elasticityHeight) {
          deltaTranslateY = deltaTranslateY + endY - touchStartPageY;
        }
        target.style.transform = `translateY(${deltaTranslateY}px)`;
        touchStartPageY = endY;
      });
      target.addEventListener("touchend", e => {
        if (deltaTranslateY > boundaryTop) {
          deltaTranslateY = 0;
        } else if (deltaTranslateY < boundaryBottom) {
          deltaTranslateY = boundaryBottom;
        } else {
          const abs = Math.abs(deltaTranslateY);
          const occupy = abs % 30;
          let n = Math.floor(abs / 30);
          if (occupy > 4) {
            n = n + 1;
          }
          deltaTranslateY = -n * 30;
        }
        this.deltaTranslateY = deltaTranslateY;
        target.style.transform = `translateY(${deltaTranslateY}px)`;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.z-picker {
  &-view {
    background: #fff;
    display: flex;
    &-col {
      flex: 1;
      position: relative;
      height: 230px;
      overflow: hidden;
      &-indicator {
        position: absolute;
        top: 100px;
        width: 100%;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #f7f7f7;
        height: 28px;
      }
      &-content {
        padding: 100px 0;
        transform: translateY(0px);
        transition: all 0.2s linear;
      }
      &-item {
        line-height: 30px;
        text-align: center;
        color: #666;
        &.active {
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
