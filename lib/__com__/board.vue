<template lang="pug">
.boardPanel(@click="handleClick" ref="boardPanel" :style="computedStyle")
  .content
    slot(name="default")
  .thumb(ref="boardThumb" :style="{  top: thumbPosition.y + 'px',left: thumbPosition.x + 'px'}" v-drag="onDrag" :x="thumbPosition.x" :y="thumbPosition.y")

</template>

<script setup lang="ts">
import { inject, watch, computed, ref } from 'vue'
import { ColorInjectionKey } from '../constant'

const props = defineProps({
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  pointerSize: {
    type: Number,
    default: null
  },
  boardWidth: {
    type: Number,
    default: null
  },
  boardHeight: {
    type: Number,
    default: null
  },
  scale: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['update:x', 'update:y'])

const { config } = inject(ColorInjectionKey)

const boardPanel = ref<HTMLElement | null>(null)
const boardThumb = ref<HTMLElement | null>(null)

const pointerSize = computed(() => props.pointerSize || config.value.pointerSize || 10)
const boardWidth = computed(() => props.boardWidth || config.value.boardWidth || 200)
const boardHeight = computed(() => props.boardHeight || config.value.boardHeight || 200)

const computedStyle = computed(() => {
  return {
    ['--boardWidth']: boardWidth.value + 'px',
    ['--boardHeight']: boardHeight.value + 'px',
    ['--pointerSize']: pointerSize.value + 'px'
  }
})

const thumbPosition = ref({ x: boardWidth.value, y: 0 })

function handleClick(e: MouseEvent) {
  if (e.target !== boardThumb.value) {
    const rectY = boardPanel.value?.getBoundingClientRect()?.y || 0
    const rectX = boardPanel.value?.getBoundingClientRect()?.x || 0
    onDrag({ x: e.x - rectX - pointerSize.value / 2, y: e.y - rectY - pointerSize.value / 2 })
  }
}
function onDrag({ x, y }: { x: number; y: number }) {
  if (x < 0 - pointerSize.value / 2) {
    x = 0 - pointerSize.value / 2
  } else if (x > boardWidth.value - pointerSize.value / 2) {
    x = boardWidth.value - pointerSize.value / 2
  }
  if (y < 0 - pointerSize.value / 2) {
    y = 0 - pointerSize.value / 2
  } else if (y > boardHeight.value - pointerSize.value / 2) {
    y = boardHeight.value - pointerSize.value / 2
  }
  thumbPosition.value = {
    x: x + pointerSize.value / 2,
    y: y + pointerSize.value / 2
  }
}

watch(
  () => [thumbPosition.value.x, thumbPosition.value.y],
  () => {
    emits('update:x', (thumbPosition.value.x / boardWidth.value) * props.scale)
    emits('update:y', (1 - thumbPosition.value.y / boardHeight.value) * props.scale)
  }
)
watch(
  () => [props.x, props.y],
  () => {
    thumbPosition.value = {
      x: (props.x / props.scale) * boardWidth.value,
      y: (1 - props.y / props.scale) * boardHeight.value
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.boardPanel {
  width: var(--boardWidth);
  height: var(--boardHeight);
  position: relative;
  overflow: hidden;
}
.thumb {
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
  left: 0;
  top: 0;
  border-radius: 1px;
  border: 1px solid #ccc;
  box-shadow: 0 0 2px #0009;
  z-index: 1;
  width: var(--pointerSize);
  height: var(--pointerSize);
  border-radius: 50%;
  margin-left: calc(var(--pointerSize) / -2);
  margin-top: calc(var(--pointerSize) / -2);
  background: rgba(0, 0, 0, 0.6);
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
