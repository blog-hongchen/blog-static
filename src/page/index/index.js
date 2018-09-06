import Vue from 'vue';
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';
import {axiosGet, sessionData} from '../../common/common';
import urls from '../../common/urls';

Vue.filter('dateFormat', function (date) {
	return (new Date()).formatYearDateTime(date);
});

export default {
	data() {
		return {
			list: [],
			searchObj: {
				page: 1,
				size: 5,
				title: "",
				content: ""
			},
			pageSizeArr: [5, 10, 15, 20],
			total: 0,
			totalPage: 1,
			loading: true
		}
	},
	computed: {},
	components: {},
	created() {
		this.$store.commit(actions.SELECT_TAB, "index");
	},
	mounted() {
		this.getBlog();
	},
	methods: {
		getBlog() {
			this.loading = true;
			let searchObj = {
				page: this.searchObj.page,
				size: this.searchObj.size,
				title: ""
			};
			axiosGet(urls.blogList, {jsonParams: searchObj}).then(data => {
				if (data && data.code == 200) {

					this.list = data.data;
					this.total = data.total;
					this.totalPage = Math.ceil(data.total / this.searchObj.size);
					sessionData.set("blogList", data);
					sessionData.set("page", this.searchObj.page);
				}
				this.loading = false;
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
		},
		handleSizeChange(val) {
			this.searchObj.size = val;

		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.searchObj.page = val;
		}
	},
	watch: {
		"searchObj.page": function (value) {
			this.getBlog();
		},
		"searchObj.size": function (value) {
			this.getBlog();
		}
	}
}