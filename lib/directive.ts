import { App } from 'vue'

function handleDrag(el: HTMLElement, bind: any) {
  if (!el || !bind) return
  el.onmousedown = e => {
    e.preventDefault()
    e.stopPropagation()
    let x = 0
    let y = 0
    let disX = e.clientX - el.offsetLeft
    let disY = e.clientY - el.offsetTop
    document.onmousemove = e => {
      x = e.clientX - disX
      y = e.clientY - disY
      if (bind.modifiers.x) {
        if (x) {
          bind.value({ x })
        }
      } else if (bind.modifiers.y) {
        if (y) {
          bind.value({ y })
        }
      } else {
        if (x || y) {
          bind.value({ x, y })
        }
      }
    }
    document.onmouseup = () => {
      if (x || y) {
        bind.value({ x, y })
      }
      document.onmousemove = null
      document.onmouseup = null
    }
  }
}

export default {
  install(app: App) {
    if (!app) return
    app.directive('drag', handleDrag)
  }
}
