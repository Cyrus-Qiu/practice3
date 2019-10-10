<template>
	<main>
		<div class="nav">
			<div>
				<p class="nav1 li1">选择</p>
			</div>
			<ul class="ul1">
				<li>
					<router-link to="/commodity"><span class="li1">商品分类</span></router-link>
					<router-link to="/treasure"><span class="li1">镇店之宝</span></router-link>
					<span class="li1">奥特莱斯</span>
				</li>
			</ul>
		</div>
		<div class="search">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		</div>

		<mt-swipe :auto="1000" v-for="(item,i) in img">
			<mt-swipe-item><img :src="item.img" /></mt-swipe-item>
			<mt-swipe-item><img :src="item.img1" /></mt-swipe-item>
		</mt-swipe>
		<div class="">
			<div class="gwm-SpotlightCard">
				<img src="../../data/images/p1.jpg" />
			</div>
			<div class="gwm-SpotlightCard">
				<img src="../../data/images/p2.jpg" />
			</div>
			<div class="gg">
				<img src="../../data/images/gg.png" />
			</div>
			<div class="duihuan">
				<img src="../../data/images/duihuan.gif" />
			</div>
			<div class="duihuan">
				<img src="../../data/images/hwg.gif" />
			</div>
		</div>
		<div class="hwg">
			<div class="hwg-box">
				<div class="hwg-header">
					<span><img src="../../data/images/tao.png"/></span>
					<span>海外购  镇店之宝</span>
					<span class="span-p">周三会员日</span>
				</div>
				<div class="hwg-body">
					<div class="hwg-left">
						<i class="a-icon">PRIME会员专享</i>
						<span class="a-size-base">柳宗理等日本厨具</span>
						<span class="a-size-small">￥53.23 - ￥706.59</span>
						<div id="Time0"></div>
					</div>
					<div class="hwg-right">
						<div class="hwg-right-img">
							<img src="../../data/images/guo.jpg" />
						</div>

					</div>
				</div>
				<div class="hwg-body hwg-top">
					<div class="hwg-left">
						<i class="a-icon">PRIME会员专享</i>
						<span class="a-size-base">柳宗理等日本厨具</span>
						<span class="a-size-small">￥53.23 - ￥706.59</span>
						<div id="Time1"></div>
					</div>
					<div class="hwg-right">
						<div class="hwg-right-img">
							<img src="../../data/images/guo.jpg" />
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="qqpp">
			<div class="qqpp-header">
				<span class="qqpp-header-left">全球品牌精选</span>
				<span class="qqpp-header-right">查看更多</span>
			</div>
			<div class="qqpp-body">
				<div class="qqpp-body-left">
					<img src="../../data/images/G1.jpg" />
				</div>
				<div class="qqpp-body-right">
					<img src="../../data/images/G2.jpg" />
					<img src="../../data/images/G3.jpg" />
				</div>
			</div>
			<div class="qqpp-footer">
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
				<div class=""><img src="../../data/images/Sony.jpg" /></div>
			</div>
		</div>
		<div class="xunhuan">
			<div class="cnxh">
				<div class="cnxh-header">
					<p>猜你喜欢</p>
				</div>
				<div class="cnxh-body">
					<div v-for="(item,i) in list" v-if='i=10'>
						<router-link to="/shop">
							<img :src="item.img" />
							<p class="wenzi1">{{item.con}}</p>
							<p class="p2">{{item.money}}</p>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				img: [{
					img: require('../../data/images/lb1.jpg'),
					img1: require('../../data/images/lb2.jpg'),
				}],
				list: [{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
					{
						img: require('../../data/images/cnxh.jpg'),
						con: 'Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷带便携盒',
						money: '从￥1000起'
					},
				]
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
					document.getElementById("Time0").innerHTML = ("距结束：<span>" + str + "</span>");
					document.getElementById("Time1").innerHTML = ("距结束：<span>" + str + "</span>");
				}
				setTimeout(countdown, 500);
			}

			function formatType(n) {
				return n >= 0 && n < 10 ? '0' + n : '' + n;
			}
		}
	}
</script>

