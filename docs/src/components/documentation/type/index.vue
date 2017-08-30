<template>
	<div>
		<h1 class="title">Typography</h1>
		<p>Modifies the base font size by rem.</p>

		<code>&lt;h1&gt;</code><h1>h1 Heading </h1>
		<code>&lt;h2&gt;</code><h2>h2 Heading </h2>
		<code>&lt;h3&gt;</code><h3>h3 Heading </h3>
		<code>&lt;h4&gt;</code><h4>h4 Heading </h4>
		<code>&lt;h5&gt;</code><h5>h5 Heading </h5>
		<code>&lt;h6&gt;</code><h6>h6 Heading </h6>

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
