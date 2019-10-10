<template>
	<main>
		<div class="header">
			<router-link to='/home'><img src="../../data/images/logo.png" class="img1" /></router-link>
			<router-link to='/gwc'><img src="../../data/images/shopping.png" class="img2" /></router-link>
		</div>
		<div class="gwc-header">
			<p>{{msg}}:{{money}}</p>
			<button class="jsan">进入结算中心</button>
		</div><br />
		<div class="gwc-body">
			<div class="gwc-box" v-for="(pro,index) in prolist">
				<div class="gwc-right">
					<tr>						
						<td class="gwc-tdleft"><img :src="pro.img"/></td>
						<td class="gwc-tdright">
							<p>{{pro.proName}}</p>
							<p class="money">{{pro.proPrice | filtermoney(pro.proPrice)}}</p>							
							<div class="hwg-img">
								<img src="../../data/images/hwgtp.png" />
							</div>
							<p>销售和发货商:
								<a href="">亚马逊美国</a>
							</p>
						</td>
					</tr>
				</div>
				<div class="gwc--box-footer">
					<input type="button" id="" value="-" @click="dels(pro)"/>
					<input type="text" id="" value=""  v-model="pro.proCount"/>
					<input type="button" id="" value="+" @click="adds(pro)"/>
					<p>当前商品总价：{{pro.proPrice*pro.proCount | filtermoney(pro.proPrice*pro.proCount)}}</p>
				</div>
			</div>
		</div>
		<div class="th" @click="add()">
			<tr>
				<td class="th-left">
					<h3>无忧退货</h3>
					<p>部分商品可享受7天无理由退货。</p>
				</td>
				<td class="th-right"><img src="../../data/images/th.png" /></td>
			</tr>
		</div>
		
		<transition name='fade'>
			<div class="modal" v-show="show">
				<span class="del" @click="del()">×</span>
				<h3>无忧退货</h3>
				<p>部分商品可享受7天无理由退货。</p>
				<p>我们将在商品退回亚马逊库房并确认符合退换货政策要求后， 为您安排退款。</p>
			</div>
		</transition>
		<router-link to='/home'>
			<div class="jxgw">
				<p>继续购物</p>
			</div>
		</router-link>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				prolist:[
					{
						img:require('../../data/images/cnxh.jpg'),
						proName:"Philips 飞利浦 Sonicare ProtectiveClean 4300 电动牙刷 带旅行牙刷盒 - 格调黑 (英国 两孔浴室插头) - HX6800/03",
						proPrice:131.06,
						proCount:0
					},
					{
						img:require('../../data/images/huawei.jpg'),
						proName:"华为 P30 Pro 128GB+8GB RAM (VOG-L29) 40MP LTE 工厂解锁 GSM 智能手机（国际版）（黑色）",
						proPrice:5906.96,
						proCount:0
					},
					{
						img:require('../../data/images/weixiao.jpg'),
						proName:"MotorMood 18 CarMoji - 发光汽车微笑贴花",
						proPrice:148.73,
						proCount:0
					},
					{
						img:require('../../data/images/yifu.jpg'),
						proName:"Find 女士软外套",
						proPrice:284.50,
						proCount:0
					}
				]
			}
		},
		computed : {
			money(){
				var money=0;
				for (let i=0;i<this.prolist.length;i++){
					money +=Number(this.prolist[i].proPrice*this.prolist[i].proCount)
				}
				return "￥"+money.toFixed(2)+"元"
			},
			msg(){
				var msg=0;
				for (let i=0;i<this.prolist.length;i++){
					msg +=Number(this.prolist[i].proCount)
				}
				return "小计("+msg+"件商品)"
			}
		},
		methods: {
			add() {
				this.show = !this.show
			},
			del() {
				this.show = !this.show
			},
			dels(pro){
				return pro.proCount<=0 ? pro.proCount=0 : pro.proCount--;
			},
			adds(pro){
				pro.proCount++
			}
		},
		filters:{
			filtermoney(val){
				return "￥"+val.toFixed(2)+"元";
			}
		}
	}
</script>
<style type="text/css">
	body {
		margin: 0;
		padding: 0;
	}
	
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
</style>
<style scoped="scoped">
	p {
		margin: 10px 0;
	}
	
	.gwc-header p {
		text-align: left;
		padding-left: 15px;
		font-size: 1.5em;
		color: #000;
	}
	
	.jsan {
		width: 95%;
		padding: 15px 0;
		font-size: 1.2em;
		background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
	}
	
	.gwc-box {
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		padding: 20px 30px;
	}
	
	.gwc-body img {
		width: 70px;
		display: table-cell;
		vertical-align: middle;
		margin: 0 auto;
	}
	
	.hwg-img img {
		margin-left: 0;
	}
	
	.gwc-tdleft {
		width: 30%;
	}
	
	.gwc-tdright {
		width: 70%;
		display: table-cell;
		vertical-align: middle;
		text-align: left;
	}
	
	input[type=checkbox] {
		width: 25px;
		height: 25px;
	}
	
	select {
		width: 100px;
		height: 40px;
		background: rgb(221, 221, 221);
	}
	
	.gwc--box-footer {
		text-align: left;
		padding-left: 30px;
	}
	
	.gwc--box-footer input {
		padding: 10px 10px;
		margin: 0 5px;
	}
	
	.money {
		color: #B12704;
	}
	
	.th {
		display: table-cell;
		vertical-align: middle;
		text-align: left;
		margin: 0 auto;
		padding: 10px 20px;
		border-bottom: 1px solid #ddd;
	}
	
	.th h3 {
		font-weight: 900;
	}
	
	.th img {
		width: 80px;
	}
	
	.th-left {
		width: 300px;
	}
	
	.modal {
		position: fixed;
		bottom: 0;
		text-align: left;
		padding: 10px 20px;
	}
	
	.del {
		position: absolute;
		bottom: 150px;
		right: 30px;
	}
	.fade-enter,.fade-leave-to {
		height: 0px;
	}
	
	.fade-enter-to,
	.fade-leave {
		height: 150px;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all 1s;
	}
	
	.jxgw {
		margin-top: 30px;
		margin-left: 10px;
		margin-right: 10px;
		border: 1px solid #ddd;
	}
	
	.jxgw p {
		color: #000;
	}
	.gwc--box-footer{
		text-align: center;
	}
	input[type=text]{
		width: 50px;
	}
</style>