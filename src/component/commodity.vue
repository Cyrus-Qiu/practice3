<template>
	<main>
		<div class="header">
			<router-link to='/home'><img src="../../data/images/logo.png" class="img1" /></router-link>
			<router-link to='/gwc'><img src="../../data/images/shopping.png" class="img2" /></router-link>
		</div>
		<nut-tab @tab-switch="tabSwitch" positionNav="left">
			<nut-tab-panel v-for="value in editableTabs" v-bind:key="value.tabTitle" :tabTitle="value.tabTitle" v-html="value.content">
			</nut-tab-panel>
		</nut-tab>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				positionNavCurr: 'left',
				editableTabs: [{
						'tabTitle': '为你推荐',
						'content': `<p>推荐分类</p>
							<div class="phone-box">
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
								<div class="phone"><router-link to='/phone'><p style="text-align: center">手机</p><img src="./data/images/huawei.jpg"></router-link></div>
							</div>`
					},
					{
						'tabTitle': 'kindle商店',
						'content': '<p>kindle商店</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '服饰箱包',
						'content': '<p>男装</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '鞋靴',
						'content': '<p>男鞋</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '运动户外',
						'content': '<p>运动户外服饰</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '个护健康',
						'content': '<p>营养保健品</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '美容化妆',
						'content': '<p>面部护肤</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '母婴',
						'content': '<p>奶粉</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '玩具',
						'content': '<p>玩具</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '电脑产品',
						'content': '<p>电脑组件</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '家居生活',
						'content': '<p>床上用品</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '厨具',
						'content': '<p>餐具</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '食品',
						'content': '<p>食品</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '小家电',
						'content': '<p>厨房电器</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '数码影音',
						'content': '<p>音箱</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '家居装修',
						'content': '<p>厨卫</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '游戏娱乐',
						'content': '<p>游戏娱乐</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '办公用品',
						'content': '<p>书写工具</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '钟表',
						'content': '<p>男士钟表</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '珠宝首饰',
						'content': '<p>女士饰品</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '乐器',
						'content': '<p>吉他</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '摄影摄像',
						'content': '<p>镜头</p><div>倒闭了，不卖了！！</div>'
					},
					{
						'tabTitle': '手机通讯',
						'content': '<p>手机通讯</p><div>倒闭了，不卖了！！</div>'
					},
				]
			};
		},
		methods: {
			tabSwitch: function(index, event) {
				console.log(index + '--' + event.target);
			}
		}
	};
</script>

<style>	
	.nut-tab{
		padding: 0;
	}
	.nut-tab-item{
		height: 100%;
		position: fixed;
		width: 73%;
		left: 26%;
		background: #efefef;
	}
	.nut-tab-title-leftnav{
		height: 150vh;
		width: 25%;
	}
	.nut-tab-leftnav{
		top: 48px;
	}
	.nut-tab-link{
		margin: 0 auto;
	}
	.nut-title-nav-leftnav{
		padding-left:0 ;
	}
	.nut-tab-title-leftnav .nut-tab-active{
		background: #efefef;
	}
	.nut-tab-title-leftnav .nav-bar-left{
		transition:all 0.2s;
	}
	.nut-tab-title-leftnav .nut-title-nav{
		border-bottom: 1px solid #ededed;
	}
	p{
		text-align: left;
	}
	.phone-box{
		display: flex;
		flex-wrap: wrap; 
	}
	.phone{		
		width: 28%;
		height: 110px;
		background: #fff;
		float: left;
		margin-left: 10px;
		margin-top: 10px;
	}
	.phone img{
		width: 50px;
	}
</style>
<style scoped="scoped">
	body{
		margin: 0;
		padding: 0;
	}
	.header{
		width: 100%;
		height: 48px;
		background: -webkit-linear-gradient(top,#fff,#eee);
		position: fixed;
		top: 0;
		z-index: 999;
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
		top: 0px;
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