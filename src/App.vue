<template>
	<div id="app">
		<header class="top-content">
			<img src="./assets/1.png"/>
		</header>
		<div class="content">
			<leftNav></leftNav>
			<div class="right-content">
				<div class="scroll-content">
					<router-view/>
				</div>
			</div>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import leftNav from "./components/left-nav/index";
	import footers from "./components/footer/footer";
	import Calendar from "@/components/calendar";
	import {mapGetters} from 'vuex';
	import * as actions from './store/mutation-types.js';

	export default {
		name: 'App',
		data() {
			return {
				defaultDate: new Date()
			}
		},
		computed: {
			...mapGetters({
				selectTab: 'getSelectTab',
			})
		},
		components: {leftNav, Calendar, footers},
		mounted() {
		},
		methods: {
			chooseDay(item) {
				console.log("chooseDay", item)
			}
		}

	}
</script>
<style lang="scss">
	.top-content {
		width: 100%;
		margin: 0 auto;
		/*height: 200px;*/
		position: relative;
		font-size: 0;
		height: 220px;
		/*background-image: url("../../assets/1.png");*/
		/*background-repeat: no-repeat;*/
		/*background-position: center center;*/
		/*background-size: 100% 100%;*/

		img {
			width: 100%;
			height: 100%;
		}
		.top-nav {
			position: absolute;
			left: 30px;
			bottom: 20px;
			font-size: 16px;
			li {
				float: left;
				margin-left: 20px;
				cursor: pointer;
				&:hover {
					color: #3285fa;
				}
				&.current {
					color: #3285fa;
				}
			}
		}

	}

	.content {
		margin: -53px auto 0;
		min-width: 880px;
		width: 80%;
		float: right;
		height: calc(100% - 220px - 45px + 50px);
		min-height: 500px;
		position: relative;
		&::after {
			clear: both;
			display: block;
			visibility: hidden;
			height: 0;
			overflow: hidden;
			content: '.';
		}
	}

	.right-content {
		/*width: 650px;*/
		width: calc(100% - 260px);
		//width: 80%;
		float: right;
		text-align: left;
		padding: 100px 0 0 0;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}


</style>