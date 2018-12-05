<template>
	<div class="luxy-footer">
		<div class="footer-wrap">
			<div class="sitemap">
				<Row type="flex" justify="space-around">
					<Col span="4">
					<p class="title fs16">Find Your Match</p>
					<p class="description fs14">
						<!-- <a class="fs14" href="https://millionairedating.onluxy.com/9-interracial-relationship-advices-from-an-asian-girl-who-dated-a-white-guy.html">Interracial dating advice</a>-->
						<!-- <a class="fs14 link" href="https://www.onluxy.com/thebest/seattle-singles-online-speed-dating-site.html">Seattle Singles Dating</a> -->
						<!-- <a class="fs14 link" href="https://www.onluxy.com/thebest/boston-singles-online-speed-dating-site.html">Boston Singles Dating</a> -->
						<a class="fs14 link" href="https://millionairedating.onluxy.com/millionaire-club-luxy-has-launched-brand-new-feature-promo-codes.html">Luxy Promo Code</a>
					</p>
					</Col>
					<Col span="3">
					<p class="title fs16">Partners</p>
					<p class="description fs14">
						<!-- <a class="fs14" href="https://millionairedating.onluxy.com/9-interracial-relationship-advices-from-an-asian-girl-who-dated-a-white-guy.html">Interracial dating advice</a>-->
						<a class="fs14 link" href="https://www.loveblock.one/">LoveBlock</a>
					</p>
					</Col>
					<Col span="4">
					<div class="links" style="width: 100%;">
						<p class="title fs16">Community</p>
						<a class="fs14 link" href="https://millionairedating.onluxy.com/">Millionaire Dating Tips</a>
						<a class="fs14 link" href="https://www.onluxy.com/page?path=lovestory">Love Story</a>
						<!-- <a class="fs14" href="https://www.onluxy.com/page?path=moment-hot">Moments</a>
                        <a class="fs14" href="/millionaire-dating-in">User Map</a> -->
					</div>
					</Col>
					<Col span="4">
					<div class="links">
						<p class="title fs16">Company</p>
						<a class="fs14 link" rel="nofollow" href="https://www.onluxy.com/page?path=support">Contact</a>
						<a class="fs14 link" href="https://www.onluxy.com/page?path=faq">FAQ</a>
						<a class="fs14 link" rel="nofollow" href="https://www.onluxy.com/affiliate">Affiliate</a>
						<a class="fs14 link" rel="nofollow" href="https://www.onluxy.com/page?path=safety">Safety</a>
						<!-- <a class="fs14" href="https://www.onluxy.com/page?path=press">Press</a> -->
						<!-- <a class="fs14 bitcoins" href="javascript:;"><img style="width:15px;vertical-align: sub;height: 15px;" src="static/images/bit_coins.png" alt=""> We accept Bitcoin</a>&nbsp;&nbsp;&nbsp;&nbsp; -->
					</div>
					</Col>
					<Col span="8">
					<p class="title fs16">Now available for iPhone, Android & PC</p>
					<div class="download">
						<a rel="nofollow" class="dl-app-store link" href="http://go.onelink.me/app/aluxy" target="_blank"></a>
						<a rel="nofollow" class="dl-google link" href="http://go.onelink.me/app/luxy" target="_blank"></a>
					</div>
					<div class="follow">
						<div class="title fs16">Follow us:</div><br>
						<a rel="nofollow" class="icon facebook" href="https://facebook.com/onluxy" target="_blank" title="Follow us on Facebook"></a>
						<a rel="nofollow" class="icon twitter" href="https://twitter.com/onluxy" target="_blank" title="Follow us on Twitter"></a>
						<a rel="nofollow" class="icon google" href="https://google.com/+Onluxyapp" target="_blank" title="Follow us on Google+"></a>
						<a rel="nofollow" class="icon pinterest" href="https://pinterest.com/onluxy" target="_blank" title="Follow us on Pinterest"></a>
						<a rel="nofollow" class="icon instagram" href="http://instagram.com/onluxy" target="_blank" title="Follow us on Instagram"></a>
					</div>
					</Col>
				</Row>
			</div>
			<div class="copyright">
				<Row>
					<Col span="20">
					<p class="description copyright-text">© Copyright Luxy 2014 - {{currentYear}}. All rights reserved.</p>
					</Col>
					<Col span="4">
					<p class="links fs14">
						<a rel="nofollow" href="https://www.onluxy.com/page?path=terms">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a rel="nofollow" href="https://www.onluxy.com/page?path=privacy">Privacy</a>&nbsp;&nbsp;&nbsp;&nbsp;
					</p>
					</Col>
				</Row>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LuxyFooter',
		data() {
			return {
				gBaseUrl: window.gBaseUrl
			}
		},
		computed: {
			currentYear() {
				return new Date().getFullYear()
			}
		}
	}
</script>


<style lang="scss">
	$colorMain: #c69d6c;
	.luxy-footer {
	    background-color: #000;
	    padding: 50px 0;
	    .footer-wrap {
	        width: 1100px;
	        margin: 0 auto;
	        .fs16 {
	            font-size: 16px;
	        }
	        .fs14 {
	            font-size: 14px;
	        }
	        .title {
	            color: #fff;
	        }
	        .link {
	            color: #999;
	            margin-top: 15px;
	            display: block;
	        }
	        .sitemap {
	        }
	        @mixin icon-dl {
	            display: inline-block;
	            height: 38px;
	            width: 133px;
	            border: 1px solid #999;
	            border-radius: 8px;
	        }
	        .dl-app-store {
	            @include icon-dl;
	            background: url(./img/app_store.png) no-repeat 0/100%;
	            margin-right: 20px;
	        }
	        .dl-google {
	            @include icon-dl;
	            background: url(./img/google_play.png) no-repeat 0/100%;
	        }
	        .follow {
	            margin-top: 20px;
	            .icon {
	                height: 25px;
	                width: 25px;
	                display: inline-block;
	                margin-right: 5px;
	            }
	            .facebook {
	                background: url(./img/icon_fb.png) no-repeat 0/100%;
	            }
	            .twitter {
	                background: url(./img/icon_tw.png) no-repeat 0/100%;
	            }
	            .google {
	                background: url(./img/icon_google.png) no-repeat 0/100%;
	            }
	            .pinterest {
	                background: url(./img/icon_pt.png) no-repeat 0/100%;
	            }
	            .instagram {
	                background: url(./img/icon_ins.png) no-repeat 0/100%;
	            }
	        }
	        .copyright {
				margin-top: 40px;
				color: #c69d6c;
				font-size: 14px;
	        }
		}
		a {
			color: #c69d6c;
		}
	}
</style>
