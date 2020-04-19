<template>
  <div class="talk-page-root">
    <CardStage></CardStage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CardStage from '@/components/CardStage.vue'

export default defineComponent({
  components: {
    CardStage
  },
  props: {},
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
</style>
