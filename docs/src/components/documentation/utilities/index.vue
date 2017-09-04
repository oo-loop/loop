<template>
	<div>
		<h1 class="title">Utilities</h1>

		<h2>Flexible Text Utilities</h2>
		<p class="text-large">Add and/or remove classes at your convenience by modifying the variables and keeping in your css the strict minimum rules, making your file smaller.</p>

		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
		<p>Quickly change the size of the text. Three sizes as default.</p>
		<code>.text-large</code><p class="text-large">Text large Lorem ipsum dolor sit amet.</p>
		<code>.text-small</code><p class="text-small">Text small Lorem ipsum dolor sit amet.</p>
		<code>.text-tiny</code><p class="text-tiny">Text tiny Lorem ipsum dolor sit amet.</p>
		<p>Need more or need less? Change the array <code class="text-info">$text-sizes</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.fontSizes"></pretty-code>

		<h3 id="weights"><a href="#weights">#</a> Weights</h3>
		<p>Quickly change the weight of the text. Two sizes as default.</p>
		<code>.text-strong</code><p class="text-strong">Text strong Lorem ipsum dolor sit amet.</p>
		<code>.text-light</code><p class="text-light">Text light Lorem ipsum dolor sit amet.</p>
		<p>Need more or need less? Change the array <code class="text-info">$text-weights</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.fontWeights"></pretty-code>

		<h3 id="alignments"><a href="#alignments">#</a> Alignments</h3>
		<p>Easily change the aligment of the text through the classes <code>.text-left</code> <code>.text-right</code> <code>.text-center</code>.<br>Modify the list of <code class="text-info">$text-alignments</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.textAlignments"></pretty-code>
		<p>Need to have different text alignments for responsive purpose?<br>Add the necessary breakpoints to the list <code class="text-info">$text-alignments-breakpoints</code> and generate classes such as <code>text-sm-center</code> <code>text-md-center</code>...</p>
		<pretty-code class="language-css" :code="html.textAlignmentsResponsive"></pretty-code>
		<p class="text-center text-sm-left text-lg-center">My text is centered by default,<br>left aligned from small device and centered again on large device.</p>
		<pretty-code :code="html.textAlignmentsSample"></pretty-code>

		<h3 id="families"><a href="#families">#</a> Families</h3>
		<p>Set the font family of your text through the classes <code>.font-base</code> <code>.font-secondary</code>.<br>Modify the list of <code class="text-info">$font-families</code> at your convenience.</p>
		<p class="font-secondary">This paragraph is using a serif font set as secondary</p>
		<pretty-code class="language-css" :code="html.fontFamilies"></pretty-code>
		<pretty-code :code="html.fontFamiliesSample"></pretty-code>

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
			fontSizes: require('./code/font-sizes.html'),
			fontWeights: require('./code/font-weights.html'),
			textAlignments: require('./code/text-alignments.html'),
			textAlignmentsResponsive: require('./code/text-alignments-responsive.html'),
			textAlignmentsSample: require('./code/text-alignments-sample.html'),
			fontFamilies: require('./code/font-families.html'),
			fontFamiliesSample: require('./code/font-families-sample.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
</style>
