<template lang="pug">
Liner(v-model="alpha" toward="top" :linerLength="200")
  .bg 
  .color(:style="alphaStyle")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'

const { alpha, rgb } = inject(ColorInjectionKey)
const alphaStyle = computed(() => {
  return {
    background: `linear-gradient(to bottom, rgba(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b}, 1),   rgba(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b}, 0))`
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
