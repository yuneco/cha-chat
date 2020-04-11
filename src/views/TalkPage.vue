<template>
  <div class="talk-page-root">
    <AppHeader class="header"></AppHeader>
    <main>
      <CardStage></CardStage>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppHeader from '@/components/AppHeader.vue'
import CardStage from '@/components/CardStage.vue'

export default defineComponent({
  components: {
    AppHeader,
    CardStage
  },
  props: {},
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';
$header-height: 100px;
$footer-height: 60px;
.header {
  height: $header-height;
}
footer {
  height: $footer-height;
  background-color: $title-color;
}
main {
  height: calc(100% - #{$header-height + $footer-height});
  background-color: #fff;
}
</style>
