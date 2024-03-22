<template lang="pug">
.rgbContainer
  .rgbPanel
    rgb_r.panel
    rgb_g.panel
    rgb_b.panel
  rgb_a.panel

</template>

<script setup>
import rgb_r from './rgb_r.vue'
import rgb_g from './rgb_g.vue'
import rgb_b from './rgb_b.vue'
import rgb_a from './rgb_a.vue'
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
