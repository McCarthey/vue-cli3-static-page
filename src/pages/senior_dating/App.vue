<template>
  <div id="app">
    <luxy-header></luxy-header>
    <banner :imgType="content.name" :bannerText="content.bannerText"></banner>
    <main-content :imgType="content.name" :contentType="content.material"></main-content>
    <box-swiper :swiperExclude="content.name"></box-swiper>
    <luxy-footer></luxy-footer>
  </div>
</template>

<script>
import LuxyHeader from '../../components/luxy-header/LuxyHeader.vue'
import LuxyFooter from '../../components/luxy-footer/LuxyFooter.vue'
import banner from '../../components/banner/Banner.vue'
import MainContent from '../../components/main-content/MainContent.vue'
import BoxSwiper from '../../components/box-swiper/BoxSwiper.vue'
import CONST from '../../const/const'

export default {
  name: 'app',
  components: {
    LuxyHeader,
    banner,
    MainContent,
    BoxSwiper,
    LuxyFooter,
  },
  data() {
    return {
      content: CONST.SENIOR
    }
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
