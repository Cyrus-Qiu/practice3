import VueRouter from 'vue-router'
import home from '../../component/home.vue'
import index from '../../component/index.vue'
import commodity from '../../component/commodity.vue'
import treasure from '../../component/treasure.vue'
import shop from '../../component/shop.vue'
import gwc from '../../component/gwc.vue'
import login from '../../component/login.vue'
import peisong from '../../component/peisong.vue'
export default new VueRouter({
	routes: [
		{
			path: '/',
			component: index,
			children: [{

				path: '/home',
				component: home,
			}],
			redirect: '/home'
		},
		{
			path:'/commodity',
			component:commodity
		},
		{
			path: '/treasure',
			component: treasure
		},
		{
			path: '/shop',
			component: shop
		},
		{
			path:'/gwc',
			component:gwc
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/peisong',
			component:peisong
		},
		{
			path: '/*',
			redirect: '/home'
		},
		
	]
})
