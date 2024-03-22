<template lang="pug">
Liner(v-model="alpha" toward="top" :linerLength="200")
  .bg 
  .color(:style="alphaStyle")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'
import tinycolor from 'tinycolor2'

const { alpha, hsv } = inject(ColorInjectionKey)
const alphaStyle = computed(() => {
  const c = tinycolor({ h: hsv.value.h, s: hsv.value.s, v: hsv.value.v })
  return {
    background: `linear-gradient(to bottom, ${c.setAlpha(1).toRgbString()},   ${c.setAlpha(0).toRgbString()}`
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