<style>
	body {
		font-size: 12px;
	}
	
	.nav1.li1 {
		margin: 0;
		margin-left: 20px;
		float: left;
	}
	
	.nav {
		padding: 5px 0;
		background: #f8f8f8;
	}
	
	.ul1 {
		text-align: left;
		margin-left: 20px;
		margin-bottom: 0;
	}
	
	.ul1 .li1 {
		margin-right: 20px;
	}
	
	.li1 {
		text-decoration: none;
		color: #666;
	}
	
	.nav div {
		height: 20px;
	}
	
	.mint-searchbar {
		padding: 1px;
		border-radius: 4px;
	}
	
	.mint-search {
		height: 7vh;
	}
	
	.mint-swipe {
		width: 100%;
		height: 150px;
	}
	
	.mint-swipe img {
		width: 414px;
	}
	
	.gwm-SpotlightCard {
		background-size: 100% auto;
		background-repeat: no-repeat;
		max-width: 414px;
		margin: 0 auto;
		margin-top: -1px;
		width: 100%;
		position: relative;
		vertical-align: top;
		border: 0;
	}
	
	.gwm-SpotlightCard img {
		width: 100%;
		max-width: 414px;
		display: block;
	}
	
	.gwm-SpotlightCard-column {
		width: 20%;
		height: 100%;
		float: left;
	}
	
	.gg {
		width: 100%;
	}
	
	.gg img {
		width: 100%;
	}
	
	.duihuan {
		width: 100%;
	}
	
	.duihuan img {
		width: 100%;
	}
	
	.hwg-body {
		width: 100%;
		height: 100px;
		margin: 10px 0;
	}
	
	.hwg-box {
		margin: 0 20px;
	}
	
	.hwg-header {
		text-align: left;
		color: #000;
		font-size: 20px;
	}
	
	.hwg-header img {
		height: 20px;
	}
	
	.hwg-header span {
		line-height: 20px;
	}
	
	.span-p {
		color: #666;
		font-size: 13px;
	}
	
	.hwg-left {
		width: 50%;
		float: left;
		background-color: #FFFBF5;
	}
	
	.hwg-right {
		width: 50%;
		background-color: #FFFBF5;
		float: right;
	}
	
	.hwg-right-img {
		height: 100px;
	}
	
	.hwg-right .hwg-right-img img {
		width: 100%;
		height: 76px;
	}
	
	.a-icon {
		display: block;
		font-style: normal;
		background: #0079AF;
		color: #fff;
		font-size: 1.1rem;
	}
	
	.a-size-base {
		font-size: 1.3rem;
		font-style: normal;
		font-weight: bolder;
	}
	
	.a-size-small {
		font-size: 1.2rem;
		color: red;
	}
	
	.qqpp {
		margin: 20px 20px;
	}
	
	.qqpp-header {}
	
	.qqpp-header .qqpp-header-left {
		font-size: 1.3rem;
		float: left;
	}
	
	.qqpp-header .qqpp-header-right {
		font-size: 1rem;
		color: #0066c0;
	}
	
	.qqpp-body {}
	
	.qqpp-body-left {
		width: 49.5%;
	}
	
	.qqpp-body-left img {
		float: left;
	}
	
	.qqpp-body-right {
		width: 49.5%;
		float: right;
	}
	
	.qqpp-body img {
		width: 100%;
	}
	
	.qqpp-footer {
		width: 100%;
		height: 130px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		justify-content: space-between;
	}
	
	.qqpp-footer>div {
		width: 24%;
		height: 45%;
		display: flex;
		align-items: center;
	}
	
	.qqpp-footer>div:nth-child(odd) {
		background: #FFFAF3;
	}
	
	.qqpp-footer>div:nth-child(even) {
		background: #F4F4F4;
	}
	
	.qqpp-footer>div img {
		width: 90%;
	}
	
	#lbt-body img {
		width: 50%;
	}
	
	.cnxh-body {
		display: flex;
		flex-wrap: wrap;
	}
	
	.cnxh-body div {
		width: 49.5%;
		padding: 10px 0;
		border: 1px solid #F4F4F4;
		border-right: none;
	}
	
	.cnxh-body div img {
		width: 90%;
	}
	
	.cnxh-body div .wenzi1 {
		font-size: 1rem;
		text-align: left;
		margin-left: 1rem;
		font-weight: normal;
	}
	
	.cnxh-body div .p2 {
		color: #B12704;
		text-align: left;
		margin-left: 2rem;
	}
</style>
<style scoped="scoped">
	.search {
		padding: 10px 10px 0px 10px;
	}
	
	p {
		color: #000;
	}
</style>