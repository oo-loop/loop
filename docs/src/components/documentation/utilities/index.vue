<template>
	<div>
		<h1 class="title">Utilities</h1>

		<h2>Loop Utilities</h2>
		<p class="text-large">Those utilities are flexibles for adding and/or removing classes at your convenience by modifying the variables</p>

		<pretty-code class="language-css" :code="html.variables"></pretty-code>

		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
		<p>Quickly change the size of the text</p>
		<code>.text-large</code><p class="text-large">Text large Lorem ipsum dolor sit amet.</p>
		<code>.text-small</code><p class="text-small">Text small Lorem ipsum dolor sit amet.</p>
		<code>.text-tiny</code><p class="text-tiny">Text tiny Lorem ipsum dolor sit amet.</p>

		<h3 id="weights"><a href="#weights">#</a> Weights</h3>
		<code>.text-strong</code><p class="text-strong">Text strong Lorem ipsum dolor sit amet.</p>
		<code>.text-light</code><p class="text-light">Text light Lorem ipsum dolor sit amet.</p>
		<code>.text-thin</code><p class="text-thin">Text thin Lorem ipsum dolor sit amet.</p>
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
		html: {
			variables: require('./code/variables.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
</style>
