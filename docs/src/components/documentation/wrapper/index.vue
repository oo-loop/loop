<template>
	<div>
		<h1 class="title">Wrapper</h1>
		<p class="text-large">Wrap elements with padding around them.</p>
		<p>Use the class <code>.wrapper-{$sizeName}</code> matching the sizes set in the variable <code class="color-info">$wrapper-padding-sizes</code>.</p>

		<pretty-code class="language-css" :code="html.varDefault"></pretty-code>
		
		<div class="wrapper-tiny bg-secondary mb-15">
			<div class="bg-primary text-small text-center">.wrapper-tiny</div>
		</div>
		<div class="wrapper-small bg-secondary mb-15">
			<div class="bg-primary text-small text-center">.wrapper-small</div>
		</div>
		<div class="wrapper bg-secondary mb-15">
			<div class="bg-primary text-small text-center">.wrapper</div>
		</div>

		<p>Add and remove any sizes to create your own set of values</p>

		<pretty-code class="language-css" :code="html.varSet"></pretty-code>

		<div class="wrapper-default bg-secondary mb-15">
			<div class="bg-primary text-small text-center">.wrapper</div>
		</div>
		<div class="wrapper-large bg-secondary mb-25">
			<div class="bg-primary text-small text-center">.wrapper-large</div>
		</div>

		<h3><a href="#map-data">#</a> Map Data</h3>
		<p>Make wrapper responsive by setting map data sizes.</p>
		<pretty-code class="language-css" :code="html.varMapdata"></pretty-code>

		<div class="wrapper-wide bg-secondary mb-25">
			<div class="bg-primary text-small text-center">.wrapper-wide</div>
		</div>

		<h3><a href="#responsive">#</a> Responsive</h3>
		<p>Add breakpoints to the variable <code class="color-info">$wrapper-breakpoints-classes</code> to be able to switch wrappers between screen sizes. Creating <code>.wrapper-{$sizeName}@{breakpoint}</code></p>
		<pretty-code class="language-css" :code="html.varResponsive"></pretty-code>

		<div class="wrapper-tiny wrapper-small@sm wrapper@md wrapper-tiny@lg bg-secondary mb-15">
			<div class="bg-primary text-small text-center">responsive wrappers</div>
		</div>
		<pretty-code :code="html.responsive"></pretty-code>

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
			varDefault: require('./code/var-default.html'),
			varMapdata: require('./code/var-mapdata.html'),
			varResponsive: require('./code/var-responsive.html'),
			varSet: require('./code/var-set.html'),
			responsive: require('./code/responsive.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
	@import '~loop/mixins/loop';

	$new-wrapper-padding-sizes: (
		'default': 1rem 1.6rem,
		'large': 3.2rem,
		'wide': (
			'': 2rem,
			sm: 3.2rem,
		    md: 4.6rem,
		    lg: 6rem,
		),
	);
	$wrapper-breakpoints-classes: (sm, md, lg);
	@include loop($new-wrapper-padding-sizes, 'padding', '.wrapper');
	@include loopBreakpoints($wrapper-breakpoints-classes, $wrapper-padding-sizes, 'padding', '.wrapper');
</style>
