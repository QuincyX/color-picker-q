<template>
  <div class="page">
    <div class="container">
      <color-picker-q v-model="color"></color-picker-q>
    </div>
    <div class="result">
      <div class="text">{{ color }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#95ff00')
</script>

<style>
.container {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
}
.result {
  margin: 20px;
  padding: 10px;
}
</style>
