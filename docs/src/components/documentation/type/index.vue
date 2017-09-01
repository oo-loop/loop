<template>
	<div>
		<h1 class="title">Typography</h1>
		<p class="text-large">Modifies the base font size by rem.</p>

		<h3 id="headings"><a href="#headings">#</a> Headings</h3>
		<p>HTML headings, <markup>h1</markup> through <markup>h6</markup> as well as the classes <code>.h1</code> through <code>.h6</code></p>

		<h1>h1 Heading</h1>
		<h2>h2 Heading</h2>
		<h3>h3 Heading</h3>
		<h4>h4 Heading</h4>
		<h5>h5 Heading</h5>
		<h6>h6 Heading</h6>

		<pretty-code :code="html.heading"></pretty-code>

		<h3 id="text-elements"><a href="#text-elements">#</a> Text Elements</h3>
		<p>Common inline HTML elements for semantic.</p>
		<ul class="list -unstyle">
			<li><markup>mark</markup> for <mark>highlighted text</mark></li>
			<li><markup>del</markup> for <del>deleted text</del>, if the document has been updated</li>
			<li><markup>ins</markup> for <ins>inserted text</ins>, if the document has been updated</li>
			<li><markup>strong</markup> for <strong>important text</strong></li>
			<li><markup>em</markup> for <em>emphasized text</em></li>
		</ul>

		<h3 id="lists"><a href="#lists">#</a> Lists</h3>
		<p>Format the style of the list of elements by adding the class <code>.list</code> and through the modifiers <code>-unstyle</code><code>-inline</code></p>
		<pretty-code :code="html.list"></pretty-code>

		<p>Divide an inline list by a separator through the modifier <code>-divide</code>. Center it with the other modifier <code>-center</code></p>

		<ul class="list -divide">
			<li>divide list item</li>
			<li>divide list item</li>
			<li>divide list item</li>
		</ul>

		<ul class="list -divide -center">
			<li>divide list centered</li>
			<li>divide list centered</li>
			<li>divide list centered</li>
		</ul>

		<pretty-code :code="html.listDivide"></pretty-code>

		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
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
	name: 'Type',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {
			heading: require('./code/heading.html'),
			list: require('./code/list.html'),
			listDivide: require('./code/list-divide.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
</style>
