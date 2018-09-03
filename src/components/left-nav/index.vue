<template>
	<div class="left-content">
		<div class="m-hdimg" @click="home">
			<img src="../../assets/portrait.jpg" width="96" height="96">
		</div>
		<h1 class="m-ttl">
			zui荭尘
		</h1>
		<p class="m-about">这个人不懒，但还是啥都没有写</p>
		<ul class="m-nav">
			<li class="lnkcstm">全部</li>
		</ul>
		<!--<div class="calendar-content">-->
		<!--<Calendar-->
		<!--classStr="sss"-->
		<!--:defaultDate="defaultDate"-->
		<!--@chooseDay="chooseDay"-->
		<!--&gt;-->

		<!--</Calendar>-->
		<!--</div>-->
	</div>
</template>

<script>
	import Vue from 'vue';
	import {mapGetters} from 'vuex';
	import * as actions from '../../store/mutation-types.js';

	export default {
		computed: {
			...mapGetters({
				selectTab: 'getSelectTab',
			})
		},
		methods: {
			show(type) {
				this.$store.commit(actions.SELECT_TAB, type);
				switch (type) {
					case 'index':
						vm.$router.push({name: 'index'});
						break;
					case 'blog':
						vm.$router.push({name: 'blog'});
						break;
				}
			},
			home(){
				this.$router.push({name: 'index'});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.left-content {
		//width: 20%;
		width: 190px;
		float: left;
		padding: 0 60px 50px 0;
		//box-sizing: border-box;
		.m-hdimg {
			img {
				cursor: pointer;
				width: 96px;
				height: 96px;
				border: 5px solid #fff;
				vertical-align: middle;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
			}
		}

		.m-ttl {
			margin: 20px 0 0;
			display: inline-block;
			font-size: 20px;
			line-height: 32px;
			letter-spacing: 2px;
		}
		.m-about {
			margin: 20px 0 0;
			color: #aaa;
		}

		.m-nav {
			margin: 30px 0 0;
			border-top: 1px solid #eee;
			padding: 25px 0 0;
			li {
				padding: 0 0 8px;
				color: #aaa;
			}
		}

		//.isChoose {
		//background-color: aqua;
		//}

	}
</style>