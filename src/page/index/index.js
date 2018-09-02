import Vue from 'vue';
import Calendar from "@/components/calendar"
import blogSummaryList from "@/components/blog-list/blog-list-summary.vue"
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';
import {ajax} from '../../common/common';
import urls from '../../common/urls';

export default {
	data() {
		return {
			msg: '',
			defaultDate: new Date()
		}
	},
	computed: {
		...mapGetters({
			selectTab: 'getSelectTab',
		})
	},
	components: {
		Calendar,
		blogSummaryList
	},
	created() {
		this.$store.commit(actions.SELECT_TAB, 'index');
	},
	mounted() {
	},
	methods: {
		test() {
			let formObj = {
				"first_name": "name",
				"last_name": "lastname"
			}

			ajax(urls.test, {jsonParams: formObj}).then(data => {
				if (data) {
				}
			}).catch(err => {
				console.log('ajax err', err);
			});
		},
		chooseDay(item) {
			console.log("chooseDay", item)
		}
	}
}