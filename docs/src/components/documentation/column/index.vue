<template>
	<div>
		<h1 class="title">Column</h1>
		<p>Based on Flexbox</p>

		<div class="row">
			<div class="col -sm-6 -md-4 -lg-3"><p class="cell">cell</p></div>
			<div class="col -sm-6 -md-8 -lg-9"><p class="cell">cell</p></div>
			<div class="col -sm-6 -md-7 -lg-8"><p class="cell">cell</p></div>
			<div class="col -sm-6 -md-5 -lg-4"><p class="cell">cell</p></div>
		</div>

		<pretty-code :code="html.column"></pretty-code>

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
