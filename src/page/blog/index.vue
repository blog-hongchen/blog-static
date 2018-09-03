<template>
	<div class="g-mnc box">
		<div class="m-postdtl">
			<div class="m-post  m-post-txt m-post-leftimg  ">
				<div class="postinner">
					<div class="ct">
						<div class="ctc box">
							<h2 class="ttl">{{item.title}}</h2>
							<div class="txtcont">
								<p v-html="item.content"></p>
							</div>
						</div>
					</div>
					<div class="info info-2">
						<div class="tags box">
						</div>
						<div class="meta box">
							<span class="date">时间：{{item.create_time | dateFormat}}</span>
							<span class="cmt">评论：6</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Pager -->

		<div class="m-pager m-pager-dtl box">
			<span class="pre">&lt;上一篇</span>
			<span class="next">下一篇&gt;</span>
		</div>

		<div class="m-cmthot">
			<div class="cmthotc">
				<div class="m-cmt">
					<div class="box">
						<div class="nctitle" style="">评论(1)</div>
						<div class="bcmt">
							<div class="bcmtadd" style="">
								<div class="bcmtipt s-bd0 s-bg0">
									<div class="bcmtiptc">
										<div @focus="focus" @blur="blur" :class="{focus:isFocus}"  contenteditable="true" class="editdiv s-fc0 ztag f-trans" maxlength="200">
										</div>
									</div>
								</div>
								<div class="bcmtbtn">
									<span class="toast">提示</span>
									<button class="s-bd1 s-fc1 s-bg1 ztag">发布</button>
									<div class="txt s-fc0"></div>
								</div>
							</div>
							<div class="bcmtlst">
								<ul class="clearfix ztag">
									<li class="s-bd2 s-bg2">
										<div class="bcmtlsta clearfix">
											<div class="bcmtlstb">
												<span title="zui荭尘 - 09/02 18:23">
													<img class="itag" src="http://l.bst.126.net/rsc/img/ava/64.png">
												</span>
											</div>
											<div class="bcmtlstc">
												<div class="bcmtlstd clearfix">
													<div class="bcmtlste clearfix">
														<div class="bcmtlstg">
															<div class="bcmtlsti">
																<div class="bcmtlstj">
																	<span class="s-fc2 itag bcmtlstk"
																		  title="zui荭尘 - 09/02 18:23">zui荭尘</span>
																	<span class="s-fc3 itag">回复了&nbsp;&nbsp;
																		<span class="s-fc2 itag">ssss</span>
																	</span>
																	<span class="bcmtlstf s-fc4">：12</span></div>
															</div>
														</div>
														<div class="bcmtlsth">
															<span class="s-fc2 itag delete-comment">删除</span>
															<span class="s-fc2 itag reply-comment">回复</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="bcmtmore s-bd2 ztag" style="display: none;">
								<div class="bcmtlsta"><span class="s-fc4">正在载入中...</span></div>
							</div>
							<div class="bcmtmore s-bd2" style="display:none;">
								<div class="bcmtlsta"><a href="#" class="s-fc2 ztag">查看更多</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	@import "./index.scss";
</style>
<script src="./index.js"></script>