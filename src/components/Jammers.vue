<template>
  <div class="jammers">
    <div class="jammer" v-for="jammer in jammers" :key="jammer.name" v-bind:class="{ 'active': jammer.active }">
      <img :src="jammer.picture" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jammers',

  data () {
    return {
      jammers: []
    }
  },

  props: [
    'station'
  ],

  mounted () {
    // TODO
    this.jammers = Array.from(new Array(50), (x, i) => {
      return {
        name: `😇-${i}`,
        picture: `http://i.pravatar.cc/60?u=${i}`,
        active: i % 3 === 0
      }
    })
  }
}
</script>

<style lang="stylus">
.jammers
  display flex
  flex-direction row
  column-count 5
  flex-wrap wrap

  .jammer
    margin 3px
    display flex
    justify-content center
    width 60px
    height 60px
    font-size 2em
    border-radius 100%

    &.active
      border 3px solid #beff9d
      box-shadow 0 0 15px #fff
    img
      border-radius 100%
      filter grayscale(100%)
    &.active img
      filter none
</style>
