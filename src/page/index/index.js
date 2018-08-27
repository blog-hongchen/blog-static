import Vue from 'vue';
import Calendar from "@/components/calendar"
<<<<<<< HEAD
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';
import {ajax} from '../../common/common';
import urls from '../../common/urls';
=======
>>>>>>> f33208097237095cba6fd7fbd9f1ee2f1656f4ac

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
<<<<<<< HEAD
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


=======
	methods: {
		chooseDay(date) {
			console.log("date", date)
		}
	}
>>>>>>> f33208097237095cba6fd7fbd9f1ee2f1656f4ac
}