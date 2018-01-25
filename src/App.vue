<template>
  <div id="app">
    <Topbar/>
    <Station/>
    <Footbar/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Station from './components/Station'
import Footbar from './components/Footbar'

export default {
  name: 'App',
  components: {
    Topbar,
    Station,
    Footbar
  }
}
</script>

<style lang="stylus">
html
  background-color black
  text-align center

body
  margin 0
</style>
