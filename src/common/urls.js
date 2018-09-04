const API = {
	production: '',
	development: 'http://127.0.0.1:8086/api'
};
let apiUrl = "", token = "";
const urls = {
	//线上正式接口地址
	production: {
		blogList: 'https://api.aihongchen.cn/api/blogList',
	},
	localHost: {},
	//Mock接口地址，方便调试
	development: {
		blogList: '/blogList/',
	}

};
const expUrl = urls[process.env.NODE_ENV]; //先默认为对应环境的url地址

if (process.env.NODE_ENV == 'development') {
	/*逻辑判断：在online模式下存在的url，若dev下不存在，则将其动态添加到目前的对象上；*/
	for (var key in urls.production) {

		if (!expUrl[key]) {
			expUrl[key] = urls.production[key];
		} else {
			expUrl[key] = API[process.env.NODE_ENV] + expUrl[key];
		}
	}
}
export default {
	...expUrl
}
