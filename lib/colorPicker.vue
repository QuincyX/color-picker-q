<template lang="pug">
.colorPickerContainer(:style="computedStyle")
  .hslContainer(@click="mode = 'hsl'")
    hsl_h.panel
    hsl_s.panel
    hsl_l.panel
    hsl_a.panel
  .hsvContainer(@click="mode = 'hsv'")
    div
      hsv_sv.panel
      hsv_h.panel
    hsv_a.panel
  .rgbContainer(@click="mode = 'rgb'")
    .rgbPanel
      rgb_r.panel
      rgb_g.panel
      rgb_b.panel
    rgb_a.panel
.resultContainer
  .result {{ color_hsl}}
  .result {{ color_rgb }}
  .result {{ color_hsv }}
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
    .label alpha
    input(v-model="alpha" type="number")
</template>

<script setup lang="ts">
import { provide, computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import tinycolor from 'tinycolor2'

import { ColorInjectionKey } from './constant'
import hsv_h from './__panel__/hsv_h.vue'
import hsv_sv from './__panel__/hsv_sv.vue'
import hsv_a from './__panel__/hsv_a.vue'
import hsl_h from './__panel__/hsl_h.vue'
import hsl_s from './__panel__/hsl_s.vue'
import hsl_l from './__panel__/hsl_l.vue'
import hsl_a from './__panel__/hsl_a.vue'
import rgb_r from './__panel__/rgb_r.vue'
import rgb_g from './__panel__/rgb_g.vue'
import rgb_b from './__panel__/rgb_b.vue'
import rgb_a from './__panel__/rgb_a.vue'

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
const color_hsv = computed(() => {
  return tinycolor({
    h: hsv.value.h,
    s: hsv.value.s,
    v: hsv.value.v,
    a: alpha.value
  }).toHsvString()
})
const color = computed(() => {
  if (mode.value === 'hsv') {
    return color_hsv.value
  } else if (mode.value === 'hsl') {
    return color_hsl.value
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
.hslContainer {
  display: flex;
  flex-wrap: wrap;
}
.hsvContainer {
  display: flex;
  flex-wrap: wrap;
}
.rgbContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  --linerWidth: 40px;
  .rgbPanel {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 0;
  }
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
</style>
