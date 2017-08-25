<template>
	<div>
		<h2>Typography</h2>
		<div class="" v-for="item in listing">
			<p class="">{{item.description}}</p>
			<template v-if="item.isArray">
				<p
					v-for="n in item.length"
					:class="`${item.name}-${n}`">
					.{{item.name}}-{{n}}
				</p>
			</template>
			<template v-else>
				<p :class="`${item.name}`">.{{item.name}}</p>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Type',
	props: {
	},
	data: () => ({
		listing: [
			{
				name: 'is-italic',
				description: 'Italic text',
			},
			{
				name: 'is-strong',
				description: 'strong text',
			},
			{
				name: 'is-size',
				description: 'Modifies the base font size by rem.',
				isArray: true,
				length: 8,
			}
		]
	}),
	methods: {
	},
}
</script>
<style lang="scss">
</style>
