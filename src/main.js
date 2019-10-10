import Vue from 'vue'
import App from './App.vue'

import Mint from 'mint-ui';
Vue.use(Mint);

import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import Vuex from 'vuex'
//Vue.use(Vuex)

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue)

import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant'
Vue.use(VueInstant)

//import axios from 'axios'
//Vue.prototype.$http = axios


import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper-3.4.2.min.css'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	components: {
		swiper,
		swiperSlide
	}
}

import router from './assets/js/router.js';
import '../node_modules/mint-ui/lib/style.css'
new Vue({
	el: '#app',
	render: h => h(App),
	router,
	
})