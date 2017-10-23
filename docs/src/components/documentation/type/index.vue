<template>
	<div>
		<h1 class="title">Typography</h1>
		<p class="text-large">Modifies the base font size by rem.</p>

		<h3 id="headings"><a href="#headings">#</a> Headings</h3>
		<p>HTML headings, <markup>h1</markup> through <markup>h6</markup> as well as the classes <code>.h1</code> through <code>.h4</code>.<br>Add/remove classes to match your needs through the variable <code class="color-info">$heading-font-sizes-classes</code></p>

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
		<p>Format the style of the list of elements through the classes <code>.list-unstyle</code> <code>.list-inline</code> <code>.list-divide</code>.</p>
		<ul>
			<li>list item 1</li>
			<li>list item 2</li>
			<li>list item 3</li>
		</ul>
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
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
</style>
