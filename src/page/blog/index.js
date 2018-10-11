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
			item: '',
			blogId: '',
			isFocus: false
		}
	},

	computed: {
		...mapGetters({
			selectTab: 'getSelectTab',
		})
	},
	components: {},
	created() {
		// this.$store.commit(actions.SELECT_TAB, 'blog');
	},
	mounted() {
		this.blogId = this.$route.query.id;
		// this.item = sessionData.get("blogItem");
		console.log(this.blogId)
		this.blog();
	},
	methods: {
		focus() {
			this.isFocus = true;
		},
		blur() {
			this.isFocus = false;
		},
		update(item) {
			vm.$router.push({name: 'editBlog', params: {blogInfo: JSON.stringify(item)}});
		},
		blog() {
			axiosGet(urls.blogItem, {jsonParams: {id: this.blogId}}).then(data => {
				if (data && data.code == 200) {

					this.item = data.data;
				}
				this.loading = false;
			}).catch(err => {
				console.log('ajax err', err);
			});
		}
	}

}