<template>
	<div>
		<component v-for="item in listing" :is="item" :key="item"></component>
	</div>
</template>

<script>
import type from './type'

export default {
	name: 'Documentation',
	components: {
		type
	},
	props: {
	},
	data: () => ({
		listing: [
			'type'
		]
	}),
	methods: {
	},
}
</script>
<style lang="scss">
	
</style>
