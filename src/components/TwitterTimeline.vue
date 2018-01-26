<template>
  <div ref="timeline" style="height: 600px"></div>
</template>

<script>
export default {
  props: [
    'station'
  ],

  mounted () {
    // Twitter has some issues about its widget height
    setTimeout(function () {
      /* global twttr */
      twttr.ready((twttr) => {
        twttr.widgets.createTimeline(
          {
            sourceType: 'widget',
            widgetId: '956207397726388226'
          },
          this.$refs.timeline,
          {
            width: 800,
            height: 600,
            chrome: 'nofooter noborders',
            dnt: true,
            linkColor: '#beff9d'
          }
        )
      })
    }.bind(this), 3000)
  }
}
</script>
