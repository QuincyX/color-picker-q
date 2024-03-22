<template lang="pug">
Liner(v-model="hsl.s" toward="top" :scale="100" :linerLength="config.circleSize")
  .saturation(:style="saturationStyle")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'

const { hsl, config } = inject(ColorInjectionKey)

const saturationStyle = computed(() => {
  return {
    background: `linear-gradient(to bottom, hsl(${hsl.value.h}, 100%, 50%), hsl(${hsl.value.h}, 0%, 50%)`
  }
})
</script>

<style scoped>
.saturation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
