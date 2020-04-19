<template>
  <div class="home">
    <router-link class="start" to="talk">はじめる</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  .start {
    font-size: 20pt;
  }
}
</style>
