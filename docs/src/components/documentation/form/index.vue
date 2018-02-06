<template>
	<div>
		<h1 class="title">Form<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Components for form elements
		<br><code class="color-secondary font-bold">oo-form</code></p>

		<h3 id="input"><a href="#input">#</a> Input</h3>
		<p>
			Use the <em>input</em> attribute <code class="color-secondary">oo-form="input"</code> to format the appearance of the textfield.<br>
			Alter the size of the input by applying any of the text-sizes classes available from text utitlies.<br>
			Alter the appearance of the input by applying classes from the color utitlies.
		</p>
		<label for="default-input">Input</label>
		<input oo-form="input" class="mb-15" id="default-input" type="text">

		<label for="large-input">Large input</label>
		<input oo-form="input" class="border-danger text-large" id="large-input" type="text">
		<p class="text-tiny color-danger mt-5">Textfield is required.</p>

		<pretty-code :code="html.input"></pretty-code>

		<h3 id="select"><a href="#select">#</a> Select</h3>
		<p>
			Use the <em>select</em> attribute <code class="color-secondary">oo-form="select"</code> on an element having <markup>select</markup> <strong>as a child</strong><br>
			Alter the size of the element by applying any of the text-sizes classes available from text utitlies.<br>
			Alter the appearance of the select by applying classes from the color utilities.
		</p>

		<label> Select Tiny Option</label>
		<div oo-form="select" class="text-tiny mb-15">
			<select>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</select>
		</div>

		<label> Select Option</label>
		<div oo-form="select" class="border-danger">
			<select>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</select>
		</div>
		<p class="text-tiny color-danger mt-5">Textfield is required</p>
		<pretty-code :code="html.select"></pretty-code>

		<h3 id="checkbox"><a href="#checkbox">#</a> Checkbox</h3>
		<p>
			Apply the class <code>.checkbox</code>to <markup>input type="checkbox"</markup> preceding <markup>label</markup><br>
			Alter the appearance of the checkbox by applying classes from the color utilities to the <markup>label</markup>.
		</p>
		<input class="checkbox" id="checkbox-1" type="checkbox">
		<label for="checkbox-1">Checkbox 1</label>
		<input class="checkbox" id="checkbox-2" type="checkbox">
		<label class="border-danger" for="checkbox-2">Checkbox 2</label>
		<p class="text-tiny color-danger mt-5">Checkbox is required</p>

		<pretty-code :code="html.checkbox"></pretty-code>

		<p>Need extra sizes? Set values to the variable <code class="color-info">$checkbox-sizes</code>.<br>It will generate modifiers with the name you created. Those sizes will only modify the dimenstion of the checkbox itself without interfering with the label. If you wish to also change the size of the label, please apply text utilities' classes such as <code>.text-small</code> <code>.text-large</code> and others.</p>
		<pretty-code class="language-css" :code="html.checkboxSizesVariable"></pretty-code>

		<input class="checkbox -small" id="checkbox-small-1" type="checkbox">
		<label class="text-small" for="checkbox-small-1">Checkbox small 1</label>
		<input class="checkbox -small" id="checkbox-small-2" type="checkbox">
		<label class="text-small mb-15" for="checkbox-small-2">Checkbox small 2</label>
		<input class="checkbox -large" id="checkbox-large-1" type="checkbox">
		<label for="checkbox-large-1">Checkbox large 1</label>
		<input class="checkbox -large" id="checkbox-large-2" type="checkbox">
		<label for="checkbox-large-2">Checkbox large 2</label>

		<pretty-code :code="html.checkboxSizes"></pretty-code>

		<h3 id="radio"><a href="#radio">#</a> Radio</h3>
		<p>
			Apply the class <code>.radio</code>to <markup>input type="radio"</markup> preceding <markup>label</markup><br>
			Alter the appearance of the radio by applying classes from the color utilities to the <markup>label</markup>.
		</p>
		<input class="radio" id="radio-1" type="radio" name="radio">
		<label for="radio-1">Radio 1</label>
		<input class="radio" id="radio-2" type="radio" name="radio">
		<label class="border-danger" for="radio-2">Radio 2</label>
		<p class="text-tiny color-danger mt-5">Radio is required</p>

		<pretty-code :code="html.radio"></pretty-code>

		<p>Need extra sizes? Set values to the variable <code class="color-info">$radio-sizes</code>.</p>
		<pretty-code class="language-css" :code="html.radioSizesVariable"></pretty-code>

		<input class="radio -medium" id="radio-medium-1" type="radio" name="radio-medium">
		<label for="radio-medium-1">Radio medium 1</label>
		<input class="radio -medium" id="radio-medium-2" type="radio" name="radio-medium">
		<label class="mb-15" for="radio-medium-2">Radio medium 2</label>

		<input class="radio -large" id="radio-large-1" type="radio" name="radio-large">
		<label class="text-large" for="radio-large-1">Radio large 1</label>
		<input class="radio -large" id="radio-large-2" type="radio" name="radio-large">
		<label class="text-large" for="radio-large-2">Radio large 2</label>

		<pretty-code :code="html.radioSizes"></pretty-code>

		<h3 id="toggle"><a href="#toggle">#</a> Toggle</h3>
		<p>Apply the class <code>.toggle</code>to <markup>input type="checkbox"</markup> preceding <markup>label</markup></p>
		<input class="toggle" id="toggle-1" type="checkbox">
		<label for="toggle-1">Toggle</label>
		<pretty-code :code="html.toggle"></pretty-code>

		<p>Need extra sizes? Set values to the variable <code class="color-info">$toggle-sizes</code>.</p>
		<pretty-code class="language-css" :code="html.toggleSizesVariable"></pretty-code>

		<input class="toggle -large" id="toggle-large" type="checkbox">
		<label class="text-large" for="toggle-large">Toggle large</label>
		<pretty-code :code="html.toggleSizes"></pretty-code>

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
			input: require('./code/input.html'),
			checkbox: require('./code/checkbox.html'),
			checkboxSizesVariable: require('./code/checkbox-sizes-variable.html'),
			checkboxSizes: require('./code/checkbox-sizes.html'),
			radio: require('./code/radio.html'),
			radioSizes: require('./code/radio-sizes.html'),
			radioSizesVariable: require('./code/radio-sizes-variable.html'),
			toggle: require('./code/toggle.html'),
			toggleSizes: require('./code/toggle-sizes.html'),
			toggleSizesVariable: require('./code/toggle-sizes-variable.html'),
			select: require('./code/select.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
