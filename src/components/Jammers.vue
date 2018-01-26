<template>
  <div class="jammers">
    <div class="jammer" v-for="jammer in jammers" :key="jammer.name" v-bind:class="{ 'active': jammer.engaged }">
      <a :href="`https://sligrid.com/${jammer.name}`" target="_blank">
        <img :src="`https://storage.googleapis.com/gcs.sligrid.com/public/user/picture/${jammer.picture}`" alt="">
      </a>
      <span class="name">{{ jammer.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
    axios.get('https://cors.io/?https://sligrid.com/api/1/list/event/ggj18/user/engaged')
      .then(res => {
        this.jammers = res.data.users
      })
      .catch(res => {
        console.log(res)
      })
  }
}
</script>

<style lang="stylus">
.jammers
  display flex
  flex-wrap wrap

  .jammer
    margin 15px
    display flex
    justify-content center
    width 72px
    height 72px
    font-size 2em
    border-radius 100%
    flex-wrap wrap

    img
      border-radius 100%
      width 72px
      height 72px
      filter grayscale(100%)
      opacity .6

    .name
      color #ccc
      font-size 12px
      padding 8px
      font-family 'Russo One'

    &.active
      border 3px solid #beff9d
      box-shadow 0 0 15px #fff

    &.active img
      filter none
      opacity 1
    &.active .name
      color white
</style>
