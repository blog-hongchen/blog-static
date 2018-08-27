<template>
	<header class="top-content">
		<img src="../../assets/1.png"/>
		<nav class="top-nav">
			<li v-bind:class="{current:selectTab=='index'}" @click="show('index')">首页</li>
			<li v-bind:class="{current:selectTab=='blog'}" @click="show('blog')">博客</li>
		</nav>
	</header>
</template>
<style lang="scss" scoped>
	.top-content {
		width: 100%;
		margin: 0 auto;
		height: 200px;
		position: relative;

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
</style>
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
			}
		}
	}
</script>