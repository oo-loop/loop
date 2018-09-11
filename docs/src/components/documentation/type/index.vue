<template>
	<div>
		<h1 class="title">Typography</h1>
		<p class="text-large">Modify font sizes based on rem unit and relative to 100% font-size (1rem = 16px)</p>

		<h2 id="headings"><router-link to="#headings">#</router-link> Headings</h2>
		<p>HTML headings, <markup>h1</markup> through <markup>h6</markup> matching the set of sizes of the property <code>headings.sizes</code> in <code>$ooLoop</code>.<br>
		The value of a heading can either be unique or list a map of breakpoints for responsive purpose.</p>
		
		<h1>h1 Heading</h1>
		<h2>h2 Heading</h2>
		<h3>h3 Heading</h3>
		<h4>h4 Heading</h4>
		<h5>h5 Heading</h5>
		<h6>h6 Heading</h6>

		<pretty-code class="language-scss" :code="html.varHeading"></pretty-code>
		<p>Change the values at your convenience via the function <code>ooSet(PROPERTY, VALUE)</code><br>
		(<code>rt</code> stands for <i>root</i>, the default value.)</p>

		<pretty-code class="language-scss" :code="html.varHeadingSet"></pretty-code>

		<p>Change the values from the <code>ooInit()</code> method</p>
		<pretty-code class="language-scss" :code="html.varHeadingInit"></pretty-code>

		<h3>Heading classes</h3>
		<p>Use the classes set in the variable <code class="color-info">$heading-font-sizes-classes</code>.<br>Add or remove values to match your need, by default <code>.h1</code> through <code>.h4</code>.</p>

		<pretty-code class="language-css" :code="html.varHeadingClasses"></pretty-code>
		<pretty-code :code="html.heading"></pretty-code>

		<h2 id="text-elements"><router-link to="#text-elements">#</router-link> Text Elements</h2>
		<p>Common inline HTML elements for semantic.</p>
		<ul class="list-unstyle">
			<li><markup>mark</markup> for <mark>highlighted text</mark></li>
			<li><markup>del</markup> for <del>deleted text</del>, if the document has been updated</li>
			<li><markup>ins</markup> for <ins>inserted text</ins>, if the document has been updated</li>
			<li><markup>strong</markup> for <strong>important text</strong></li>
			<li><markup>em</markup> for <em>emphasized text</em></li>
		</ul>

		<h2 id="lists"><router-link to="#lists">#</router-link> Lists</h2>
		<p>Format the style of the list of elements through the classes <code>.list-unstyle</code> <code>.list-inline</code> <code>.list-divide</code>.</p>
		<ul>
			<li>list item 1</li>
			<li>list item 2</li>
			<li>list item 3</li>
		</ul>
		<ol>
			<li>ordered list item 1</li>
			<li>ordered list item 2</li>
			<li>ordered list item 3</li>
		</ol>
		<ul class="list-unstyle">
			<li>list unstyle item 1</li>
			<li>list unstyle item 2</li>
			<li>list unstyle item 3</li>
		</ul>
		<ul class="list-inline">
			<li>list inline item 1</li>
			<li>list inline item 2</li>
			<li>list inline item 3</li>
		</ul>
		<ul class="list-divide">
			<li>list divide item 1</li>
			<li>list divide item 2</li>
			<li>list divide item 3</li>
		</ul>
		<pretty-code :code="html.list"></pretty-code>

		<p>Center the list with the class <code>.list-center</code></p>
		<ul class="list-center">
			<li>list item 1</li>
			<li>list item 2</li>
			<li>list item 3</li>
		</ul>
		<ul class="list-unstyle list-center">
			<li>list unstyle item 1</li>
			<li>list unstyle item 2</li>
			<li>list unstyle item 3</li>
		</ul>
		<ul class="list-inline list-center">
			<li>list inline item 1</li>
			<li>list inline item 2</li>
			<li>list inline item 3</li>
		</ul>
		<ul class="list-divide list-center">
			<li>list divide item 1</li>
			<li>list divide item 2</li>
			<li>list divide item 3</li>
		</ul>

		<pretty-code :code="html.listCenter"></pretty-code>
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
			listCenter: require('./code/list-center.html'),
			varHeading: require('./code/var-heading.html'),
			varHeadingSet: require('./code/var-heading-set.html'),
			varHeadingInit: require('./code/var-heading-init.html'),
			varHeadingClasses: require('./code/var-heading-classes.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
</style>
