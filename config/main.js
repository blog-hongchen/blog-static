import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';

import App from '@/App'
import config from './config';
import store from '@/store';

import "../src/lib/layui/layui.all";

require("../src/lib/layui/css/layui.css");
require('../baseCss/base.scss');
require('../src/lib/layui/css/layui.css');
require('../src/lib/layui/css/modules/code.css');
require('../src/lib/layui/css/modules/laydate/default/laydate.css');
require('../src/lib/layui/css/modules/layer/default/layer.css');
import '@/util/date';

import 'element-ui/lib/theme-chalk/index.css';
import {Button, Select, Input, Form, FormItem, Option, Loading, Pagination, Message} from 'element-ui';

Vue.use(Pagination);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Loading);

Vue.use(Router);
Vue.use(VueResource);
Vue.prototype.$message = Message;
const mapObj = {
	'index': r => require.ensure([], () => r(require('@/page/index/index.vue')), 'index'),
	'blog': r => require.ensure([], () => r(require('@/page/blog/index.vue')), 'index'),
	'editBlog': r => require.ensure([], () => r(require('@/page/blog/edit.vue')), 'index'),
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
			path: "/blog",
			name: 'blog',
			component: mapObj.blog
		},
		{
			path: "/editBlog/:blogInfo",
			name: 'editBlog',
			props: {"update": "update"},
			component: mapObj.editBlog
		},
		{
			path: "/addBlog",
			name: 'addBlog',
			props: {"update": "add"},
			component: mapObj.editBlog
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