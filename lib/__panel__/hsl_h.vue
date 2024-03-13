<template lang="pug">
Circle(v-model="hsl.h")
  .hue
</template>

<script setup lang="ts">
import { inject, watch, computed, ref, onMounted } from 'vue'
import { ColorInjectionKey } from '../constant'
import Circle from '../__com__/circle.vue'

const { hsl, config } = inject(ColorInjectionKey)
</script>

<style scoped>
.hue {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#f00 0deg, #ff0 60deg, #0f0 120deg, #0ff 180deg, #00f 240deg, #f0f 300deg, #f00 360deg);
}
</style>
