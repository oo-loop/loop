<template>
	<div>
		<h1 class="title">Column</h1>
		<p class="text-large">Based on Flexbox</p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Use the 12 grid system.<br>Change the size of the column by adding the modifier class <code>-$screen-$number</code> on the column element.<br>Or let the row being automatically equally divided by the number of columns.
		<div class="row">
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
		</div>
		<div class="row">
			<div class="col -xs-12 -sm-6 -md-4 -lg-3"><p class="cell">cell</p></div>
			<div class="col -xs-12 -sm-6 -md-8 -lg-9"><p class="cell">cell</p></div>
			<div class="col -sm-6 -md-7 -lg-8"><p class="cell">cell</p></div>
			<div class="col"><p class="cell">auto</p></div>
		</div>

		<pretty-code :code="html.column"></pretty-code>

		<h3 id="gap"><a href="#gap">#</a> Gap</h3>
		<p>Change the gap of the row by adding one of the modifiers <code>-gap-less</code> <code>-gap-tiny</code> <code>-gap-small</code></p>

		<div class="row -gap-small">
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
		</div>
		<div class="row -gap-tiny">
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
		</div>
		<div class="row -gap-less">
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
			<div class="col"><p class="cell">auto</p></div>
		</div>
		<pretty-code :code="html.gap"></pretty-code>

		<h3 id="offset"><a href="#offset">#</a> Offsets</h3>
		<div class="row">
			<div class="col -sm-6 -sm-offset-6"><p class="cell">cell</p></div>
			<div class="col -sm-7 -sm-offset-5"><p class="cell">cell</p></div>
			<div class="col -sm-8 -sm-offset-4"><p class="cell">cell</p></div>
			<div class="col -sm-9 -sm-offset-3"><p class="cell">cell</p></div>
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
			gap: require('./code/gap.html'),
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
