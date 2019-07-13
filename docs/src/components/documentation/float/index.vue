<template>
	<div>
		<h1 class="title">Float Utilities</h1>
		<p class="text-large">Set a floating element on the fly.</p>
		<p>Use the classes <code>.float-{$name}</code> present in the variable <code class="color-info">$float</code>. Change the variable at will.</p>
		<pretty-code class="language-css" :code="html.varDefault"></pretty-code>

		<p>Add breakpoints to the variable <code class="color-info">$float-breakpoints-classes</code> to be able to switch float type between screen sizes. Creating <code>.float-{$size}@{breakpoint}</code> to match your need.</p>
		<pretty-code class="language-css" :code="html.varBreakpoint"></pretty-code>
		
		<p class="font-secondary font-italic float-right@md float-none@lg">This paragraph is floating on the right on medium device.</p>
		<pretty-code class="clear" :code="html.float"></pretty-code>

		<h3 id="clearfix"><router-link to="#clearfix">#</router-link> Clearfix</h3>
		<p>Use the class <code>.clearfix</code> to clear the floating elements of a container</p>
		<p class="font-italic font-secondary clearfix"><span class="cell font-base float-left">Float</span>This is a paragraph with a float element</p>
		<p class="font-italic font-secondary">This is an another small paragraph</p>
		<pretty-code :code="html.clearfix"></pretty-code>

		<h3 id="clear"><router-link to="#clear">#</router-link> Clear</h3>
		<p class="clear">Use <code>.clear</code> to clear siblings floating elements</p>
		<p class="font-italic font-secondary"><span class="cell font-base float-left">Float</span>This is a paragraph with a float element</p>
		<p class="font-italic font-secondary clear">This is an another small paragraph</p>
		<pretty-code :code="html.clear"></pretty-code>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'Float',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {
			clear: require('./code/clear.html'),
			clearfix: require('./code/clearfix.html'),
			float: require('./code/float.html'),
			varBreakpoint: require('./code/var-breakpoint.html'),
			varDefault: require('./code/var-default.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	.cell {
		padding: 40px;
		display: block;
		color: #fff;
		font-style: normal;
		background-color: #959595;
	}
</style>
