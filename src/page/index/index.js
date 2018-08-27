import Vue from 'vue';
import Calendar from "@/components/calendar"
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';
import {ajax} from '../../common/common';
import urls from '../../common/urls';

export default {
	data() {
		return {
			msg: '',
			defaultDate: new Date("2018/07/07")
		}
	},
	computed: {
		...mapGetters({
			selectTab: 'getSelectTab',
		})
	},
	components: {
		Calendar,
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
		}
	}
}