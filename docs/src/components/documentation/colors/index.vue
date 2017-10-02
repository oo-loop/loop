<template>
	<div>
		<h1 class="title">Colors</h1>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'Utilities',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {
			float: require('./code/float.html'),
			variable: require('./code/variable.html'),
			clearfix: require('./code/clearfix.html'),
			clear: require('./code/clear.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
	.cell {
		padding: 40px;
		display: block;
		color: #fff;
		font-style: normal;
		background-color: $color-secondary;
	}
</style>
