<template>
  <header class="app-header-root">
    <div class="subtitle">
      みんなで きがるに おはなししよう
    </div>
    <div class="title">
      CHA-CHAT!
      <div class="ruby">チャチャット!</div>
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
  position: relative;
  .subtitle {
    color: #fff;
    font-size: 11pt;
    padding-top: 6px;
    letter-spacing: 0.25em;
  }
  .title {
    position: absolute;
    color: #fff;
    font-size: 42pt;
    font-weight: bold;
    width: 100%;
    left: 0;
    bottom: -16px;
    .ruby {
      position: absolute;
      right: 20px;
      bottom: 0px;
      text-align: right;
      font-weight: bold;
      -webkit-text-stroke: 6px #fff;
      color: $title-color;
      font-size: 14pt;
      transform: rotate(4deg);
      &::after{
        content: 'チャチャット!';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        text-align: right;
        font-weight: bold;
        -webkit-text-stroke: 1px $title-color;
      }
    }
  }
}
</style>
