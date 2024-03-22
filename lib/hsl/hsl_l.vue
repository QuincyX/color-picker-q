<template lang="pug">
Liner(v-model="hsl.l" toward="top" :scale="100" :linerLength="config.circleSize")
  .lightness(:style="lightnessStyle")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'

const { hsl, config } = inject(ColorInjectionKey)

const lightnessStyle = computed(() => {
  return {
    background: `linear-gradient(to top, hsl(${hsl.value.h}, 100%, 0%), hsl(${hsl.value.h}, 100%, 50%),  hsl(${hsl.value.h}, 100%, 100%)`
  }
})
</script>

<style scoped>
.lightness {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
