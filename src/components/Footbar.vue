<template>
  <div class="footbar">
    <span class="url">ggj18.sligrid.com</span>
  </div>
</template>

<script>
export default {
  name: 'Footbar'
}
</script>

<style lang="stylus">
.footbar
  position absolute
  bottom 0
  left 0
  width 100%
  font-size 1.2em
  font-family 'Oxygen Mono', monospace
  color white
  padding 10px 0
  .url
    font-weight bold
</style>
