<template>
  <div id="app">
    <luxy-header></luxy-header>
    <luxy-footer></luxy-footer>
  </div>
</template>

<script>
import LuxyHeader from '../../components/luxy-header/LuxyHeader.vue'
import LuxyFooter from '../../components/luxy-footer/LuxyFooter.vue'

export default {
  name: 'app',
  components: {
    LuxyFooter,
    LuxyHeader
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
