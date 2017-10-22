<template>
	<div>
		<h1 class="title">Button<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Component<br><code class="color-primary">oo-button</code></p> 

		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
		<p>Alter the size of the button by applying any of the <code class="color-info">$text-sizes</code> classes on your <code>button</code></p>
		<p>
		<a class="text-tiny" oo-button>tiny</a>
		<a class="text-small" oo-button>small</a>
		<a oo-button>button</a>
		<a class="text-large" oo-button>large</a>
		</p>
		<pretty-code :code="html.size"></pretty-code>

		<h3 id="colors"><a href="#colors">#</a> Colors</h3>
		<p>Change the color of the button through the properties <code>{$colorname}</code> present in the variable <code class="color-info">$btn-colors-classes</code>.<br>
		By default <code>primary</code> <code>secondary</code> <code>success</code> <code>warning</code> <code>danger</code></p>

		<p>
		<a oo-button="primary">primary</a>
		<a oo-button="secondary">secondary</a>
		<a oo-button="success">success</a>
		<a oo-button="warning">warning</a>
		<a oo-button="danger">danger</a>
		</p>
		<pretty-code :code="html.color"></pretty-code>

		<h3 id="outline"><a href="#outline">#</a> Outline</h3>
		<p>Change the type of button to outline through the property <code>outline</code></p>
		<p>
		<a oo-button="outline primary">primary</a>
		<a oo-button="outline secondary">secondary</a>
		<a oo-button="outline success">success</a>
		<a oo-button="outline warning">warning</a>
		<a oo-button="outline danger">danger</a>
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
			size: require('./code/size.html'),
			color: require('./code/color.html'),
			outline: require('./code/outline.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
