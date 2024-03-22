<template lang="pug">
.hslContainer
  hsl_h.panel
  hsl_s.panel
  hsl_l.panel
  hsl_a.panel

</template>

<script setup>
import hsl_h from './hsl_h.vue'
import hsl_s from './hsl_s.vue'
import hsl_l from './hsl_l.vue'
import hsl_a from './hsl_a.vue'
</script>

<style scoped>
.hslContainer {
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
