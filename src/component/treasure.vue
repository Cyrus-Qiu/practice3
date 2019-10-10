<template>
	<main>
		<div class="header">
			<router-link to='/home'><img src="../../data/images/logo.png" class="img1" /></router-link>
			<p class="p1">登录</p>
			<router-link to='/gwc'><img src="../../data/images/shopping.png" class="img2" /></router-link>
		</div>
		<div class="tp">
			<img src="../../data/images/hwg.jpg" />
		</div>
		<div class="t-body">
			<div class="t-body-img">
				<img src="../../data/images/qjppz.gif" />
			</div>
			<nut-tab @tab-switch="tabSwitch" positionNav="top">
				<nut-tab-panel v-for="value in editableTabs" v-bind:key="value.tabTitle" :tabTitle="value.tabTitle" v-html="value.content">
				</nut-tab-panel>
			</nut-tab>
		</div>
	</main>
</template>
<script>
	export default {
		data() {
			return {
				show: true,
				positionNavCurr: 'top',
				editableTabs: [{
						'tabTitle': '镇店之宝',
						'content': `<div class="txd-body">
									<div class="paixu">
										<button class="px-left" v-on:click="change()">筛选</button>
										<div class="px-right">排序:综合</div>										
									</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time0"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time1"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time2"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time3"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time4"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time5"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time6"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time7"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time8"></div>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case">
												<img src="./data/images/txd.jpg">
												<p class="txd-p1">镇店之宝</p>
												<span class="span">￥209.71-￥890.88</span>
												<p class="txd-p2">BRAUN 博朗 促销</p>
												<div id="Time9"></div>
											</div>
										</div>
									</div>`
					},
					{
						'tabTitle': '下单立减',
						'content': `<div class="txd-body">
									<div class="paixu">
										<button class="px-left" v-on:click="change()">筛选</button>
										<div class="px-right">排序:综合</div>										
									</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>`
					},
					{
						'tabTitle': 'Z划算',
						'content': `<div class="txd-body">
									<div class="paixu">
										<button class="px-left" v-on:click="change()">筛选</button>
										<div class="px-right">排序:综合</div>										
									</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>`
					},
					{
						'tabTitle': 'Z秒杀',
						'content': `<div class="txd-body">
									<div class="paixu">
										<button class="px-left" v-on:click="change()">筛选</button>
										<div class="px-right">排序:综合</div>										
									</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>
										<div class="txd-box">
											<div class="txd-case1">
												<img src="./data/images/jbl.jpg">
												<p class="txd-p2">[Prime会员专享]JBL等品牌购买满1件下单享售价9折</p>
											</div>
										</div>`
					}
				]
			};
		},
		methods: {
			tabSwitch: function(index, event) {
				console.log(index + '--' + event.target);
			},
			change() {
				this.show = !this.show
			}
		},
		mounted() {
			window.onload = countdown;
			function countdown() {
				var today = new Date();
				var oldTime = today.getTime();
				var newDate = new Date(2020, 11, 1, 0, 0, 0);
				var newTime = newDate.getTime();
				var second = Math.floor((newTime - oldTime) / 1000);
				var remainSecond = second;
				var day = Math.floor(second / 86400);
				second %= 86400;
				var hour = Math.floor(second / 3600);
				second %= 3600;
				var minute = Math.floor(second / 60);
				second %= 60;
				var str = formatType(hour) + '<span class="time">:</span>' +
					formatType(minute) + '<span class="time">:</span>' +
					formatType(second) + '<span class="time"></span>';
				if(remainSecond > 0) {
					document.getElementById("Time0").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time1").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time2").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time3").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time4").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time5").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time6").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time7").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time8").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
					document.getElementById("Time9").innerHTML = ("<span>" + "剩余时间：" + str + "</span>");
				}
				setTimeout(countdown, 500);
			}

			function formatType(n) {
				return n >= 0 && n < 10 ? '0' + n : '' + n;
			}
		}
	};
</script>

<style>
	body,
	html {
		margin: 0;
		padding: 0;
	}
	
	.nut-tab {
		padding: 0px;
		border: none;
	}
	
	.txd-body {
		display: flex;
		flex-wrap: wrap;
	}
	
	.txd-box {
		width: 49%;
		border: 1px solid #EFEFEF;
	}
	
	.txd-case {
		width: 80%;
		margin: 0 auto;
	}
	
	.txd-case1 {
		width: 90%;
		margin: 0 auto;
	}
	
	.txd-box img {
		width: 70%;
	}
	
	.txd-box .txd-p1 {
		max-width: 80px;
		font-size: 0.8em;
		background: #ddd;
	}
	
	.txd-box .txd-p2 {
		padding: 20px 0;
		font-size: 1.2em;
		text-align: left;
	}
	
	.txd-box .span {
		color: #B12704!important;
		font-size: 1.2em!important;
	}
	
	#time,
	#time1,
	#time2,
	#time3,
	#time4,
	#time5,
	#time6,
	#time7,
	#time8,
	#time9 {
		text-align: left;
	}
	
	#time,
	#time1,
	#time2,
	#time3,
	#time4,
	#time5,
	#time6,
	#time7,
	#time8,
	#time9 span {
		text-align: left;
		color: #008A00;
		font-size: 0.9rem;
	}
	
	.paixu {
		width: 98.5%;
		border: 1px solid #EFEFEF;
		border-bottom: #000;
	}
	
	.px-left {
		float: left;
		font-size: 1rem;
		padding: 10px 20px;
	}
	
	.px-right {
		float: right;
		font-size: 1rem;
		padding: 10px 20px;
	}
	
	button.px-left {
		border: none;
		background: none;
		outline: none;
	}
</style>
<style scoped="scoped">
	.header {
		width: 100%;
		height: 48px;
		background: -webkit-linear-gradient(top, #fff, #eee);
	}
	
	.img1 {
		width: 65px;
		height: 28px;
		position: absolute;
		left: 20px;
		top: 10px
	}
	
	.p1 {
		position: absolute;
		right: 60px;
		top: 5px;
		color: blueviolet;
	}
	
	.img2 {
		width: 32px;
		height: 32px;
		position: absolute;
		right: 20px;
		top: 10px;
	}
	
	.search {
		padding: 10px 10px 0px 10px;
	}
	
	.tp img {
		width: 100%;
	}
	
	.t-body {
		padding: 0 0.3rem;
	}
	
	.t-body-img img {
		width: 100%;
	}
	
	.nut-tab-item {
		height: auto;
		border: none;
	}
</style>