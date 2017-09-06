<template>
	<div>
		<h1 class="title">Columns</h1>
		<p class="text-large">Based on Flexbox, using the 12 columns system.</p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Change the size of the column by using the classes <code>.column-{$number}</code>, or let the columns being automatically adjusted.<br>Change the column sizes according to the size of the screen through the modifiers <code>-{$screen}-{$number}</code>.</p>
		<div class="columns">
			<div class="column"><p class="cell">auto</p></div>
			<div class="column"><p class="cell">auto</p></div>
		</div>
		<div class="columns">
			<div class="column-12 -sm-6 -md-4 -lg-3"><p class="cell">cell</p></div>
			<div class="column-12 -sm-6 -md-8 -lg-9"><p class="cell">cell</p></div>
			<div class="column-6 -md-7 -lg-8"><p class="cell">cell</p></div>
			<div class="column"><p class="cell">auto</p></div>
		</div>

		<pretty-code :code="html.column"></pretty-code>

		<h3 id="gutter"><a href="#gutter">#</a> Gutter</h3>
		<p>Change the space between the columns by adding one of the modifiers <code>-gutter-less</code> <code>-gutter-small</code> <code>-gutter-large</code>.<br>The modifier <code>-v-gutter-less</code> will remove the vertical gutter.</p>

		<div class="columns -gutter-large -v-gutter-less">
			<div class="column"><p class="cell">large</p></div>
			<div class="column"><p class="cell">large</p></div>
			<div class="column"><p class="cell">large</p></div>
		</div>
		<div class="columns -gutter-small -v-gutter-less">
			<div class="column"><p class="cell">small</p></div>
			<div class="column"><p class="cell">small</p></div>
			<div class="column"><p class="cell">small</p></div>
		</div>
		<div class="columns -gutter-less -v-gutter-less">
			<div class="column"><p class="cell">none</p></div>
			<div class="column"><p class="cell">none</p></div>
			<div class="column"><p class="cell">none</p></div>
		</div>
		<pretty-code :code="html.gutter"></pretty-code>

		<p>Need more or less gutters? Change the array <code class="text-info">$columns-gutter-sizes</code> at your convenience to only match your needs.</p>
		<pretty-code class="language-css" :code="html.gutterVariables"></pretty-code>

		<h3 id="offset"><a href="#offset">#</a> Offsets</h3>
		<div class="columns">
			<div class="column-6 -sm-offset-6"><p class="cell">cell</p></div>
			<div class="column-7 -sm-offset-5"><p class="cell">cell</p></div>
			<div class="column-8 -sm-offset-4"><p class="cell">cell</p></div>
			<div class="column-9 -sm-offset-3"><p class="cell">cell</p></div>
		</div>
		<pretty-code :code="html.offset"></pretty-code>

	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'

export default {
	name: 'Type',
	components: {
		prettyCode
	},
	data: () => ({
		html: {
			column: require('./code/column.html'),
			offset: require('./code/offset.html'),
			gutter: require('./code/gutter.html'),
			gutterVariables: require('./code/gutter-variables.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import "~loop/variables";
	.cell {
		margin-bottom: 0;
		text-align: center;
		background-color: $color-primary;
		border: 1px solid darken($color-primary, 5%);
	}
</style>
