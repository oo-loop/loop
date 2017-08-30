<template>
	<div>
		<h1 class="title">Typography</h1>
		<p>Modifies the base font size by rem.</p>

		<h1>h1 Heading <code>h1</code></h1>
		<h2>h2 Heading <code>h2</code></h2>
		<h3>h3 Heading <code>h3</code></h3>
		<h4>h4 Heading <code>h4</code></h4>
		<h5>h5 Heading <code>h5</code></h5>
		<h6>h6 Heading <code>h6</code></h6>

		<pretty-code :code="html.heading"></pretty-code>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'

export default {
	name: 'Type',
	components: {
		prettyCode
	},
	data: () => ({
		html: {
			heading: require('./code/heading.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
</style>
