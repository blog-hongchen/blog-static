import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import config from './config';
import store from '@/store';
require('../baseCss/base.scss');

Vue.use(Router);

const mapObj = {
	'index': r => require.ensure([], () => r(require('@/page/index/index.vue')), 'index'),
	'notFound': r => require.ensure([], () => r(require('@/components/404.vue')), 'notFound'),
};
const router = new Router({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: "/",
			name: 'index',
			component: mapObj.index
		},
		{
			path: '*',
			name: 'other',
			component: mapObj.notFound
		}
	]
});
// router.beforeEach((to, from, next)=>{
// 	try {
// 		let layer = document.querySelectorAll('.page-layer');
// 		for(var i = 0;i<layer.length;i++){
// 			let item = layer[i];
// 			item.parentNode.removeChild(item);
// 		}
// 	} catch (e) {
// 	}
// 	next();
// });
Vue.use(config);
Vue.config.productionTip = false;
const app = new Vue({
	el: '#app',
	store,
	router: router,
	components: {App},
	template: '<App/>',
	// render: h => h('router-view')
});
/* eslint-disable no-new */
// new Vue({
// 	el: '#app',
// 	router,
// 	components: {App},
// 	template: '<App/>'
// })