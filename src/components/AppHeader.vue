<template>
  <header class="app-header-root">
    <div class="subtitle">
      みんなで きがるに おはなししよう
    </div>
    <div class="title">
      CHA-CHAT!
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {},
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

header {
  background-color: $title-color;
  .subtitle {
    color: #fff;
    font-size: 11pt;
  }
  .title {
    color: #fff;
    font-size: 42pt;
  }
}
</style>
