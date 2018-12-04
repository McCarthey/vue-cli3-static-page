<template>
	<div class="main-content__wrap">
		<div class="main-content__wrap-left">
			
		</div>
		<div class="main-content__wrap-right">
			<div class="download__wrap">
				<div class="download__wrap-title">DOWNLOAD LUXY APP</div>
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
	},
	mounted() {
		console.log('内容', this.contentType)
	}
}
</script>

<style lang="scss">
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
		padding: 56px;
		width: 906px;
		box-shadow: 0 8px 20px 0 rgba(224,224,224,0.50);
	}
	.main-content__wrap-right {
		width: 250px;
		.download__wrap {
			height: 443px;
			background-color: #fff;
		}
		.sign__wrap {
			height: 596px;
			.sign__wrap-btn {
				width: 196px;
				height: 48px;
				background-color: $mainColor;
			}
		}
	}
}
</style>
