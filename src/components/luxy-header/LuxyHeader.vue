<template>
  <header class="luxy-common-header">
    <div class="luxy-common-header__content">
      <a href="https://www.onluxy.com/">
        <img src="../../assets/Logo.png"
          alt="Luxy"
          class="luxy-common-header__logo">
      </a>
      <div class="login__wrap">
        <a href="https://py.onluxy.com/sign.html#/sign_page">Log in&nbsp;&nbsp;/&nbsp;&nbsp;</a>
        <a href="https://py.onluxy.com/sign.html#/sign_page">Sign up</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'LuxyHeader',
  }
</script>

<style lang="scss">
  .luxy-common-header {
    width: 100%;
    height: 60px;
    background-color: #000;
    .luxy-common-header__content {
      max-width: 1440px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      a {
        height: 60px;
        display: inline-block;
        color: $mainColor;
      }
      .luxy-common-header__logo {
        width: 120px;
        position: relative;
        top: 15px;
      }
      .login__wrap {
        font-size: 15px;
        line-height: 60px;
      }
    }
  }
</style>

