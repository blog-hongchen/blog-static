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
	</div>
</template>
<style lang="scss">
	@import "./index.scss";
</style>
<script src="./index.js"></script>