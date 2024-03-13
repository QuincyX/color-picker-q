<template lang="pug">
Liner(v-model="rgb.b" :scale="255" toward="right" :linerLength="config.boardWidth" :linerWidth="config.linerWidth*1.5")
  .color
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'

const { rgb, config } = inject(ColorInjectionKey)
</script>

<style scoped>
.color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 255));
}
</style>
