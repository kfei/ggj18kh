<template>
  <div ref="timeline" style="height: 600px"></div>
</template>

<script>
export default {
  props: [
    'station'
  ],

  mounted () {
    /* global twttr */
    twttr.ready((twttr) => {
      twttr.widgets.createTimeline('956207397726388226', this.$refs.timeline, {
        width: 800,
        height: 600,
        chrome: 'nofooter',
        dnt: true,
        linkColor: '#beff9d'
      })
    })
  }
}
</script>
