<template>
	<div>
		<h1 class="title">Column</h1>
		<p>Based on Flexbox</p>

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

		<h3 id="offset"><a href="#offset">#</a> Offset</h3>
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
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import "~loop/base/variables";
	.cell {
		margin-bottom: 0;
		text-align: center;
		background-color: $color-primary;
	}
</style>
