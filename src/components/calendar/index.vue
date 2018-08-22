<template>
	<div>
		<div class="calendar-content-box">
			<div class="calendar-top-content">
				<span class="oper-arrow" @click="preMonth"><i class="iconfont icon-arrow-left"></i></span>
				<span>{{formatDate}}</span>
				<span class="oper-arrow" @click="nextMonth"><i class="iconfont icon-arrow-right"></i></span>
			</div>
			<div>
				<div class="week-content">
					<span v-for="(item, index) in weekArr">{{item}}</span>
				</div>
				<div class="day-content">
					<div v-for="(item, index) in daysArr" class="day-row">
						<span v-for="(value, key) in item" @click="chooseDate(value,index,key)"
							  :class="{isToday:value.isToday,notNowMonth:value.type !='now',nowMonth:value.type=='now',isChoose:value.isChoose}">{{value.num}}</span>
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
		padding: 10px;
		box-sizing: border-box;
		.oper-arrow {
			cursor: pointer;
		}
		.week-content, .day-row {
			display: flex;
			justify-content: space-between
		}
		.week-content, .day-content {
			line-height: 40px;
			span {
				display: inline-block;
				width: 30px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 50%;
			}
		}
		.day-row {
			span {
				cursor: pointer;
			}
		}
		.isToday {
			background-color: #dddddd;
		}
		.notNowMonth {
			color: #dddddd;
		}
		.isChoose {
			background-color: #fdd;
		}
	}
</style>
<script>
	import Vue from 'vue';

	export default {
		data() {
			return {
				daysArr: [],
				chooseObj: {},
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
				this.nowShowDate = this.nowDate;
				// this.year = new Date(this.nowShowDate).getFullYear();
				// this.month = new Date(this.nowShowDate).getMonth() + 1;
			}
			this.formatDate = this.formatYearMonth(new Date(this.nowShowDate).getTime());
			this.getDateList();
		},
		methods: {
			getDateList() {
				this.daysArr = [];
				let year = new Date(this.nowShowDate).getFullYear(), month = new Date(this.nowShowDate).getMonth() + 1;
				let days = (new Date(year, month, 0)).getDate();
				let preDays = (new Date(year, month - 1, 0)).getDate();

				let daysArr = [];
				let row = [];
				for (let i = 1; i <= days; i++) {
					let weekNum = (new Date(year, month - 1, i)).getDay();
					let datObj = {
						"num": i,
						"week": weekNum,
						"type": "now",
						"isToday": false,
						"date": year + "/" + month + "/" + i,
						"isChoose": false
					};
					if (new Date(year, month - 1, i).getTime() == (new Date(this.formatYearMonthDay(new Date().getTime()))).getTime()) {
						datObj.isToday = true;
					}
					row.push(datObj);
					if (weekNum == 6 || i == days) {
						daysArr.push(row);
						row = [];
					}
				}
				let preDifference = 7 - daysArr[0].length;
				for (let i = 0; i < preDifference; i++) {
					let weekNum = (new Date(year, month - 2, preDays - i)).getDay()
					let datObj = {
						"num": preDays - i,
						"week": weekNum,
						"type": "pre",
						"isToday": false,
						"date": year + "/" + (month - 1) + "/" + (preDays - i),
						"isChoose": false
					}
					if (new Date(year, month - 1, i).getTime() == (new Date(this.formatYearMonthDay(new Date().getTime()))).getTime()) {
						datObj.isToday = true;
					}
					daysArr[0].unshift(datObj);
				}

				let nextDifference = 7 - daysArr[daysArr.length - 1].length;
				for (let i = 1; i <= nextDifference; i++) {
					let weekNum = (new Date(year, month + 1, i)).getDay()
					let datObj = {
						"num": i,
						"week": weekNum,
						"type": "next",
						"isToday": false,
						"date": year + "/" + (month + 1) + "/" + i,
						"isChoose": false
					}
					if (new Date(year, month - 1, i).getTime() == (new Date(this.formatYearMonthDay(new Date().getTime()))).getTime()) {
						datObj.isToday = true;
					}
					daysArr[daysArr.length - 1].push(datObj);
				}
				this.daysArr = daysArr;
				this.chooseFnc();
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
			},
			formatYearMonthDay(timestamp) {
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
				return y + '-' + m + "-" + d + " 00:00:00";
			},
			chooseDate(item) {
				let year = item.date.split("/")[0],
					month = item.date.split("/")[1];
				this.chooseObj = item;
				if (item.type !== "now") {
					this.nowShowDate = new Date(year, month, 0);
					return false;
				}

				this.chooseFnc();

			},
			chooseFnc() {
				if (this.chooseObj && this.chooseObj.date) {
					this.daysArr.map((item) => {
						item.map((value) => {
							if (value.date != this.chooseObj.date) {
								value.isChoose = false;
							} else {
								value.isChoose = true;
							}
						})
					})

					console.log(this.daysArr)
				}
			},
			preMonth() {
				let year = this.nowShowDate.getFullYear(),
					month = this.nowShowDate.getMonth() + 1;
				this.nowShowDate = new Date(year, month - 1, 0);
			},
			nextMonth() {
				let year = this.nowShowDate.getFullYear(),
					month = this.nowShowDate.getMonth() + 1;
				this.nowShowDate = new Date(year, month + 1, 0);
			}
		},
		watch: {
			nowShowDate: function (nowValue, oldValue) {
				this.getDateList();
				this.formatDate = this.formatYearMonth(new Date(nowValue).getTime());
			}
		}

	}
</script>