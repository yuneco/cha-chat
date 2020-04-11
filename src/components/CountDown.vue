<template>
  <div class="count-down-root">
    <div class="title">のこりじかん</div>
    <div class="time">
      {{ time }}
      <span class="suffix">びょう</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, watch } from '@vue/composition-api'
export default defineComponent({
  props: {
    time: { type: Number, default: 0 }
  },
  setup (props, ctx) {
    let lastTime = Date.now()
    let enabled = false
    const tick = () => {
      if (!enabled) { return }
      const now = Date.now()
      if (now - lastTime > 1000) {
        lastTime += 1000
        ctx.emit('sec')
      }
      requestAnimationFrame(tick)
    }
    watch(() => props.time, () => {
      const newEnabled = props.time > 0
      if (enabled === newEnabled) { return }
      enabled = newEnabled
      if (enabled) {
        lastTime = Date.now()
        tick()
      }
    })
    onUnmounted(() => {
      enabled = false
    })
    return {}
  }
})
</script>

<style lang="scss" scoped>
.count-down-root {
  display: inline-block;
  color: #777;
  mix-blend-mode: multiply;
  text-align: right;
  .title {
    font-size: 11pt;
  }
  .time {
    font-size: 20pt;
    .suffix {
      font-size: 9pt;
    }
  }
}
</style>
