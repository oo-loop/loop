<template>
	<div>
		<h1 class="title">Button<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Component<br><code class="color-secondary font-bold">oo-button</code></p>

		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
		<p>Alter the size of the button by applying any of the <code class="color-info">$text-sizes</code> classes on your button element.</p>
		<p>
		<a oo-button class="text-tiny mb-5">Tiny</a>
		<a oo-button class="text-small mb-5">Small</a>
		<a oo-button class="mb-5">Button</a>
		<a oo-button class="text-large mb-5">Large</a>
		</p>
		<pretty-code :code="html.size"></pretty-code>

		<h4>Paddings</h4>
		<p>Optionaly set a series of padding sizes to give a different look to your button. Through the variable <code class="color-info">$btn-padding-sizes</code>, add new properties to <code class="color-secondary">oo-button</code></p>

		<pretty-code class="language-css" :code="html.varPadding"></pretty-code>

		<a oo-button="baggy">Baggy</a>
		<a oo-button="tight">Tight</a>

		<pretty-code :code="html.padding"></pretty-code>

		<h3 id="colors"><a href="#colors">#</a> Colors</h3>
		<p>Change the color of the button through the properties <code class="color-secondary">{$colorname}</code> present in the variable <code class="color-info">$btn-colors-classes</code>. Default values including <code class="color-secondary">primary</code> <code class="color-secondary">secondary</code> matching default values from <code class="color-info">$colors-classes</code>.</p>
		
		<p>
		<a oo-button="primary" class="mb-5">Primary</a>
		<a oo-button="secondary" class="mb-5">Secondary</a>
		</p>
		
		<pretty-code :code="html.default"></pretty-code>

		<p>You can easily add more colors by adding more values to the global variables <code class="color-info">$colors</code> and <code class="color-info">$colors-classes</code><p>

		<pretty-code class="language-css" :code="html.varColor"></pretty-code>

		<p>
		<a oo-button="success" class="mb-5">Success</a>
		<a oo-button="warning" class="mb-5">Warning</a>
		<a oo-button="danger" class="mb-5">Danger</a>
		</p>

		<pretty-code :code="html.color"></pretty-code>
		
		<p>Custom colors can also be added through the variable <code class="color-info">$btn-colors</code>.<br>
		<strong>Note:</strong> Loop automatically adjusts the contrast between <i>text</i> and <i>background</i> ($color-base for light background, white for dark background).</p>

		<pretty-code class="language-css" :code="html.varCustomColor"></pretty-code>


		<h3 id="outline"><a href="#outline">#</a> Outline</h3>
		<p>Change the type of button to outline through the property <code class="color-secondary">outline</code></p>
		<p>
		<a oo-button="outline primary" class="mb-5">Primary</a>
		<a oo-button="outline secondary" class="mb-5">Secondary</a>
		<a oo-button="outline success" class="mb-5">Success</a>
		<a oo-button="outline warning" class="mb-5">Warning</a>
		<a oo-button="outline danger" class="mb-5">Danger</a>
		</p>
		<pretty-code :code="html.outline"></pretty-code>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'Button',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {
			color: require('./code/color.html'),
			default: require('./code/default.html'),
			outline: require('./code/outline.html'),
			padding: require('./code/padding.html'),
			size: require('./code/size.html'),
			varColor: require('./code/var-color.html'),
			varCustomColor: require('./code/var-custom-color.html'),
			varPadding: require('./code/var-padding.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
