<template>
	<div id="app">
		<topNav>
			
		</topNav>
		<router-view/>
	</div>
</template>

<script>
	import topNav from "./components/top-nav/index"

	export default {
		name: 'App',
		components: {topNav},

	}
</script>