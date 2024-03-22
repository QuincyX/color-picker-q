<template lang="pug">
Liner(v-model="cmyk.c" :scale="1" toward="right" :linerLength="config.boardWidth" :linerWidth="config.linerWidth")
  .color
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Liner from '../__com__/liner.vue'

const { cmyk, config } = inject(ColorInjectionKey)
</script>

<style scoped>
.color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgb(255, 255, 255), rgb(0, 255, 255));
}
</style>
