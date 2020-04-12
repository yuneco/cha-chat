<template>
  <div class="count-down-root">
    <template v-if="time > 0">
      <div class="title">のこりじかん</div>
      <div class="time">
        <span class="sec">{{ time }}</span>
        <span class="suffix">びょう</span>
      </div>
    </template>
    <template v-if="time <= 0">
      <div class="retry" @click="$emit('retry')">
        もういちど！
      </div>
    </template>
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
  color: #fff;
  text-align: right;
  .title {
    font-size: 11pt;
  }
  .time {
    position: relative;
    top: -5px;
    .sec {
      display: inline-block;
      font-size: 20pt;
      font-weight: bold;
      padding-right: 5px;
    }
    .suffix {
      font-size: 9pt;
    }
  }
  .retry {
    position: relative;
    top: 6px;
    font-size: 14pt;
  }
}
</style>
