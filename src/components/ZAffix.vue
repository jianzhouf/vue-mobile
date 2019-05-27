<template>
  <div class="z-affix" ref="affixStatic">
    <div class="z-affix" ref="affixFiexd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const TRIGGER_EVENTS = [
  "resize",
  "scroll",
  "touchstart",
  "touchmove",
  "touchend",
  "pageshow",
  "load"
];
export default {
  props: {
    target
  },
  data() {
    return {};
  },
  watch: {
    target: function(val) {
      const target = val || document.body;
      setTimeout(() => {
        const affixFiexd = this.$refs.affixFiexd;
        const affixStatic = this.$refs.affixStatic;
        const rect = affixFiexd.getBoundingClientRect();
        const t = target.scrollTop || document.documentElement.scrollTop;
        const rectTop = rect.top + t;
        console.log(rect);
        TRIGGER_EVENTS.forEach(evetName => {
          document.addEventListener(evetName, e => {
            window.requestAnimationFrame(() => {
              const t = target.scrollTop || document.documentElement.scrollTop;
              console.log(t, rectTop);
              if (t > rectTop - 15) {
                console.log(rect);
                affixFiexd.style.position = "fixed";
                affixFiexd.style.top = 0;
                affixFiexd.style.width = rect.width + "px";
                affixFiexd.style.height = rect.height + "px";
                affixStatic.style.width = rect.width + "px";
                affixStatic.style.height = rect.height + "px";
              } else {
                affixFiexd.style.position = "";
              }
            });
          });
        });
      });
    }
  },
  created() {}
};
</script>

<style scoped>
.z-affix {
}
</style>
