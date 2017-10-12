<template>
	<div>
		<h1 class="title">Button</h1>
		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
		<p>Alter the size of the button by applying any of the <code class="text-info">$text-sizes</code> classes on your <code>.button</code></p>
		<p>
		<a class="button text-tiny">tiny</a>
		<a class="button text-small">small</a>
		<a class="button">button</a>
		<a class="button text-large">large</a>
		</p>
		<pretty-code :code="html.size"></pretty-code>

		<h3 id="colors"><a href="#colors">#</a> Colors</h3>
		<p>Change the color of the button through the modifiers <code>-$colorname</code> present in the variable <code class="text-info">$btn-colors-classes</code>.<br>
		By default <code>-primary</code> <code>-secondary</code> <code>-success</code> <code>-warning</code> <code>-danger</code></p>

		<p>
		<a class="button -primary">primary</a>
		<a class="button -secondary">secondary</a>
		<a class="button -success">success</a>
		<a class="button -warning">warning</a>
		<a class="button -danger">danger</a>
		</p>
		<pretty-code :code="html.color"></pretty-code>

		<h3 id="outline"><a href="#outline">#</a> Outline</h3>
		<p>Change the type of button to outline through the modifiers <code>-outline</code> combine with a color present in the variable <code class="text-info">$btn-outline-colors-classes</code>.</p>

		<p>
		<a class="button -outline -primary">primary</a>
		<a class="button -outline -secondary">secondary</a>
		<a class="button -outline -success">success</a>
		<a class="button -outline -warning">warning</a>
		<a class="button -outline -danger">danger</a>
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
