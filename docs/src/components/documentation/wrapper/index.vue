<template>
	<div>
		<h1 class="title">Wrapper</h1>
		<p class="text-large">Wrap elements with padding around them.</p>
		<p>Use the class <code>.wrapper</code> or <code>.wrapper-{$sizeName}</code> matching the sizes set in the variable <code class="color-info">$wrapper-padding-sizes</code>. By default <code>.wrapper-tiny</code> <code>.wrapper-small</code> <code>.wrapper-large</code> </p>

		<div class="wrapper-tiny bg-secondary mb-15">
			<div class="bg-primary"><br></div>
		</div>
		<div class="wrapper-small bg-secondary mb-15">
			<div class="bg-primary"><br></div>
		</div>
		<div class="wrapper bg-secondary mb-15">
			<div class="bg-primary"><br></div>
		</div>
		<div class="wrapper-large bg-secondary">
			<div class="bg-primary"><br></div>
		</div>

		<pretty-code :code="html.sizes"></pretty-code>

		<h3><a href="#responsive">#</a> Responsive</h3>
		<p>Make wrapper responsive by adding data to the map variable <code class="color-info">$wrapper-responsive-sizes</code>.</p>
		<pretty-code class="language-css" :code="html.responsiveVariables"></pretty-code>

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
			sizes: require('./code/sizes.html'),
			responsive: require('./code/responsive.html'),
			responsiveVariables: require('./code/responsive-variables.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
</style>
