<template>
	<header class="luxy-common-header">
		<div class="luxy-common-header__content">
			<a href="https://www.onluxy.com/">
				<img src="../../assets/Logo.png"
			 alt="Luxy"
			 class="luxy-common-header__logo">
			</a>
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
			max-width: 1100px;
			margin: 0 auto;
			a {
				height: 60px;
				display: inline-block;
			}
	        .luxy-common-header__logo {
	            width: 120px;
	            position: relative;
	            top: 15px;
	        }
	    }
	}
</style>

