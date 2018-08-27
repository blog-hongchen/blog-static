import Vue from 'vue';
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';

export default {
	data() {
		return {
			msg: '',
		}
	},
	computed: {
		...mapGetters({
			selectTab: 'getSelectTab',
		})
	},
	components: {},
	created() {
		this.$store.commit(actions.SELECT_TAB, 'blog');
	},
	mounted() {

	},
	methods: {}

}