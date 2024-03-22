<template lang="pug">
Board(v-model:x="hsv.s" v-model:y="hsv.v" :scale="100")
  .bg(:style="bgStyle")
  .white
  .black
</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'
import Board from '../__com__/board.vue'

const { hsv, config } = inject(ColorInjectionKey)

const bgStyle = computed(() => {
  return {
    backgroundColor: `hsl(${hsv.value.h}, 100%, 50%)`
  }
})
</script>

<style scoped>
.bg {
  position: relative;
  width: 100%;
  height: 100%;
}
.white {
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.black {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
