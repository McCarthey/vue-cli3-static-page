<template>
	<div class="luxy-banner__wrap" :class="bgType">
		<p class="luxy-banner__wrap-text">{{ bannerText }}</p>
	</div>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		imgType: String,
		bannerText: String
	},
	computed: {
		bgType() {
			let bgType
			switch (this.imgType) {
				case 'global':
					bgType = 'luxy-banner__wrap-global'
					break;
				case 'elite':
					bgType = 'luxy-banner__wrap-elite'
					break;
				case 'fun':
					bgType = 'luxy-banner__wrap-fun'
					break;
				case 'goal':
					bgType = 'luxy-banner__wrap-goal'
					break;
				case 'rich':
					bgType = 'luxy-banner__wrap-rich'
					break;
				case 'senior':
					bgType = 'luxy-banner__wrap-senior'
					break;
				default:
					break;
			}
			return bgType
		}
	}
}
</script>

<style lang="scss">
.luxy-banner__wrap {
	width: 100%;
	height: 420px;
	color: #fff;
	text-align: center;
	padding-top: 110px;
	.luxy-banner__wrap-text {
		font-size: 30px;
		font-family: Lusitana;
		max-width: 776px;
		margin: 0 auto;
	}
}
.luxy-banner__wrap-global {
	background: url(../../assets/imgs/bg-global.png) no-repeat center/cover;
}
.luxy-banner__wrap-elite {
	background: url(../../assets/imgs/bg-elite.png) no-repeat center/cover;
}
.luxy-banner__wrap-fun {
	background: url(../../assets/imgs/bg-fun.jpg) no-repeat center/cover;
}
.luxy-banner__wrap-goal {
	background: url(../../assets/imgs/bg-goal.png) no-repeat center/cover;
}
.luxy-banner__wrap-rich {
	background: url(../../assets/imgs/bg-rich.png) no-repeat center/cover;
}
.luxy-banner__wrap-senior {
	background: url(../../assets/imgs/bg-senior.png) no-repeat center/cover;
}
</style>


