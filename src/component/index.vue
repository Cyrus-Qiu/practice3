<template>
	<main id="index">
		<div class="header">
			<router-link to='/home'><img src="../../data/images/logo.png" class="img1" /></router-link>
			<router-link to='/login'><p class="p1">登录</p></router-link>
			<router-link to='/gwc'><img src="../../data/images/shopping.png" class="img2" /></router-link>
		</div>
		<router-view></router-view>		
	</main>
</template>
<script>
	export default {
		name: 'index',
	}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	.header{
		width: 100%;
		height: 48px;
		background: -webkit-linear-gradient(top,#fff,#eee);
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