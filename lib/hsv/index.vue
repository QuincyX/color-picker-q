<template lang="pug">
.hsvContainer
  div
    hsv_sv.panel
    hsv_h.panel
  hsv_a.panel

</template>

<script setup>
import hsv_h from './hsv_h.vue'
import hsv_sv from './hsv_sv.vue'
import hsv_a from './hsv_a.vue'
</script>

<style scoped>
.hsvContainer {
  display: flex;
  flex-wrap: wrap;
}
.panel {
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
