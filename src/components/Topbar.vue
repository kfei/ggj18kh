<template>
  <div class="topbar">
    <img src="../assets/logo.png">
    <span class="station-name">{{ name }}</span>
  </div>
</template>

<script>
import { play_ } from '@/events'

export default {
  data () {
    return {
      name: ''
    }
  },

  mounted () {
    play_
      .subscribe(({ name }) => {
        this.name = name
      })
  }
}
</script>

<style lang="stylus">
.topbar
  position absolute
  background-color black
  top 0
  left 0
  width 100%
  display flex
  z-index 1000
  justify-content space-between

  img
    width 50px
    height 50px
    margin 10px 10px 10px 20px

  .station-name
    margin-right 20px
    line-height 70px
    font-size 3em
    color white
    font-family 'Russo One', sans-serif
</style>
