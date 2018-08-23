import Vue from 'vue';
import Calendar from "@/components/calendar"

export default {
	data() {
		return {
			msg: '',
			defaultDate: new Date("2018/07/07")
		}
	},
	components: {
		Calendar,
	},
	methods: {
		chooseDay(date) {
			console.log("date", date)
		}
	}
}