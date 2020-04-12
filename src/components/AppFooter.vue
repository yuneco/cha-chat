<template>
  <footer class="app-footer-root">
    <button class="about" title="how to play" @click="$emit('about')">?</button>
  </footer>
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
.app-footer-root {
  position: relative;
  background-color: $title-color;
  text-align: left;
  padding: 10px;
}
button {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid $title-color;
  border-radius: 30px;
  background-color: #fff;
  color: $title-color;
  font-size: 18pt;
  font-weight: bold;
  &:active {
    transform: scale(.85);
  }
}
</style>
