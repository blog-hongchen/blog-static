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
				size: "2",
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
		this.getBlog();
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
				}
			}).catch(err => {
				console.log('ajax err', err);
			});
		},
		pre() {
			this.searchObj.page = this.searchObj.page - 1;
		},
		next() {
			this.searchObj.page = this.searchObj.page * 1 + 1;
		},
		blog(item) {
			sessionData.set("blogItem", item);
			vm.$router.push({name: 'blog', params: item});
		}
	},
	watch: {
		"searchObj.page": function () {
			this.getBlog();
		}
	}
}