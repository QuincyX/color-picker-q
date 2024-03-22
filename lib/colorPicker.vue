<template lang="pug">
.colorPreview(:style="{backgroundColor:color}") {{ color }}
.colorPickerContainer(:style="computedStyle")
  comHsl(@click="mode = 'hsl'")
  comHsv(@click="mode = 'hsv'")
  comRgb(@click="mode = 'rgb'")
  comCmyk(@click="mode = 'cmyk'")

.resultContainer
  .result {{ color_hsl}}
  .result {{ color_rgb }}
  .result {{ color_rgb_percent }}
  .result {{ color_hsv }}
  .result {{ color_cmyk }}
.resultContainer
  .result mode: {{ mode }}
  .result {{ color_hex }}
  .result {{ color }}
.form
  .inputItem
    .label hsl.h
    input(v-model="hsl.h" type="number")
  .inputItem
    .label hsl.s
    input(v-model="hsl.s" type="number")
  .inputItem
    .label hsl.l
    input(v-model="hsl.l" type="number")
.form
  .inputItem
    .label hsv.h
    input(v-model="hsv.h" type="number")
  .inputItem
    .label hsv.s
    input(v-model="hsv.s" type="number")
  .inputItem
    .label hsv.v
    input(v-model="hsv.v" type="number")
.form
  .inputItem
    .label rgb.r
    input(v-model="rgb.r" type="number")
  .inputItem
    .label rgb.g
    input(v-model="rgb.g" type="number")
  .inputItem
    .label rgb.b
    input(v-model="rgb.b" type="number")
.form
  .inputItem
    .label cmyk.c
    input(v-model="cmyk.c" type="number")
  .inputItem
    .label cmyk.m
    input(v-model="cmyk.m" type="number")
  .inputItem
    .label cmyk.y
    input(v-model="cmyk.y" type="number")
  .inputItem
    .label cmyk.k
    input(v-model="cmyk.k" type="number")
  
.form
  .inputItem
    .label alpha
    input(v-model="alpha" type="number")
</template>

<script setup lang="ts">
import { provide, computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import tinycolor from 'tinycolor2'

import { ColorInjectionKey } from './constant'

import comHsl from './hsl/index.vue'
import comHsv from './hsv/index.vue'
import comRgb from './rgb/index.vue'
import comCmyk from './cmyk/index.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  panel: {
    type: String,
    default: 'hsv'
  },
  format: {
    type: String,
    default: 'rgb'
  }
})
const emits = defineEmits(['update:modelValue'])

const mode = ref('hsl')

const alpha = ref(1)
const hsl = ref({
  h: 0,
  s: 100,
  l: 50
})
const hsv = ref({
  h: 0,
  s: 100,
  v: 100
})
const rgb = ref({
  r: 255,
  g: 255,
  b: 255
})
const cmyk = ref({
  c: 0,
  m: 0,
  y: 0,
  k: 0
})

const color_hsl = computed(() => {
  return tinycolor({
    h: hsl.value.h,
    s: hsl.value.s,
    l: hsl.value.l,
    a: alpha.value
  }).toHslString()
})
const color_rgb = computed(() => {
  return tinycolor({
    r: rgb.value.r,
    g: rgb.value.g,
    b: rgb.value.b,
    a: alpha.value
  }).toRgbString()
})
const color_rgb_percent = computed(() => {
  return tinycolor({
    r: rgb.value.r,
    g: rgb.value.g,
    b: rgb.value.b,
    a: alpha.value
  }).toPercentageRgbString()
})
const color_hsv = computed(() => {
  return tinycolor({
    h: hsv.value.h,
    s: hsv.value.s,
    v: hsv.value.v,
    a: alpha.value
  }).toHsvString()
})
const color_cmyk = computed(() => {
  return tinycolor({
    r: (1 - cmyk.value.c) * (1 - cmyk.value.k) * 255,
    g: (1 - cmyk.value.m) * (1 - cmyk.value.k) * 255,
    b: (1 - cmyk.value.y) * (1 - cmyk.value.k) * 255,
    a: alpha.value
  }).toRgbString()
})

const color = computed(() => {
  if (mode.value === 'hsv') {
    return color_hsv.value
  } else if (mode.value === 'hsl') {
    return color_hsl.value
  } else if (mode.value === 'cmyk') {
    return color_cmyk.value
  } else {
    return color_rgb.value
  }
})
const color_hex = computed(() => {
  return tinycolor(color.value).toHex8String()
})

const config: Ref<Record<string, number>> = ref({
  linerWidth: 25,
  linerLength: 200,
  circleSize: 210,
  boardWidth: 300,
  boardHeight: 200,
  pointerSize: 30,
  thumbSize: 4
})

