<template>
	<div class="g-mnc box">
		<div class="m-postlst">
			<template v-for="(item,index) in list">
				<div class="m-post">
					<div class="postinner">
						<div class="ct">
							<div class="ctc box">
								<h2 class="ttl" @click="blog(item)">
									{{item.title}}
								</h2>
								<div class="txtcont">
									<p v-html="item.content"></p>
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
		<div class="m-pager m-pager-idx box">
			<span class="prev" v-if="searchObj.page != 1" @click="pre()">&lt; 上一页</span>
			<span class="next" v-if="searchObj.page != totalPage" @click="next()">下一页 &gt;</span>
			<span class="num">{{searchObj.page}} / {{totalPage}}</span>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "./index.scss";
</style>
<script src="./index.js"></script>