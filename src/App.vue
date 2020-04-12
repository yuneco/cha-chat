<template>
  <div id="app">
    <AppHeader class="header"></AppHeader>
    <main>
      <router-view class="page" />
    </main>
    <AppFooter class="footer" @about="showAbout"></AppFooter>
    <AboutDialog v-show="viewState.isAboutShown" @close="hideAbout"></AboutDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AboutDialog from '@/components/AboutDialog.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    AboutDialog
  },
  props: {},
  setup () {
    const viewState = reactive({
      isAboutShown: false
    })
    const showAbout = () => {
      viewState.isAboutShown = true
    }
    const hideAbout = () => {
      viewState.isAboutShown = false
    }
    return {
      viewState,
      showAbout,
      hideAbout
    }
  }
})
</script>

<style lang="scss" scoped>
@import './assets/global.scss';
.page {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
$header-height: 75px;
$footer-height: 60px;
.header {
  height: $header-height;
}
.footer {
  height: $footer-height;
}
main {
  height: calc(100% - #{$header-height + $footer-height});
  background-color: #fff;
}
</style>
