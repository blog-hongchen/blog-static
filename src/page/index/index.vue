<template>
	<div>
		<div class="left-content">
			<div class="calendar-content">
				<Calendar
						classStr="sss"
						:defaultDate="defaultDate"
						@chooseDay="chooseDay"
				>

				</Calendar>
			</div>
		</div>
		<div class="right-content">
			这是日志列表
			<button @click="test">接口测试</button>
		</div>
	</div>
</template>
<style lang="scss">
	@import "./index.scss";
</style>
<script src="./index.js"></script>