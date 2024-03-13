import { App } from 'vue'
import ColorPickerQ from './colorPicker.vue'
import directive from './directive'

export default function (app: App) {
  if (!app) return
  app.component('ColorPickerQ', ColorPickerQ)
  app.use(directive)
}
