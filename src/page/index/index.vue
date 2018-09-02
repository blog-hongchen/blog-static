<template>
	<div class="content">
		<div class="left-content">
			<div class="m-hdimg">
				<img src="../../assets/portrait.jpg"
					 width="96" height="96">
			</div>
			<h1 class="m-ttl">
				zui荭尘
			</h1>
			<p class="m-about">这个人不懒，但还是啥都没有写</p>
			<ul class="m-nav">
				<li class="lnkcstm">文章</li>
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
		<div class="right-content">
			<blogSummaryList></blogSummaryList>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "./index.scss";
</style>
<script src="./index.js"></script>