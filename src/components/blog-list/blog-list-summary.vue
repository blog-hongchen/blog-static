<template>
	<div class="g-mnc box">
		<div class="m-postlst">
			<template v-for="(item,index) in list">
				<div class="m-post">
					<div class="postinner">
						<div class="ct">
							<div class="ctc box">
								<h2 class="ttl">
									{{item.title}}
								</h2>
								<div class="txtcont">
									<p v-html="item.content"></p>
								</div>
							</div>
						</div>
						<div class="info box">
							时间：{{item.create_time | dateFormat}}
						</div>
					</div>
				</div>
			</template>
		</div>

		<!-- Pager -->

		<div class="m-pager m-pager-idx box">
			<span class="prev" v-if="searchObj.page != 1" @click="pre()">&lt; 上一页</span>
			<span class="next" v-if="searchObj.page != totalPage" @click="next()">下一页 &gt;</span>
			<span class="num">{{searchObj.page}} / {{totalPage}}</span>
		</div>


	</div>
</template>

<style scoped lang="scss">
	.g-mnc {
		.m-postlst {
			.m-post {
				border-bottom: 1px solid #eee;
				padding: 0 0 50px;
				margin: 0 0 50px;
				.ctc {
					font-size: 14px;
					line-height: 26px;
					.ttl {
						margin: 0 0 20px;
						font-size: 18px;
						line-height: 30px;
					}
					p {
						margin: 0 0 25px;
					}
				}
				.info {
					color: #ccc;
					padding: 30px 0 0;
				}
			}
		}
		.m-pager {
			padding: 0 0 50px;
			font-size: 16px;
			text-align: center;
			color: #56AAC3;
			.prev {
				float: left;
				cursor: pointer;
			}
			.next {
				float: right;
				cursor: pointer;
			}
			.num {
				color: #666666;
			}
		}

	}
</style>
<script>
	import Vue from 'vue';
	import {ajax} from '../../common/common';
	import urls from '../../common/urls';

	Vue.filter('dateFormat', function (date) {
		return (new Date()).formatYearDateTime(date);
	});

	export default {
		data() {
			return {
				list: [],
				searchObj: {
					page: "1",
					size: "2",
					title: "",
					content: ""
				},
				total: 0,
				totalPage: 1
			}
		},
		computed: {},
		components: {},
		created() {
		},
		mounted() {
			this.test();
		},
		methods: {
			test() {
				let searchObj = {
					page: this.searchObj.page,
					size: this.searchObj.size,
					title: "",
					content: ""
				};
				ajax(urls.blogList, {jsonParams: searchObj}).then(data => {
					if (data && data.code == 200) {
						this.list = data.data;
						this.total = data.total;
						this.totalPage = Math.ceil(data.total / this.searchObj.size);
					}
				}).catch(err => {
					console.log('ajax err', err);
				});
			},
			pre() {
				this.searchObj.page = this.searchObj.page - 1;
				this.test();
			},
			next() {
				this.searchObj.page = this.searchObj.page * 1 + 1;
				this.test();
			}
		}
	}
</script>