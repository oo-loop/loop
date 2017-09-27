<template>
	<div>
		<h1 class="title">Form</h1>
		<p>Apply the class <code>.input</code> to format the appearance of the textfield.<br>
		Alter the size of the input by applying any of the <code class="text-info">$text-sizes</code> classes available</p>
		<label for="tiny-input">Tiny input</label>
		<input class="input text-tiny mb-15" id="tiny-input" type="text">

		<label for="small-input">Small input</label>
		<input class="input text-small mb-15" id="small-input" type="text">

		<label for="input">Input</label>
		<input class="input mb-15" id="input" type="text">

		<label for="large-input">Large input</label>
		<input class="input text-large" id="large-input" type="text">

		<pretty-code :code="html.size"></pretty-code>


		<h3 id="checkbox"><a href="#checkbox">#</a> Checkbox</h3>
		<p>Apply the class <code>.checkbox</code>to an <markup>input type="checkbox"</markup> preceding a <markup>label</markup></p>
		<input class="checkbox" id="checkbox-1" type="checkbox">
		<label for="checkbox-1">Checkbox 1</label>
		<input class="checkbox" id="checkbox-2" type="checkbox">
		<label for="checkbox-2">Checkbox 2</label>
		<pretty-code :code="html.checkbox"></pretty-code>

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
			checkbox: require('./code/checkbox.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
