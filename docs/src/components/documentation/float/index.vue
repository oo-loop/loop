<template>
	<div>
		<h1 class="title">Float Utilities</h1>
		<p class="text-large">Set a floating element on the fly</p>
		<p>Use the classes <code>.float-left</code> and <code>.float-right</code><br>
		or the responsive <code>.float-left@{$breakpoint}</code> <code>.float-right@{$breakpoint}</code> <code>.float-none@{$breakpoint}</code> matching all the breakpoints of your project</p>
		<p class="font-secondary text-italic float-right@md float-none@lg">This paragraph is floating on the right on medium device.</p>
		<pretty-code class="clear" :code="html.float"></pretty-code>
		<p>Modify the default breakpoints to match your need</p>
		<pretty-code class="language-css" :code="html.variable"></pretty-code>

		<h3 id="clearfix"><a href="#clearfix">#</a> Clearfix</h3>
		<p>Use the class <code>.clearfix</code> to clear the floating elements of a container</p>
		<p class="text-italic font-secondary clearfix"><span class="cell font-base float-left">Float</span>This is a paragraph with a float element</p>
		<p class="text-italic font-secondary">This is an another small paragraph</p>
		<pretty-code :code="html.clearfix"></pretty-code>

		<h3 id="clear"><a href="#clear">#</a> Clear</h3>
		<p class="clear">Use <code>.clear</code> to clear siblings floating elements</p>
		<p class="text-italic font-secondary"><span class="cell font-base float-left">Float</span>This is a paragraph with a float element</p>
		<p class="text-italic font-secondary clear">This is an another small paragraph</p>
		<pretty-code :code="html.clear"></pretty-code>
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
