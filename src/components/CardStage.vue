<template>
  <div class="card-stage-root">
    <div class="card-box theme-card-box" :style="{filter: `drop-shadow(0 5px 15px ${cardState.themeCard.shadow})`}">
      <div class="box-title" :class="{flipping: cardState.themeCard.isFlipping}" :style="{
        backgroundColor: cardState.themeCard.color
      }">なんのことをはなす？</div>
      <TalkCard
        :text="cardState.themeCard.text"
        :bgcolor="cardState.themeCard.color"
        :isOpen="cardState.themeCard.isOpen"
        @click="clickThemeCard"
      />
    </div>
    <div class="card-box style-card-box" :style="{filter: `drop-shadow(0 5px 15px ${cardState.styleCard.shadow})`}">
      <div class="box-title" :class="{flipping: cardState.styleCard.isFlipping}" :style="{
        backgroundColor: cardState.styleCard.color
      }">どんなふうにはなす？</div>
      <TalkCard
        :text="cardState.styleCard.text"
        :bgcolor="cardState.styleCard.color"
        :isOpen="cardState.styleCard.isOpen"
        @click="clickStyleCard"
      />
    </div>
    <div class="control">
      <button class="cancel-button" @click="closeCard" title="change cards" v-show="isCardOpen"></button>
      <button class="ok-button" @click="startCount" title="start talk" v-show="isAllCardOpen && !timerState.isActive"></button>
      <!-- <button class="change-button" @click="startCount" title="change cards" v-show="timerState.isActive"></button> -->
      <CountDown
        class="timer"
        :class="{popping: timerState.isPopping}"
        v-show="timerState.isActive"
        :time="timerState.time"
        @sec="timerState.time -= 1"
        @retry="startCount" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'
import TalkCard from '@/components/TalkCard.vue'
import { THEME_COLLOR, STYLE_COLOR, THEME_SHADOW, STYLE_SHADOW } from '@/Colors'
import cards from '../assets/cards.json'
import { randomFrom, wait } from '@/lib/utils'
import CountDown from '@/components/CountDown.vue'

export default defineComponent({
  components: {
    TalkCard,
    CountDown
  },
  props: {},
  setup () {
    const cardState = reactive({
      themeCard: {
        text: '100にん//あつまったら//できそうなこと',
        color: THEME_COLLOR,
        shadow: THEME_SHADOW,
        isOpen: false,
        isFlipping: false
      },
      styleCard: {
        text: 'ゆ〜っくり//しゃべってみよう',
        color: STYLE_COLOR,
        shadow: STYLE_SHADOW,
        isOpen: false,
        isFlipping: false
      }
    })
    const timerState = reactive({
      time: 0,
      isActive: false,
      isPopping: false
    })

    const isCardOpen = computed(() => cardState.themeCard.isOpen || cardState.styleCard.isOpen)
    const isAllCardOpen = computed(() => cardState.themeCard.isOpen && cardState.styleCard.isOpen)
    const isTimeup = computed(() => timerState.isActive && timerState.time === 0)

    const openCard = async (isTheme = true, isStyle = true) => {
      if (isTheme) {
        cardState.themeCard.text = randomFrom(cards.themes)
        cardState.themeCard.isOpen = true
        cardState.themeCard.isFlipping = true
        await wait(300)
        cardState.themeCard.isFlipping = false
        await wait(250)
      }
      if (isStyle) {
        cardState.styleCard.text = randomFrom(cards.styles)
        cardState.styleCard.isOpen = true
        cardState.styleCard.isFlipping = true
        await wait(300)
        cardState.styleCard.isFlipping = false
        await wait(250)
      }
    }

    const closeCard = async (isTheme = true, isStyle = true) => {
      if (isTheme && cardState.themeCard.isOpen) {
        cardState.themeCard.isOpen = false
        cardState.themeCard.isFlipping = true
        await wait(300)
        cardState.themeCard.isFlipping = false
      }
      if (isStyle && cardState.styleCard.isOpen) {
        cardState.styleCard.isOpen = false
        cardState.styleCard.isFlipping = true
        await wait(300)
        cardState.styleCard.isFlipping = false
      }
      if (!isAllCardOpen.value) {
        timerState.time = 0
        timerState.isActive = false
      }
    }

    const setNewCard = async () => {
      if (isCardOpen.value) {
        await closeCard()
        await wait(500)
      }
      await openCard()
    }

    const clickThemeCard = () => {
      if (cardState.themeCard.isOpen) { return }
      openCard(true, false)
    }

    const clickStyleCard = () => {
      if (cardState.styleCard.isOpen) { return }
      openCard(false, true)
    }

    const startCount = async () => {
      timerState.time = 20
      timerState.isActive = true
      await wait(0)
      timerState.isPopping = true
      await wait(250)
      timerState.isPopping = false
    }

    return {
      cardState,
      isCardOpen,
      isAllCardOpen,
      isTimeup,
      setNewCard,
      openCard,
      closeCard,
      clickThemeCard,
      clickStyleCard,
      timerState,
      startCount
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

.card-stage-root {
  position: relative;
  height: 100%;
}
.card-box {
  position: relative;
  height: calc(50% - 20px);
  padding: 20px 10%;
  transform-style: preserve-3d;
  perspective: 1000px;
  text-align: left;
  .box-title {
    position: relative;
    display: inline-block;
    height: 20px;
    font-size: 14px;
    padding: 1px 10px;
    border-radius: 4px;
    color: #fff;
    left: -10px;
    top: 5px;
    z-index: 1;
    transition: transform 0.2s ease-in;
    &.flipping {
      transition-timing-function: ease-out;
      transform: translateY(-20px);
    }
  }
}
.control {
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0;
  top: calc(100% - 15px);
  z-index: 1;
  text-align: center;
  filter: drop-shadow(0 0 1px #ffffff00);
  button {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 4px solid $title-color;
    border-radius: 30px;
    background-color: #fff;
    &:active {
      transform: translateY(4px);
    }
    &+button {
      margin-left: 8px;
    }
    &.change-button {
      background-image: url(../assets/change.svg);
      background-size: 80%;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.cancel-button {
      background-image: url(../assets/cancel.svg);
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.ok-button {
      background-image: url(../assets/ok.svg);
      background-size: 67%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .timer {
    position: absolute;
    top: 25px;
    right: 10px;
    transition: transform 0.2s ease-in;
    &.popping {
      transform: translateY(-10px);
    }
  }
}
</style>
