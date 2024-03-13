import { createApp } from 'vue'
import App from './App.vue'
import ColorPickerQ from '../lib/main.ts'

const app = createApp(App)
app.use(ColorPickerQ)
app.mount('#app')
