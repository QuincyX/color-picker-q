<template lang="pug">
.linerPanel(:style="linerPanelStyle" :class="{isVertical}" @click="handleClick" ref="linerPanel")
  .content
    slot(name="default")
  .thumb(ref="linerThumb" :style="thumbStyle" v-drag="onDrag" :x="thumbPosition.x" :y="thumbPosition.y")
</template>

<script setup lang="ts">
import { inject, watch, computed, ref, onMounted } from 'vue'
import { ColorInjectionKey } from '../constant'

const { config } = inject(ColorInjectionKey)

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  toward: {
    type: String,
    default: 'bottom'
  },
  linerWidth: {
    type: Number,
    default: null
  },
  linerLength: {
    type: Number,
    default: null
  },
  scale: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['update:modelValue'])

const linerPanel = ref<HTMLElement | null>(null)
const linerThumb = ref<HTMLElement | null>(null)

const thumbPosition = ref({ x: 0, y: 0 })

const linerWidth = computed(() => props.linerWidth || config.value.linerWidth || 20)
const linerLength = computed(() => props.linerLength || config.value.linerLength || 200)
const isVertical = computed(() => ['top', 'bottom'].includes(props.toward))
const thumbStyle = computed(() => ({
  top: thumbPosition.value.y + 'px',
  left: thumbPosition.value.x + 'px'
}))
const linerPanelStyle = computed(() => {
  if (isVertical.value) {
    return {
      width: linerWidth.value + 'px',
      height: linerLength.value + 'px'
    }
  }
  return {
    height: linerWidth.value + 'px',
    width: linerLength.value + 'px'
  }
})

function handleClick(e: MouseEvent) {
  if (e.target !== linerThumb.value) {
    const rectX = linerPanel.value?.getBoundingClientRect()?.x || 0
    const rectY = linerPanel.value?.getBoundingClientRect()?.y || 0
    onDrag({ x: e.x - rectX, y: e.y - rectY })
  }
}

function onDrag({ x, y }: { x: number; y: number }) {
  if (isVertical.value) {
    if (y < 0) {
      y = 0
    } else if (y > linerLength.value) {
      y = linerLength.value
    }
    thumbPosition.value.y = y
  } else {
    if (x < 0) {
      x = 0
    } else if (x > linerLength.value) {
      x = linerLength.value
    }
    thumbPosition.value.x = x
  }
}

watch(
  () => [thumbPosition.value.x, thumbPosition.value.y],
  () => {
    if (props.toward === 'top') {
      emits('update:modelValue', (1 - thumbPosition.value.y / linerLength.value) * props.scale)
    } else if (props.toward === 'bottom') {
      emits('update:modelValue', (thumbPosition.value.y / linerLength.value) * props.scale)
    } else if (props.toward === 'right') {
      emits('update:modelValue', (thumbPosition.value.x / linerLength.value) * props.scale)
    } else if (props.toward === 'left') {
      emits('update:modelValue', (1 - thumbPosition.value.x / linerLength.value) * props.scale)
    }
  }
)

watch(
  () => props.modelValue,
  v => {
    v = v / props.scale
    if (props.toward === 'top') {
      thumbPosition.value.y = (1 - v) * linerLength.value
    } else if (props.toward === 'bottom') {
      thumbPosition.value.y = v * linerLength.value
    } else if (props.toward === 'right') {
      thumbPosition.value.x = v * linerLength.value
    } else if (props.toward === 'left') {
      thumbPosition.value.x = (1 - v) * linerLength.value
    }
  },
  {
    immediate: true
  }
)
</script>

<style scoped>
.linerPanel {
  width: var(--linerWidth);
  height: var(--linerLength);
  position: relative;
  .thumb {
    position: absolute;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 1px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #ccc;
    box-shadow: 0 0 2px #0009;
    z-index: 1;
    left: 0;
    top: 0;
    width: var(--thumbSize);
    height: 100%;
    margin-left: calc(var(--thumbSize) / -2);
    margin-top: 0;
  }
  &.isVertical {
    width: var(--linerLength);
    height: var(--linerWidth);
    .thumb {
      left: 0;
      top: 0;
      width: 100%;
      height: var(--thumbSize);
      margin-top: calc(var(--thumbSize) / -2);
      margin-left: 0;
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
