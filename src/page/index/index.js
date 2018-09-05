import Vue from 'vue';

import {ajax, sessionData} from '../../common/common';
import urls from '../../common/urls';

Vue.filter('dateFormat', function (date) {
	return (new Date()).formatYearDateTime(date);
});

export default {
	data() {
		return {
			list: [],
			searchObj: {
				page: "1",
				size: "1",
				title: "",
				content: ""
			},
			totalPage: 1
		}
	},
	computed: {},
	components: {},
	created() {
	},
	mounted() {
		if (sessionData.get("blogList") && sessionData.get("blogList").code == 200) {
			this.list = sessionData.get("blogList").data;
			this.totalPage = Math.ceil(sessionData.get("blogList").total / this.searchObj.size);
			this.searchObj.page = sessionData.get("page");
		} else {
			this.getBlog();
		}
	},
	methods: {
		getBlog() {
			let searchObj = {
				page: this.searchObj.page,
				size: this.searchObj.size,
				title: ""
			};
			ajax(urls.blogList, {jsonParams: searchObj}).then(data => {
				if (data && data.code == 200) {
					this.list = data.data;
					this.totalPage = Math.ceil(data.total / this.searchObj.size);
					sessionData.set("blogList", data);
					sessionData.set("page", this.searchObj.page);
				}
			}).catch(err => {
				console.log('ajax err', err);
			});
		},
		pre() {
			this.searchObj.page = this.searchObj.page - 1;
			this.getBlog();
		},
		next() {
			this.searchObj.page = this.searchObj.page * 1 + 1;
			this.getBlog();
		},
		blog(item) {
			sessionData.set("blogItem", item);
			vm.$router.push({name: 'blog', params: item});
		}
	},
	watch: {
		"searchObj.page": function (value) {
			sessionData.set("page", value);
		}
	}
}