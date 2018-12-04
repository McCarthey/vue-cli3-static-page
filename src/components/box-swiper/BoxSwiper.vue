<template>
  <div class="box-swiper__wrap">
    <div class="box-swiper__wrap-title">
      <p>YOU MAY ALSO LIKE</p>
      <span class="text-line"></span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
          v-for="(item,index) in swiperList">
          <div :style="{background:'url('+item.img+') no-repeat 0/cover'}"
            class="swiper-slide-img"></div>
          <p class="swiper-slide-title">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button swiper-button-prev">
      <div class="arrow__wrap">
        <div class="arrow arrow-top"></div>
        <div class="arrow arrow-bottom"></div>
      </div>
    </div>
    <div class="swiper-button swiper-button-next">
      <div class="arrow__wrap">
        <div class="arrow arrow-top"></div>
        <div class="arrow arrow-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import CONST from '../../const/const'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'BoxSwiper',
    data: () => ({
      swiperList: [
        {
          title: CONST.GLOBAL.material.title,
          img: CONST.GLOBAL.material.img,
          name: CONST.GLOBAL.name
        },
        {
          title: CONST.ELITE.material.title,
          img: CONST.ELITE.material.img,
          name: CONST.ELITE.name
        },
        {
          title: CONST.SENIOR.material.title,
          img: CONST.SENIOR.material.img,
          name: CONST.SENIOR.name
        },
        {
          title: CONST.FUN.material.title,
          img: CONST.FUN.material.img,
          name: CONST.FUN.name
        },
        {
          title: CONST.GOAL.material.title,
          img: CONST.GOAL.material.img,
          name: CONST.GOAL.name
        },
        {
          title: CONST.RICH.material.title,
          img: CONST.RICH.material.img,
          name: CONST.RICH.name
        }
      ]
    }),
    props: {
      swiperExclude: String
    },
    methods: {
      initSwiper() {
        const that = this
        const demoSwiper = new Swiper('.swiper-container', {
          autoplay: false,
          slidesPerView: 3,
          spaceBetween: 28,
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        })
      },
    },
    created() {
      // 从数组中删除传过来的那一项
      const index = this.swiperList.findIndex(i => i.name === this.swiperExclude)
      if (index !== -1) {
        this.swiperList.splice(index, 1)
      }
    },
    mounted() {
      this.initSwiper()
    }
  }
</script>

<style lang="scss">
  .box-swiper__wrap {
    padding: 60px 0 170px;
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .box-swiper__wrap-title {
      font-family: Lusitana;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      .text-line {
        width: 40px;
        height: 4px;
        display: block;
        background-color: $mainColor;
        margin: 20px auto 45px;
      }
    }
    .swiper-container {
      width: 960px;
      height: 320px;
      .swiper-wrapper {
        .swiper-slide {
          width: 300px;
          height: 300px;
          box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5);
          cursor: pointer;
          .swiper-slide-img {
            width: 300px;
            height: 233px;
          }
          .swiper-slide-title {
            font-size: 18px;
            color: #4a4a4a;
            line-height: 62px;
            padding-left: 17px;
          }
        }
      }
    }
    .swiper-button {
      outline: none;
      width: 52px;
      height: 52px;
      background: none;
      border: 2px solid $borderMainColor;
      border-radius: 50%;
      opacity: 0.5;
      transition: 0.3s;
      &:hover {
        opacity: 1;
      }
      .arrow__wrap {
        position: relative;
        .arrow {
          width: 10px;
          height: 2px;
          background-color: $mainColor;
          position: absolute;
        }
      }
    }
    .swiper-button-prev {
      .arrow__wrap {
        .arrow-top {
          top: 20px;
          left: 17px;
          transform: rotate(-45deg);
        }
        .arrow-bottom {
          top: 26px;
          left: 17px;
          transform: rotate(45deg);
        }
      }
    }
    .swiper-button-next {
      .arrow__wrap {
        .arrow-top {
          top: 20px;
          left: 20px;
          transform: rotate(45deg);
        }
        .arrow-bottom {
          top: 26px;
          left: 20px;
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>


