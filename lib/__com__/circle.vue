<template lang="pug">
.circlePanel(@click="handleClick" ref="circlePanel")
  .content
    slot(name="default")
  .thumb(ref="thumb" :style="{  top: thumbPosition.y + 'px',left: thumbPosition.x + 'px'}" v-drag="onDrag" :x="thumbPosition.x" :y="thumbPosition.y")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref, onMounted } from 'vue'
import { ColorInjectionKey } from '../constant'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  circleSize: {
    type: Number,
    default: null
  }
})
const emits = defineEmits(['update:modelValue'])
const circlePanel = ref<HTMLElement | null>(null)
const thumb = ref<HTMLElement | null>(null)
const { data, config } = inject(ColorInjectionKey)

const circleSize = computed(() => props.circleSize || config.value.circleSize || 200)
const thumbPosition = ref({ x: circleSize.value / 2, y: circleSize.value / 2 })

function handleClick(e: MouseEvent) {
  if (e.target !== thumb.value) {
    const rectY = circlePanel.value?.getBoundingClientRect()?.y || 0
    const rectX = circlePanel.value?.getBoundingClientRect()?.x || 0
    onDrag({ x: e.x - rectX, y: e.y - rectY })
  }
}
function onDrag({ x, y }: { x: number; y: number }) {
  const d = Math.atan2(y - circleSize.value / 2, x - circleSize.value / 2)
  thumbPosition.value = {
    x: Math.cos(d) * (circleSize.value / 2 - config.value.pointerSize / 2) + circleSize.value / 2,
    y: Math.sin(d) * (circleSize.value / 2 - config.value.pointerSize / 2) + circleSize.value / 2
  }
}

watch(
  () => [thumbPosition.value.x, thumbPosition.value.y],
  () => {
    const d =
      ((Math.atan2(thumbPosition.value.y - circleSize.value / 2, thumbPosition.value.x - circleSize.value / 2) /
        Math.PI) *
        180 +
        450) %
      360
    emits('update:modelValue', d)
  }
)
watch(
  () => props.modelValue,
  () => {
    const d = ((props.modelValue - 90) / 360) * Math.PI * 2
    thumbPosition.value = {
      x: Math.cos(d) * (circleSize.value / 2 - config.value.pointerSize / 2) + circleSize.value / 2,
      y: Math.sin(d) * (circleSize.value / 2 - config.value.pointerSize / 2) + circleSize.value / 2
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.circlePanel {
  width: var(--circleSize);
  height: var(--circleSize);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  .thumb {
    width: var(--pointerSize);
    height: var(--pointerSize);
    margin-left: calc(var(--pointerSize) / -2);
    margin-top: calc(var(--pointerSize) / -2);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #fff;
  }
}
.thumb {
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: var(--thumbSize);
  margin-top: calc(var(--thumbSize) / -2);
  border-radius: 1px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 2px #0009;
  z-index: 1;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
