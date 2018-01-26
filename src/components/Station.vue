<template>
  <carousel-3d
    ref="carousel"
    :controls-visible="true"
    :width="width"
    :height="height"
    :autoplay="true"
    :autoplay-timeout="600000"
    @before-slide-change="onBeforeSlideChange"
    @after-slide-change="onAfterSlideChange">
    <slide class="station" v-for="(station, i) in stations" :key="station.name" :index="i">
      <twitch-player v-if="station.type === 'twitch'" :station="station" :width="videoWidth" :height="videoHeight"></twitch-player>
      <twitter-timeline v-if="station.type === 'twitter'" :station="station"></twitter-timeline>
      <jammers v-if="station.type === 'jammers'" :station="station"></jammers>
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import TwitchPlayer from './TwitchPlayer'
import TwitterTimeline from './TwitterTimeline'
import Jammers from './Jammers'
import { keyPressedLeft_, keyPressedRight_, pauseAll_, play_ } from '@/events'

export default {
  name: 'Station',

  components: {
    Carousel3d,
    Slide,
    TwitchPlayer,
    TwitterTimeline,
    Jammers
  },

  computed: {
    width () {
      return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.75
    },

    height () {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    },

    videoWidth () {
      return this.width - 30
    },

    videoHeight () {
      return Math.floor(this.width * 9 / 16)
    }
  },

  data () {
    return {
      stations: [
        {
          type: 'twitter',
          name: 'Twitter'
        },
        {
          type: 'twitch',
          channel: 'dakuokh',
          name: 'Kaohsiung'
        },
        {
          type: 'twitch',
          channel: 'kdugamedev',
          name: 'Malaysia'
        },
        {
          type: 'twitch',
          channel: 'igda_taiwan',
          name: 'Taipei (CLBC)'
        },
        {
          type: 'twitch',
          channel: 'igda_japan',
          name: 'Japan'
        },
        {
          type: 'jammers',
          name: 'Jammers'
        }
      ]
    }
  },

  methods: {
    onBeforeSlideChange: function (index) {
      pauseAll_.next()
    },
    onAfterSlideChange: function (index) {
      const station = this.stations[index]
      play_.next({
        name: station.name
      })
    }
  },

  mounted () {
    // Initial play
    play_.next({
      name: this.stations[0].name
    })

    keyPressedLeft_
      .subscribe(() => {
        this.$refs.carousel.goPrev()
      })
    keyPressedRight_
      .subscribe(() => {
        this.$refs.carousel.goNext()
      })
  }
}
</script>

<style lang="stylus" scoped>
.carousel-3d-container
  margin 0
  .carousel-3d-slide
    display flex
    align-items center
    justify-content center
    background-color black
</style>
