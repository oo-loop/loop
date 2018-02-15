<template>
	<div>
		<h1 class="title">Form<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Components for form elements
		<br><code class="color-secondary font-bold">oo-form</code></p>

		<h3 id="input"><a href="#input">#</a> Input</h3>
		<p>
			Use the <code class="color-secondary">input</code> property <code class="color-secondary">oo-form="input"</code> to format the appearance of the textfield.<br>
			Alter the size of the input by applying any of the <code class="color-info">$text-sizes</code> classes available from text utitlies.<br>
			Alter the appearance of the input by applying any classes from the color utitlies.
		</p>
		<label for="default-input">Input</label>
		<input oo-form="input" class="mb-15" id="default-input" type="text">

		<label for="input-text-large">Larger input with text-large</label>
		<input oo-form="input" class="border-danger text-large" id="input-text-large" type="text">
		<p class="text-tiny color-danger mt-5">Textfield is required.</p>

		<pretty-code :code="html.input"></pretty-code>

		<h4>Paddings</h4>
		<p>Wanting more control than <code class="color-info">$text-sizes</code> classes?<br>
		Optionaly set a series of padding sizes to alter the dimension of the input. Through the variable <code class="color-info">$input-padding-sizes</code>, add new properties to <code class="color-secondary">oo-form</code></p>

		<pretty-code class="language-css" :code="html.inputPaddingVariable"></pretty-code>

		<label for="large-default-input">Large input</label>
		<input oo-form="input large" class="mb-15" id="large-default-input" type="text">

		<pretty-code :code="html.inputLarge"></pretty-code>

		<h3 id="select"><a href="#select">#</a> Select</h3>
		<p>
			Use the <code class="color-secondary">select</code> property <code class="color-secondary">oo-form="select"</code> on an element having <markup>select</markup> <strong>as a child</strong><br>
			Alter the size of the element by applying any of the text-sizes classes available from text utitlies.<br>
			Alter the appearance of the select by applying any classes from the color utilities.
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

		<h4>Paddings</h4>
		<p>Optionally add extra dimension to your select inheriting values from <code class="color-info">$input-padding-sizes</code></p>

		<label> Select Option</label>
		<div oo-form="select large">
			<select>
				<option value="1">Option 1</option>
			</select>
		</div>
		<pretty-code :code="html.selectLarge"></pretty-code>

		<h3 id="checkbox"><a href="#checkbox">#</a> Checkbox</h3>
		<p>
			Use the <code class="color-secondary">checkbox</code> property <code class="color-secondary">oo-form="checkbox"</code> to <markup>input type="checkbox"</markup> <u>preceding</u> <markup>label</markup><br>
			Alter the appearance of the checkbox by applying classes from the color utilities.
		</p>
		<input oo-form="checkbox" id="checkbox-1" type="checkbox">
		<label for="checkbox-1">Checkbox 1</label>
		<input oo-form="checkbox" class="border-danger" id="checkbox-2" type="checkbox">
		<label for="checkbox-2">Checkbox 2</label>
		<p class="text-tiny color-danger mt-5">Checkbox is required</p>

		<pretty-code :code="html.checkbox"></pretty-code>

		<p>Need extra sizes? Set values to the variable <code class="color-info">$checkbox-sizes</code>.<br>It will generate <code class="color-secondary">oo-form</code> property with the name you created. Those sizes will only modify the dimenstion of the checkbox itself without interfering with the label. If you wish to also change the size of the label, please apply text utilities' classes such as <code>.text-small</code> <code>.text-large</code> and others.</p>
		<pretty-code class="language-css" :code="html.checkboxSizesVariable"></pretty-code>

		<input oo-form="checkbox small" id="checkbox-small-1" type="checkbox">
		<label class="text-small" for="checkbox-small-1">Checkbox small 1</label>
		<input oo-form="checkbox small" id="checkbox-small-2" type="checkbox">
		<label class="text-small mb-15" for="checkbox-small-2">Checkbox small 2</label>
		<input oo-form="checkbox large" id="checkbox-large-1" type="checkbox">
		<label for="checkbox-large-1">Checkbox large 1</label>
		<input oo-form="checkbox large" id="checkbox-large-2" type="checkbox">
		<label for="checkbox-large-2">Checkbox large 2</label>

		<pretty-code :code="html.checkboxSizes"></pretty-code>

		<h3 id="radio"><a href="#radio">#</a> Radio</h3>
		<p>
			Use the <code class="color-secondary">radio</code> property <code class="color-secondary">oo-form="radio"</code> to <markup>input type="radio"</markup> <u>preceding</u> <markup>label</markup><br>
			Alter the appearance of the radio by applying classes from the color utilities.
		</p>
		<input oo-form="radio" id="radio-1" type="radio" name="radio">
		<label for="radio-1">Radio 1</label>
		<input oo-form="radio" class="border-danger" id="radio-2" type="radio" name="radio">
		<label for="radio-2">Radio 2</label>
		<p class="text-tiny color-danger mt-5">Radio is required</p>

		<pretty-code :code="html.radio"></pretty-code>

		<p>Need extra sizes? Set values to the variable <code class="color-info">$radio-sizes</code>.</p>
		<pretty-code class="language-css" :code="html.radioSizesVariable"></pretty-code>

		<input oo-form="radio medium" id="radio-medium-1" type="radio" name="radio-medium">
		<label for="radio-medium-1">Radio medium 1</label>
		<input oo-form="radio medium" id="radio-medium-2" type="radio" name="radio-medium">
		<label class="mb-15" for="radio-medium-2">Radio medium 2</label>

		<input oo-form="radio large" id="radio-large-1" type="radio" name="radio-large">
		<label class="text-large" for="radio-large-1">Radio large 1</label>
		<input oo-form="radio large" id="radio-large-2" type="radio" name="radio-large">
		<label class="text-large" for="radio-large-2">Radio large 2</label>

		<pretty-code :code="html.radioSizes"></pretty-code>

		<h3 id="toggle"><a href="#toggle">#</a> Toggle</h3>
		<p>Use the <code class="color-secondary">toggle</code> property <code class="color-secondary">oo-form="toggle"</code> to <markup>input type="checkbox"</markup> preceding <markup>label</markup></p>
		<input oo-form="toggle" id="toggle-1" type="checkbox">
		<label for="toggle-1">Toggle</label>
		<pretty-code :code="html.toggle"></pretty-code>

		<p>Need extra sizes? Set values to the variable <code class="color-info">$toggle-sizes</code>.</p>
		<pretty-code class="language-css" :code="html.toggleSizesVariable"></pretty-code>

		<input oo-form="toggle large" id="toggle-large-1" type="checkbox">
		<label class="text-large" for="toggle-large-1">Toggle large</label>

		<input oo-form="toggle labelless large" id="toggle-large-2" type="checkbox">
		<label class="text-large" for="toggle-large-2"></label>
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
			checkbox: require('./code/checkbox.html'),
			checkboxSizesVariable: require('./code/checkbox-sizes-variable.html'),
			checkboxSizes: require('./code/checkbox-sizes.html'),
			input: require('./code/input.html'),
			inputPaddingVariable: require('./code/input-padding-variable.html'),
			inputLarge: require('./code/input-large.html'),
			radio: require('./code/radio.html'),
			radioSizes: require('./code/radio-sizes.html'),
			radioSizesVariable: require('./code/radio-sizes-variable.html'),
			toggle: require('./code/toggle.html'),
			toggleSizes: require('./code/toggle-sizes.html'),
			toggleSizesVariable: require('./code/toggle-sizes-variable.html'),
			select: require('./code/select.html'),
			selectLarge: require('./code/select-large.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
