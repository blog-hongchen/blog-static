<template>
	<div>
		<div class="calendar-content-box">
			<div class="calendar-top-content">
				<span></span>
				<span>{{formatDate}}</span>
				<span></span>
			</div>
			<div>
				<div class="week-content">
					<span v-for="(item, index) in weekArr">{{item}}</span>
				</div>
				<div class="day-content">
					<div v-for="(item, index) in daysArr">
						<span v-for="(value, key) in item">{{value.num}}</span>
					</div>

				</div>

			</div>

		</div>
	</div>
</template>
<style lang="scss" scoped>
	.calendar-content-box {
		width: 100%;
		margin: 0 auto;
		background: #ccc;
		font-size: 16px;
		.week-content, .day-content {
			span {
				display: inline-block;
				width: calc(100% / 7);
				text-align: center;
			}
		}
	}
</style>
<script>
	import Vue from 'vue';

	export default {
		data() {
			return {
				daysArr: [],
				year: new Date().getFullYear(),
				month: new Date().getMonth() + 1,
				formatDate: "",
				nowShowDate: new Date(),
				weekArr: ["日", "一", "二", "三", "四", "五", "六"]
			}
		},

		props: {
			nowDate: {
				type: Date,
				default: function () {
					return new Date();
				}
			}
		},

		mounted() {
			if (this.nowDate) {
				this.year = new Date(this.nowDate).getFullYear();
				this.month = new Date(this.nowDate).getMonth() + 1;
				this.nowShowDate = this.nowDate;
			}
			this.formatDate = this.formatYearMonth(new Date(this.nowShowDate).getTime());
			this.getDateList();
		},
		methods: {
			getDateList() {
				let year = this.year, month = this.month;
				let days = (new Date(year, month, 0)).getDate();
				let preDays = (new Date(year, month - 1, 0)).getDate();

				// console.log(preDays, nextDays);
				let daysArr = [];
				let row = [];

				for (let i = 1; i <= days; i++) {
					let weekNum = (new Date(year, month - 1, i)).getDay()
					let datObj = {
						"num": i,
						"week": weekNum,
						"type": "now"
					}
					row.push(datObj);
					if (weekNum == 6 || i == days) {
						daysArr.push(row);
						row = [];
					}
				}
				let preDifference = daysArr[0].length;
				for (let i = 0; i < preDifference - 1; i++) {
					let weekNum = (new Date(year, month - 2, preDays - i)).getDay()
					let datObj = {
						"num": preDays - i,
						"week": weekNum,
						"type": "pre"
					}
					daysArr[0].unshift(datObj);
				}

				let nextDifference = 7 - daysArr[daysArr.length - 1].length;
				for (let i = 1; i <= nextDifference; i++) {
					let weekNum = (new Date(year, month + 1, i)).getDay()
					let datObj = {
						"num": i,
						"week": weekNum,
						"type": "next"
					}
					daysArr[daysArr.length - 1].push(datObj);
				}
				this.daysArr = daysArr;
			},
			formatYearMonth(timestamp) {
				var date = new Date(parseInt(timestamp));
				var y = date.getFullYear(),
					m = date.getMonth() + 1,
					d = date.getDate(),
					h = date.getHours(),
					mm = date.getMinutes(),
					ss = date.getSeconds();
				if (m < 10) m = '0' + m;
				if (d < 10) d = '0' + d;
				if (h < 10) h = '0' + h;
				if (mm < 10) mm = '0' + mm;
				if (ss < 10) ss = '0' + ss;
				return y + '-' + m;
			}
		}

	}
</script>