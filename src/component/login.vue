<template>
	<main>
		<div class="header">
			<router-link to='/home'><img src="../../data/images/logo.png" class="img1" /></router-link>
		</div>
		<div class="login-head">
			<h3>欢迎</h3>
		</div>
		<div class="login-body">
			<div id="app">
				<ul class="tab-tilte">
					<input type="radio" name="radio" checked="checked" id="" value="" @click="cur=0" :class="{active:cur==0}">
					<span>创建账户.Amazon的新客户？</span><br />
					<input type="radio" name="radio" id="" value="" @click="cur=1" :class="{active:cur==1}" />
					<span>登录.已注册客户？</span>
				</ul>
				<div class="tab-content">
					<div v-show="cur==0">
						<div class="register">
							<input type="text" name="" id="" value="" placeholder="名称" />
							<p>我们将向您发送文本验证。</p>
							<div class="xiala">
								<select name="">
									<option value="">CN+86</option>
								</select>
								<input type="text" name="" id="" value="" />
							</div>
							<input type="email" name="" id="" value="" placeholder="电子邮件地址(可选)" />
							<input type="password" name="" id="" value="" placeholder="创建密码" />
							<p>密码必须至少为 6 个字符。</p>
							<input type="checkbox" name="" id="" value="" />
							<span>显示密码</span><br />
							<input type="checkbox" name="" id="" value="" />
							<span>我已阅读并同意网站的<b>使用条件</b>及<b>隐私声明</b></span>
							<input type="button" id="" name="" value="继续" />
						</div>
					</div>
					<div v-show="cur==1">
						<div class="login">
							<input type="email" name="" id="" value="" placeholder="手机号/邮箱" />
							<input type="password" name="" id="" value="" placeholder="Amazon密码" />
							<tr>
								<td style="width: 75%;">
									<input type="checkbox" name="" id="" value="" />
									<span>显示密码</span>
								</td>
								<td style="width: 15%;">
									<b style="text-align: right;">忘记密码</b>
								</td>
							</tr>

							<tr>
								<input type="checkbox" name="" id="" value="" />
								<span>记住登录状态</span>
							</tr>

							<input type="button" id="" name="" value="登录" />
							<p>微信注册用户可以使用绑定的手机号和密码登录。若尚未设置密码，<b>请点击此处设置。</b></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="login-footer">
			<p>版权所有© 1996-2019，亚马逊公司或其关联公司</p>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				cur: 0
			}
		},
		methods: {
			change() {
				this.show = !this.show
			}
		},
		mounted: {

		}
	}
</script>

<style>
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
</style>
<style scoped="scoped">
	.login-head {
		text-align: left;
		margin-left: 40px;
	}
	
	h3 {
		font-size: 2em;
	}
	
	form {
		text-align: left;
	}
	
	.login-body {
		width: 85%;
		margin: 0 auto;
		padding: 0px 30px;
		border: 1px solid #ddd;
		background: ;
	}
	.login-footer{
		width: 70%;
		margin: 0 auto;
	}
	.login-footer p{
		color: #aaa;
		font-size:11px;
	}
	input {
		margin: 10px 0;
	}
	
	.register {
		text-align: left;
	}
	
	input[type=email],
	input[type=password],
	input[type=text] {
		width: 100%;
		height: 50px;
	}
	
	select {
		width: 25%;
		height: 50px;
		float: left;
	}
	
	.xiala input[type=text] {
		width: 70%;
		float: right;
		margin: 0;
	}
	
	input[type="button"] {
		width: 100%;
		height: 50px;
		background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
		border-radius: 5px;
	}
	
	p {
		font-size: 1em;
	}
	
	span {
		font-size: 1em;
	}
	
	b {
		color: #0066c0;
		font-size: 0.8em;
	}
	
	.login input {
		margin: 10px 0;
		border-top: 1px solid #ddd;
		border-left: 1px solid #ddd;
	}
	ul{
		text-align: left;
	}
	tr{
		text-align: left;
	}
</style>