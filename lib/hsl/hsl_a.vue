<template lang="pug">
Liner(v-model="alpha" toward="top" :linerLength="config.circleSize")
  .bg 
  .color(:style="alphaStyle")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'
import tinycolor from 'tinycolor2'

const { alpha, hsl, color, data, config } = inject(ColorInjectionKey)
const alphaStyle = computed(() => {
  return {
    background: `linear-gradient(to bottom, hsla(${hsl.value.h}, ${hsl.value.s}%, ${hsl.value.l}%, 1), hsla(${hsl.value.h}, ${hsl.value.s}%, ${hsl.value.l}%, 0))`
  }
})
</script>

<style scoped>
.color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
}
</style>
