<template>
	<header class="top-content">
		<img src="../../assets/1.png"/>
		<nav class="top-nav">
			<li v-bind:class="{current:selectTab=='my'}" @click="show('my')">首页</li>
			<li v-bind:class="{current:selectTab=='test'}" @click="show('test')">test</li>
		</nav>
	</header>
</template>
<style lang="scss">
	.top-content {
		width: 1100px;
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
			bottom: 30px;
			font-size: 16px;
		}
		@media (min-width: 1420px) {
			width: 1280px !important;
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
			}
		}
	}
</script>