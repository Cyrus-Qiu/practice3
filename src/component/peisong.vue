<template>
	<main>
		<div class="back">
			<p class="back-left">
				<span @click="back()">返回</span>
			</p>
		</div>
		<div id="app">
			<div id="add">
				<ul>
					<li v-for="(item,index) in list" v-bind:key="item" v-bind:class="{active:num==index}" v-on:click="Num(index)">
						{{item}}
					</li>
				</ul>
			</div>
			<div id="tab">
				<div v-for='(a,index) in pro' v-show="index == num">
					<div class="dizhi" v-on:click="Num(index+1)">
						<ul>
							<li>{{a.aaa}}</li>
						</ul>
					</div>
					<div class="dizhi">
						<ul>
							<li>{{a.bbb}}</li>
						</ul>
					</div>
					<div class="dizhi">
						<ul>
							<li>{{a.ccc}}</li>
						</ul>
					</div>
					<div class="dizhi">
						<ul>
							<li>{{a.ddd}}</li>
						</ul>
					</div>
					<div class="dizhi">
						<ul>
							<li>{{a.eee}}</li>
						</ul>
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
				num: 0,
				list: ["选择省", "选择市", "选择区"],
				pro: [{
						aaa: '广东',
						bbb: '福建',
						ccc: '湖南',
						ddd: '湖北',
						eee:'黑龙江',
						
					},
					{
						aaa: '广州',
						bbb: '深圳',
						ccc: '珠海',
						ddd: '汕头',
						eee:'梅州'
					},
					{
						aaa: '天河',
						bbb: '白云',
						ccc: '越秀',
						ddd: '番禺',
						eee: '黄埔'
					}
				]
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			Num(index) {
				this.num = index;
			}
		}
	}
</script>
<style>
	html,body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
</style>
<style scoped="scoped">
	
	
	.active {
		color: #fff;
		background: darkgoldenrod;
	}
	
	#app {
		width: 100%;
		height: 400px;
		margin: 30px auto;
	}
	
	#add {
		width: 100%;
		height: 60px;
		background-color: #ddd;
	}
	
	ul {
		width: 100%;
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
		color: #717181;
		font-size: 16px;
		line-height: 60px;
	}
	
	ul li {
		flex: 1;
		text-align: center;
		cursor: pointer;
	}
	
	#tab {
		margin: 0 auto;
		padding: 40px 20px;
		color: #999;
		font-size: 14px;
		background-color: #fff;
	}
	.back{
		background: #f2f2f2;
		padding: 5px;
	}
	.dizhi {
		font-size: 1.5rem;
	}
	.dizhi li{
		height: 50px;
	}
	p.back-left{
		text-align: left;
		margin-left: 20px;
	}
</style>