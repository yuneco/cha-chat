<template>
  <transition name="fade">
    <div class="about-dialog-root">
      <div class="dialog">
        <div class="main">
          <h1>あそびかた</h1>
          <div class="subtitle">みんなであつまって、おはなししよう！</div>
          <h2>どんなゲーム？</h2>
          <p>
            CHA-CHAT（ちゃちゃっと）はともだちと、かぞくと、なかまといっしょにあいてをしる、じぶんをじってもらうゲームです。
          </p>

          <h2>どうやってあそぶ？</h2>
          <p>
            ルールはかんたん、じゅんばんにじこしょうかいをするだけ。
          </p>
          <ol>
            <li>カードをシャッフルして「なんのことを」「どのように」はなすかきめる</li>
            <li>はなせるひとからじゅんばんにじぶんのことをひとり２０びょうではなす</li>
            <li>ぜんいんがはなしたら、カードをシャッフルしてちがうテーマではなす<br />
              おもいつかなかったら「パス」をしてもだいじょうぶです。
            </li>
          </ol>

          <h2>どんなときにつかうとよい？</h2>
          <p>
            はじめてのあいてやこれからなかよくなりたいあいてももちろん、ふだんいっしょにいるひととやってもしらなかったことがおたがいしりあえるかもしれませんよ。
          </p>
        </div>
        <div class="btns">
          <button class="close" @click="$emit('close')">とじる</button>
        </div>
      </div>
    </div>
  </transition>
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
.about-dialog-root {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff88;
  backdrop-filter: blur(10px);
  padding: 5%;
  opacity: 1;
}
.dialog {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 25px #00000040;
  overflow: hidden;
  height: 100%;
  .main {
    position: relative;
    padding: 10px 30px;
    height: calc(100% - 60px);
    overflow-y: scroll;
    text-align: left;
  }
  .btns {
    position: relative;
    background-color: $title-color;
    height: 60px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    .close {
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      font-size: 14pt;
      border-radius: 8px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  .dialog {
    transition: transform .5s;
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  .dialog {
    transform: scale(0.7);
  }
}
</style>
