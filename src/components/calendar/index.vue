<template>
	<div class="calendar-content-box" :class="classStr">
		<div class="calendar-top-content">
			<span class="oper-arrow" @click="preMonth"><i class="iconfont icon-arrow-left"></i></span>
			<span>{{nowShowDate | format}}</span>
			<span class="oper-arrow right-arrow" @click="nextMonth"><i class="iconfont icon-arrow-right"></i></span>
			<span class="today-cls" @click="today"><i class="iconfont" :class="toDayClass"></i></span>
		</div>
		<div>
			<div class="week-content">
				<span v-for="(item, index) in weekArr">{{item}}</span>
			</div>
			<div class="day-content">
				<div v-for="(item, index) in daysArr" class="day-row">
					<div v-for="(value, key) in item" class="">
							<span @click="chooseDate(value,index,key)"
								  :class="{isToday:value.isToday,notNowMonth:value.type !='now',nowMonth:value.type=='now',isChoose:value.isChoose}">{{value.num}}</span>
					</div>
				</div>

			</div>

		</div>

	</div>
</template>
<style lang="scss" scoped>
	@import "./font/iconfont.css";

	.calendar-content-box {
		width: 100%;
		margin: 0 auto;
		background: #ccc;
		font-size: 16px;
		padding: 10px;
		box-sizing: border-box;

		moz-user-select: -moz-none;
		-moz-user-select: none;
		-o-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;

		.oper-arrow {
			cursor: pointer;
			float: left;
			padding-left: 10px;
		}
		.right-arrow {
			float: right;
			padding-right: 10px;
		}

		.today-cls {
			float: right;
			cursor: pointer;
			i {
				font-size: 20px;
			}
		}
		.week-content, .day-row {
			display: flex;
			justify-content: space-between;
			margin-top: 5px;
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

	Vue.filter('format', function (data) {
		var date = new Date(data);
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
		return y + '年' + m + "月";
	});
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
		computed: {
			toDayClass: function () {
				var date = new Date();
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
				return "icon-rili" + d;
			}
		},
		props: {
			defaultDate: {
				type: Date,
				default: function () {
					return new Date();
				}
			},
			classStr: {
				type: String,
				default: ""
			}
		},

		mounted() {
			if (this.defaultDate) {
				this.nowShowDate = this.defaultDate;
			}
			// this.getDateList();
		},
		methods: {
			getDateList() {
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
						"isChoose": this.chooseObj.date == (year + "/" + month + "/" + i) ? true : false
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
						"date": ((month - 1) < 1 ? year - 1 : year) + "/" + ((month - 1) < 1 ? -((month - 1) - 12) : (month - 1)) + "/" + (preDays - i),
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
						"date": (month + 1 > 12 ? year + 1 : year) + "/" + ((month + 1) > 12 ? (month + 1) - 12 : (month + 1)) + "/" + i,
						"isChoose": false
					}
					if (new Date(year, month - 1, i).getTime() == (new Date(this.formatYearMonthDay(new Date().getTime()))).getTime()) {
						datObj.isToday = true;
					}
					daysArr[daysArr.length - 1].push(datObj);
				}
				this.daysArr = daysArr;
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
				this.$emit('chooseDay', item.date);
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
			},
			today() {
				this.nowShowDate = new Date();
			}
		},
		watch: {
			nowShowDate: function (nowValue, oldValue) {
				this.getDateList();
			}
		}

	}
</script>