import Vue from 'vue'
import Vuex from 'vuex'
import footer from './modules/nav'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
	modules: {
		footer
	},
	strict: debug,
	// plugins: debug ? [createLogger()] : []
});
// if (module.hot) {
// 	// 使 actions 和 mutations 成为可热重载模块
// 	module.hot.accept(['./modules/index'], () => {
// 		// 获取更新后的模块
// 		// 因为 babel 6 的模块编译格式问题，这里需要加上 .default
// 		// 加载新模块
// 		store.hotUpdate({
// 			modules: {
// 				footer
// 			}
// 		})
// 	})
// }
export default store;