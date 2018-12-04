<template>
	<div class="luxy-banner__wrap" :class="bgType">
		
	</div>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		imgType: String,
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
}
.luxy-banner__wrap-global {
	background: url(../../assets/imgs/global.png) no-repeat center/cover;
}
.luxy-banner__wrap-elite {
	background: url(../../assets/imgs/elite.png) no-repeat center/cover;
}
.luxy-banner__wrap-fun {
	background: url(../../assets/imgs/fun.png) no-repeat center/cover;
}
.luxy-banner__wrap-goal {
	background: url(../../assets/imgs/goal.png) no-repeat center/cover;
}
.luxy-banner__wrap-rich {
	background: url(../../assets/imgs/rich.png) no-repeat center/cover;
}
.luxy-banner__wrap-senior {
	background: url(../../assets/imgs/senior.png) no-repeat center/cover;
}
</style>


