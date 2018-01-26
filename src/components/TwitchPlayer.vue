<template>
  <div :id="`twitch-player-${station.channel}`"></div>
</template>

<script>
import { pauseAll_, play_ } from '@/events'

export default {
  props: [
    'station',
    'width',
    'height'
  ],

  mounted () {
    /* global Twitch */
    let player = new Twitch.Player(`twitch-player-${this.station.channel}`, {
      width: this.width,
      height: this.height,
      layout: 'video',
      theme: 'dark',
      autoplay: false,
      channel: this.station.channel
    })

    pauseAll_
      .subscribe(() => {
        player.pause()
      })

    play_
      .filter((payload) => payload.name === this.station.name)
      .subscribe(() => {
        player.play()
      })
  }
}
</script>
