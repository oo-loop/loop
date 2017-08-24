<template>
	<div>
		<h2>Typography</h2>
		<div>
			<p v-for="n in 8" :class="`is-size-${n}`">.is-size-{{n}}</p>			
		</div>
	</div>
</template>

<script>
export default {
	name: 'Type',
	props: {
	},
	data: () => ({
	}),
	methods: {
	},
}
</script>
<style lang="scss">
	
</style>
