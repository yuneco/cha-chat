<template>
  <div class="talk-card-root"
    :class="{open: isOpen}"
    :style="{
      backgroundColor: bgcolor
    }"
    @click="$emit('click')"
  >
    <div class="bg-box">
      <span class="text">タップして<br />カードをひらく</span>
    </div>
    <div class="text-box">
      <span class="text">{{ displayText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  props: {
    text: { type: String, default: '???' },
    bgcolor: { type: String, default: '#eb73a3' },
    isOpen: { type: Boolean, default: false }
  },
  setup (props) {
    const displayText = computed(() => {
      return props.text.replace(/\/\//g, '\n')
    })
    return {
      displayText
    }
  }
})
</script>

<style lang="scss" scoped>
.talk-card-root {
  position: relative;
  height: 100%;
  padding: 5px;
  border-radius: 4px;
  transform: rotateY(180deg);
  transition: transform 0.5s;
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 10px;
    // background-color: #fff;
    background-image: url(../assets/textbg.svg);
    background-repeat: no-repeat;
    background-size: 95%;
    background-position: center;
    text-align: center;
    visibility: hidden;
    transition: visibility 0s ease 0.25s;
    .text {
      white-space: pre-wrap;
      color: #444;
      font-size: 1.5rem;
    }
  }
  .bg-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    text-align: center;
    visibility: visible;
    transition: visibility 0s ease 0.25s;
    .text {
      white-space: pre-wrap;
      color: #000;
      mix-blend-mode: soft-light;
      font-size: 2rem;
      font-weight: bold;
      transform: rotateY(180deg);
    }
  }
  &.open {
    transform: rotateY(0deg);
    .bg-box {
      visibility: hidden;
    }
    .text-box {
      visibility: visible;
    }
  }
}
</style>
