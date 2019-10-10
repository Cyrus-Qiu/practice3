<template>
	<main>
		<div class="header">
			<router-link to='/home'><img src="../../data/images/logo.png" class="img1" /></router-link>
			<router-link to='/login'>
				<p class="p1">登录</p>
			</router-link>
			<router-link to='/gwc'><img src="../../data/images/shopping.png" class="img2" /></router-link>
		</div>
		<div class="shop-box">
			<p>Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷 带旅行牙刷盒 - 格调黑 (英国 两孔浴室插头) - HX6800/03</p>
			<span>海外自营</span>
			<span>亚马逊英国畅销商品</span>
			<span>在电动牙刷中</span>
			<mt-swipe :auto="1000">
				<mt-swipe-item><img src="../../data/images/yashua.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="../../data/images/yashua.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="../../data/images/yashua.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="../../data/images/yashua.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="../../data/images/yashua.jpg" /></mt-swipe-item>
			</mt-swipe>
			<div>
				<tr>
					<td class="td1">价格：</td>
					<td class="td2"><span class="money">￥679.45</span><br />+￥131.06预估运费及进口税费<br /><br /><img src="../../data/images/hwgtp.png" /></td>
				</tr><br />
				<tr>
					<td class="td1">支付方式:</td>
					<td class="td2">目前支持信用卡、借记卡、支付宝和微信支付。暂不支持礼品卡付款。</td>
				</tr>
			</div>
			<div class="kc">
				<router-link to='/peisong'>
					<tr class="psz">
						<td>配送至：<br />广州 天河区</td>
					</tr>
				</router-link>

				<tr>
					<td>
						<p class="kcjs">库存中仅剩 2 件（更多商品正在运送途中）</p>
						<p>由<b>亚马逊美国</b>从境外直接销售并发货, 购买行为受亚马逊海外购使用条件和美国法律的约束。
							<a href="">了解更多</a>
						</p>
						<p>送达日期：如果在结账时选择<b>海外购加速配送</b>, 预计最快<b>下周三(10月16日)–10月21日</b></p>
					</td>
				</tr>
			</div>
			<div class="gwc">
				<button class="gwcan">
					<tr>
						<td>
							<img src="../../data/images/gm.png"/>
						</td>
						<td class="gm">
							<span>现在购买</span>
						</td>
					</tr>
				</button>
				<router-link to="/gwc">
					<button class="gwcan">
						<tr>
							<td>
								<img src="../../data/images/shopping.png"/>
							</td>
							<td class="gm">
								<span>加入购物车</span>
							</td>
						</tr>				
					</button>
				</router-link>
			</div>
		</div>
	</main>
</template>
<script>
	export default {
		data() {
			return {
				msg: '格调黑',
				show: true
			}
		},
		methods: {
			change() {
				this.show = !this.show
			}
		},

	}
</script>

<style scoped="scoped">
	body {
		margin: 0;
		padding: 0;
	}
	
	.mint-swipe-items-wrap img {
		width: 50%;
	}
	
	.mint-swipe {
		height: 200px;
	}
	
	.modal-box {
		width: 100%;
		height: 300px;
		position: fixed;
		bottom: 0;
		background: white;
		display: none;
	}
	
	.modal {
		display: none;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99;
		background-color: rgba(0, 0, 0, .9);
	}
	
	.header {
		width: 100%;
		height: 48px;
		background: -webkit-linear-gradient(top, #fff, #eee);
	}
	
	.shop-box {
		padding: 0 15px;
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
	
	.mint-swipe-indicators {
		bottom: 20px;
	}
	
	.td1 {
		width: 25%;
		font-size: 1.1em;
		text-align: right;
	}
	
	.td2 {
		text-align: left;
		font-size: 1.1em;
	}
	
	.money {
		font-size: 1.2em;
		color: #B12704;
	}
	
	.kc {
		border: 1px solid #ddd;
		text-align: left;
	}
	
	.kc .psz {
		color: #000;
	}
	
	.kc .psz td {
		border-bottom: 1px solid #ddd;
	}
	
	.kc td {
		font-size: 1.3em;
		text-align: left;
		padding: 10px 20px;
	}
	
	.kc .kcjs {
		color: rgb(0, 118, 0);
	}
	
	.gwc img {
		width: 50px;
	}
	
	.gwcan {
		text-align: left;
		margin: 10px 0;
		width: 100%;
		background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
	}
	
	.gm {
		padding-left: 15px;
		display: table-cell;
		vertical-align: middle
	}
</style>