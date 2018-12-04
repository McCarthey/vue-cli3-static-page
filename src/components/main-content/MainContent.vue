<template>
  <div class="main-content__wrap">
    <div class="main-content__wrap-left">
      <div class="content__wrap">
        <p class="content__wrap-title">{{ contentType.title }}</p>
        <img :src="contentType.img"
          class="content__wrap-img"
          width="798"
          height="526">
        <div class="content__wrap-text"
          v-html="contentType.text"></div>
      </div>
    </div>
    <div class="main-content__wrap-right">
      <div class="download__wrap">
        <div class="download__wrap-title">
          <p>DOWNLOAD LUXY APP</p>
          <span class="download__wrap-title-line"></span>
        </div>
        <div class="download__wrap-image"></div>
      </div>
      <div class="sign__wrap">
        <button class="sign__wrap-btn">Join Luxy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainContent',
    props: {
      imgType: String,
      contentType: Object
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: globerregular_free;
    src: url(../../assets/fonts/glober_regular_free-webfont.eot);
    src: url(../../assets/fonts/glober_regular_free-webfont.eot?#iefix)
        format("embedded-opentype"),
      url(../../assets/fonts/glober_regular_free-webfont.woff) format("woff"),
      url(../../assets/fonts/glober_regular_free-webfont.ttf) format("truetype"),
      url(../../assets/fonts/glober_regular_free-webfont.svg#globerregular_free)
        format("svg");
    font-weight: 400;
    font-style: normal;
  }
  
  .main-content__wrap {
    width: 1196px;
    height: 1079px;
    position: relative;
    top: -96px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .main-content__wrap-left {
      background-color: #fff;
      padding: 52px 56px;
      width: 906px;
      box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5);
	  font-family: Lusitana;
	  color: #666666;
      .content__wrap {
        .content__wrap-title {
          font-size: 40px;
		  font-weight: bold;
		  color: #313131;
        }
        .content__wrap-img {
			margin-top: 30px;
        }
        .content__wrap-text {
			margin-top: 30px;
			font-size: 15px;
			line-height: 24px;
			font-family: globerregular_free;
        }
      }
    }
    .main-content__wrap-right {
      width: 250px;
      .download__wrap {
        height: 443px;
        background-color: #fff;
        margin-bottom: 40px;
        overflow: hidden;
        text-align: center;
        .download__wrap-title {
          height: 75px;
          font-size: 17px;
          line-height: 40px;
          font-weight: bold;
          font-family: Lusitana;
          padding-top: 10px;
        }
        .download__wrap-title-line {
          display: block;
          height: 1px;
          width: 204px;
          background-color: $borderMainColor;
          margin: 0 auto;
        }
        .download__wrap-image {
          height: 368px;
          background: url(../../assets/imgs/img-download.png) no-repeat 100% /
            contain;
        }
      }
      .sign__wrap {
        height: 596px;
        position: relative;
        background: url(../../assets/imgs/img-sign.png) no-repeat 100% / cover;
        .sign__wrap-btn {
          width: 196px;
          height: 48px;
          background-color: $mainColor;
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 16px;
          font-weight: bold;
          transition: 0.3s;
          border-radius: 4px;
          &:hover {
            background-color: lighten($color: $mainColor, $amount: 10%);
          }
        }
      }
    }
  }
</style>
