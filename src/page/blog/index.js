import Vue from 'vue';
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';
import {sessionData} from "../../common/common";

Vue.filter('dateFormat', function (date) {
	return (new Date()).formatYearDateTime(date);
});
export default {
	data() {
		return {
			item: '',
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
		// this.item = this.$route.params;
		this.item = sessionData.get("blogItem");
		console.log(this.item)
	},
	methods: {
		focus() {
			this.isFocus = true;
		},
		blur() {
			this.isFocus = false;
		},
		update(item){
			vm.$router.push({name: 'editBlog', params: item});
		}
	}

}