const computedStyle = computed(() => {
  return {
    ['--linerWidth']: config.value.linerWidth + 'px',
    ['--linerLength']: config.value.linerLength + 'px',
    ['--circleSize']: config.value.circleSize + 'px',
    ['--boardWidth']: config.value.boardWidth + 'px',
    ['--boardHeight']: config.value.boardHeight + 'px',
    ['--pointerSize']: config.value.pointerSize + 'px',
    ['--thumbSize']: config.value.thumbSize + 'px'
  }
})

provide(ColorInjectionKey, {
  hsl,
  hsv,
  rgb,
  cmyk,
  alpha,
  config
})

watch(
  () => props.modelValue,
  val => {
    if (val === '') return
    const c = tinycolor(val)
    hsl.value.h = c.toHsl().h
    hsl.value.s = c.toHsl().s * 100
    hsl.value.l = c.toHsl().l * 100
    hsv.value.h = c.toHsv().h
    hsv.value.s = c.toHsv().s * 100
    hsv.value.v = c.toHsv().v * 100
    rgb.value.r = c.toRgb().r
    rgb.value.g = c.toRgb().g
    rgb.value.b = c.toRgb().b
    alpha.value = c.getAlpha()
  },
  { immediate: true }
)

watch(
  () => color.value,
  () => {
    if (mode.value === 'hsl') {
      const c = tinycolor({
        h: hsl.value.h,
        s: hsl.value.s / 100,
        l: hsl.value.l / 100,
        a: alpha.value
      })
      hsv.value.h = c.toHsv().h
      hsv.value.s = c.toHsv().s * 100
      hsv.value.v = c.toHsv().v * 100
      rgb.value.r = c.toRgb().r
      rgb.value.g = c.toRgb().g
      rgb.value.b = c.toRgb().b
      cmyk.value.c = 1 - c.toRgb().r / 255
      cmyk.value.m = 1 - c.toRgb().g / 255
      cmyk.value.y = 1 - c.toRgb().b / 255
      cmyk.value.k = 1 - Math.max(cmyk.value.c, cmyk.value.m, cmyk.value.y)
    } else if (mode.value === 'hsv') {
      const c = tinycolor({
        h: hsv.value.h,
        s: hsv.value.s / 100,
        v: hsv.value.v / 100,
        a: alpha.value
      })
      hsl.value.h = c.toHsl().h
      hsl.value.s = c.toHsl().s * 100
      hsl.value.l = c.toHsl().l * 100
      rgb.value.r = c.toRgb().r
      rgb.value.g = c.toRgb().g
      rgb.value.b = c.toRgb().b
      cmyk.value.c = 1 - c.toRgb().r / 255
      cmyk.value.m = 1 - c.toRgb().g / 255
      cmyk.value.y = 1 - c.toRgb().b / 255
      cmyk.value.k = 1 - Math.max(cmyk.value.c, cmyk.value.m, cmyk.value.y)
    } else if (mode.value === 'cmyk') {
      const c = tinycolor({
        r: (1 - cmyk.value.c) * (1 - cmyk.value.k) * 255,
        g: (1 - cmyk.value.m) * (1 - cmyk.value.k) * 255,
        b: (1 - cmyk.value.y) * (1 - cmyk.value.k) * 255,
        a: alpha.value
      })
      hsv.value.h = c.toHsv().h
      hsv.value.s = c.toHsv().s * 100
      hsv.value.v = c.toHsv().v * 100
      hsl.value.h = c.toHsl().h
      hsl.value.s = c.toHsl().s * 100
      hsl.value.l = c.toHsl().l * 100
      rgb.value.r = c.toRgb().r
      rgb.value.g = c.toRgb().g
      rgb.value.b = c.toRgb().b
    } else {
      const c = tinycolor({
        r: rgb.value.r,
        g: rgb.value.g,
        b: rgb.value.b,
        a: alpha.value
      })
      hsl.value.h = c.toHsl().h
      hsl.value.s = c.toHsl().s * 100
      hsl.value.l = c.toHsl().l * 100
      hsv.value.h = c.toHsv().h
      hsv.value.s = c.toHsv().s * 100
      hsv.value.v = c.toHsv().v * 100
      cmyk.value.c = 1 - c.toRgb().r / 255
      cmyk.value.m = 1 - c.toRgb().g / 255
      cmyk.value.y = 1 - c.toRgb().b / 255
      cmyk.value.k = 1 - Math.max(cmyk.value.c, cmyk.value.m, cmyk.value.y)
    }
  }
)
</script>

<style scoped>
.colorPickerContainer {
  --linerWidth: 20px;
  --linerLength: 200px;
  --circleSize: 200px;
  --boardWidth: 300px;
  --boardHeight: 200px;
  --pointerSize: 30px;
  --thumbSize: 4px;
}

.panelContainer {
  display: inline-block;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.panel {
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  .inputItem {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    .label {
      padding: 0 10px;
      width: 100px;
      text-align: right;
    }
  }
}
.resultContainer {
  display: flex;
  flex-wrap: wrap;
}
.result {
  padding: 10px 20px;
}
.colorPreview {
  width: 120px;
  height: 50px;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
