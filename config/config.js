import {log, urls, updateHtmltitle, setPiaoNiuQuery, sessionData} from '@/common/common';
let config = {};
let u = navigator.userAgent;
//基于外部刷新

config.install = function (Vue, options) {

	// Vue.prototype.domain = '';
	window.Vue = Vue;
	//混合 包括全局路由控制的响应逻辑等
	Vue.mixin({
		created() {
		},
		beforeRouteLeave(to, from, next) {
			next(true);
		},
		//全局路由钩子，非详情页，禁用分享，更新title
		beforeRouteEnter(to, from, next) {
			let title = '醉梦荭尘';
			switch (to.name) {
				case 'index':
					title = '醉梦荭尘';
					break;
				default:
					title = '404';
					break;
			}
			next(vm => {
				window.vm = vm;
				if (to.name !== 'index' && to.name !== '/' && to.name !== "index.php") {
					// if (!sessionData.get("token")) {
					// 	vm.$router.push({name: 'login'});
					// }
				}
				vm.customComponentList = {
					'top-nav': require('@/components/top-nav/index.vue'),
				};
				// vm.customComponentList = {
				// 	'footerComponent': require('@/components/footer/footer.vue'),
				// };
				if (title) {
					updateHtmltitle(title)
				}
			});
		}
	});

	//刷新页面
	Vue.prototype.reloadPage = function () {
		location.reload();
	};
	//更新标题
	Vue.prototype.updateTitle = function () {
		updateHtmltitle(localData.get('itemInfo').itemTitle || '', staticUri + '/src/images/pic.png');
	};

	Vue.prototype.getQueryString = function (name) {
		var reg = new RegExp("(^|&|#)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.href.match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
};


export default config;