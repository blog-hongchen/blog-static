<template>
	<div class="g-mnc box">
		<div class="m-postlst" v-loading="loading" element-loading-text="拼命加载中"
			 element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
			<template v-for="(item,index) in list">
				<div class="m-post">
					<div class="postinner">
						<div class="ct">
							<div class="ctc box">
								<h2 class="ttl" @click="blog(item)">
									{{item.title}}
								</h2>
								<div class="txtcont">
									<article class="index-article" v-html="item.article"></article>
								</div>
							</div>
						</div>
						<div class="info box">
							发布时间：{{item.create_time | dateFormat}}
							<span>编辑时间：{{item.update_time | dateFormat}}</span>
						</div>
					</div>
				</div>
			</template>
		</div>

		<!-- Pager -->
		<!--<div class="m-pager m-pager-idx box" v-if="list.length > 0">-->
		<!--<span class="prev" v-if="searchObj.page != 1" @click="pre()">&lt; 上一页</span>-->
		<!--<span class="next" v-if="searchObj.page != totalPage" @click="next()">下一页 &gt;</span>-->
		<!--<span class="num">{{searchObj.page}} / {{totalPage}}</span>-->
		<!--</div>-->
		<div class="m-pager m-pager-idx box" v-if="list.length > 0">
			<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="searchObj.page"
					:page-sizes="pageSizeArr"
					:page-size="searchObj.size"
					layout="total, sizes, prev, pager, next, jumper"
					:total="total">
			</el-pagination>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "./index.scss";
</style>
<script src="./index.js"></script>