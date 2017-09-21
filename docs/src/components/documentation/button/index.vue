<template>
	<div>
		<h1 class="title">Button</h1>
		<p class="text-large">Action button of different sizes</p>
		<a class="btn text-tiny">button</a>
		<a class="btn text-small">button</a>
		<a class="btn">button</a>
		<a class="btn text-large">button</a>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'Utilities',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
