<template lang="pug">
Liner(v-model="hsv.h" :scale="360" toward="right" :linerLength="config.boardWidth")
  .color.right
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'

const { hsv, config } = inject(ColorInjectionKey)
</script>

<style scoped>
.color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  &.top {
    background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
  &.bottom {
    background: linear-gradient(to bottom, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
  &.left {
    background: linear-gradient(to left, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
  &.right {
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
}
</style>
