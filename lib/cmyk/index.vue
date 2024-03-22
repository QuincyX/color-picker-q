<template lang="pug">
.rgbContainer
  .rgbPanel
    cmyk_c.panel
    cmyk_m.panel
    cmyk_y.panel
    cmyk_k.panel
  cmyk_a.panel

</template>

<script setup>
import cmyk_a from './cmyk_a.vue'
import cmyk_c from './cmyk_c.vue'
import cmyk_m from './cmyk_m.vue'
import cmyk_y from './cmyk_y.vue'
import cmyk_k from './cmyk_k.vue'


</script>

<style scoped>
.rgbContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  --linerWidth: 40px;
  .rgbPanel {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 0;
  }
}
.panel {
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
