<template>
	<div>
		<h1 class="title">Form</h1>
		<p>Alter the size of the input field by applying any of the <code class="text-info">$text-sizes</code> classes on your <code>.input</code></p>
		<label for="tiny-input">Tiny input</label>
		<input class="input text-tiny mb-15" id="tiny-input" type="text">

		<label for="small-input">Small input</label>
		<input class="input text-small mb-15" id="small-input" type="text">

		<label for="input">Input</label>
		<input class="input mb-15" id="input" type="text">

		<label for="large-input">Large input</label>
		<input class="input text-large" id="large-input" type="text">

		<pretty-code :code="html.size"></pretty-code>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'Form',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {
			size: require('./code/size.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
