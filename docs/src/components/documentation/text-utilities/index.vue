<template>
	<div>
		<h1 class="title">Text Utilities</h1>

		<p class="text-large">A bunch of handy utilities to customize texts on the fly.<br> Those utilities are made flexible to be able to add and/or remove classes on any projects.<br>Modifing specific variables will keep the strict minimum rules in css, and make the generated file smaller.</p>

		<h3 id="sizes"><a href="#sizes">#</a> Sizes</h3>
		<p>Quickly change the size of the text. Three sizes as default.</p>
		<code>.text-large</code><p class="text-large color-gray">Text large Lorem ipsum dolor sit amet.</p>
		<code>.text-small</code><p class="text-small color-gray">Text small Lorem ipsum dolor sit amet.</p>
		<code>.text-tiny</code><p class="text-tiny color-gray">Text tiny Lorem ipsum dolor sit amet.</p>
		<p>Need more or need less? Change the set <code class="color-info">$text-sizes</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.varFontSizes"></pretty-code>

		<h4>Responsive text</h4>
		<p>Assign the needed breakpoint to the variables <code class="color-info">$text-sizes-breakpoints-classes</code></p>
		<pretty-code class="language-css" :code="html.varFontSizesBreakpoint"></pretty-code>

		<h3 id="alignments"><a href="#alignments">#</a> Alignments</h3>
		<p>Easily change the aligment of the text through the classes <code>.text-left</code> <code>.text-right</code> <code>.text-center</code>.<br>Modify the list of <code class="color-info">$text-alignments</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.varTextAlignments"></pretty-code>
		<p>Need to have different text alignments for responsive purpose?<br>Add the necessary breakpoints to the list <code class="color-info">$text-alignments-breakpoints-classes</code> and the classes such as <code>text-center@sm</code> <code>text-center@md</code> will be generated</p>
		<pretty-code class="language-css" :code="html.varTextAlignmentsBreakpoint"></pretty-code>
		<p class="text-center text-left@sm text-center@lg color-gray">My text is centered by default,<br>left aligned from small device and centered again on large device.</p>
		<pretty-code :code="html.textAlignments"></pretty-code>

		<h3 id="transforms"><a href="#transforms">#</a> Transforms</h3>
		<p>Change the capitalization of the text through the class <code>.text-uppercase</code>.</p>
		<p class="text-uppercase color-gray">This is an uppercase text.</p>
		<pretty-code :code="html.textTransforms"></pretty-code>
		<p>The variable <code class="color-info">$text-transforms</code> is available if you want to change the options. Any values from the property <code class="color-success">text-transform:</code> can be assigned</p>
		<pretty-code class="language-css" :code="html.varTextTransforms"></pretty-code>
		<p class="text-lowercase color-gray">Lowercase text is now available.</p>
		<p class="text-capitalize color-gray">Capitalize text is now available.</p>
		<pretty-code :code="html.textTransformsNew"></pretty-code>

		<h4>Responsive text-transform</h4>
		<p>Assign the needed breakpoint to the variables <code class="color-info">$text-transforms-breakpoints-classes</code>.<br>
		Get <code>.text-uppercase@lg</code>...</p>

		<h3 id="decorations"><a href="#decorations">#</a> Decorations</h3>
		<p>Change the decoration of the text</p>
		<ul class="list-unstyle">
			<li><code class="color-info">$text-decorations</code> Variable to set preferences (<strong>empty</strong> from start)</li>
			<li><code class="color-success">text-decoration:</code> Property based on</li>
			<li><code>.text-{$decorationName}</code> Classes generated</li>
		</ul>
		<pretty-code class="language-css" :code="html.varTextDecorations"></pretty-code>
		<p class="text-line-through color-gray">This is a line-through text.</p>
		<p class="text-underline color-gray">This is an underline text.</p>
		<pretty-code :code="html.textDecorations"></pretty-code>
		<h4>Responsive</h4>
		<ul class="list-unstyle mb-25">
			<li><code class="color-info">$text-decorations-breakpoints-classes</code> Variable to set breakpoint. (<strong>empty</strong> from start)</li>
			<li><code>.text-{$decorationName}@{$breakpoint}</code> Classes generated</li>
		</ul>

		<h3 id="letter-spacing"><a href="#letter-spacing">#</a> Letter Spacings</h3>
		<p>Change the letter-spacing of the text.</p>
		<ul class="list-unstyle mb-25">
			<li><code class="color-info">$letter-spacings</code> Variable to set preferences (<strong>map format</strong>)</li>
			<li><code class="color-success">letter-spacing:</code> Property based on</li>
			<li><code>.letter-spacing-{$letterSpacingName}</code> Classes generated. (default including <code>narrow</code> and <code>wide</code>)</li>
		</ul>

		<pretty-code class="language-css" :code="html.varLetterSpacings"></pretty-code>
		
		<code>.letter-spacing-narrow</code>
		<p class="letter-spacing-narrow color-gray">Text with narrow letter spacing.</p>
		<code>.letter-spacing-wide</code>
		<p class="letter-spacing-wide color-gray">Text with wide letter spacing.</p>
		<code>.letter-spacing-wider</code>
		<p class="letter-spacing-wider color-gray">Text width wider letter spacing.</p>
		<h4>Responsive</h4>
		<ul class="list-unstyle mb-25">
			<li><code class="color-info">$letter-spacings-breakpoints-classes</code> Variable to set breakpoint. (<strong>empty</strong> from start)</li>
			<li><code>.letter-spacing-{letterSpacingName}@{$breakpoint}</code> Classes generated</li>
		</ul>

		<h3 id="styles"><a href="#styles">#</a> Styles</h3>
		<p>Change the style of the font.</p>
		<ul class="list-unstyle">
			<li><code class="color-info">$font-styles</code> Variable to set preferences</li>
			<li><code class="color-success">font-style:</code> Property based on</li>
			<li><code>.font-{$styleName}</code> Classes generated. (default including <code>italic</code>)</li>
		</ul>
		<pretty-code class="language-css" :code="html.varFontStyles"></pretty-code>
		<p class="font-italic color-gray">This is an italic text.</p>
		<pretty-code :code="html.fontStyles"></pretty-code>
		<h4>Responsive</h4>
		<ul class="list-unstyle mb-25">
			<li><code class="color-info">$font-styles-breakpoints-classes</code> Variable to set breakpoint. (<strong>empty</strong> from start)</li>
			<li><code>.font-{$styleName}@{$breakpoint}</code> Classes generated</li>
		</ul>

		<h3 id="weights"><a href="#weights">#</a> Weights</h3>
		<p>Quickly change the weight of the text. Two sizes as default.</p>
		<code>.font-bold</code><p class="font-bold">This paragraph font weight is bold.</p>
		<code>.font-light</code><p class="font-light">This paragraph font weight is light.</p>
		<p>Need more or need less? Change the array <code class="color-info">$font-weights</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.fontWeights"></pretty-code>

		<h3 id="families"><a href="#families">#</a> Families</h3>
		<p>Set the font family of your text through the classes <code>.font-primary</code> <code>.font-secondary</code>.<br>Modify the list of <code class="color-info">$font-families</code> at your convenience.</p>
		<pretty-code class="language-css" :code="html.fontFamilies"></pretty-code>
		<p class="font-secondary">This paragraph is using a serif font set as secondary</p>
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
			fontWeights: require('./code/font-weights.html'),
			textAlignments: require('./code/text-alignments.html'),
			textTransforms: require('./code/text-transforms.html'),
			textTransformsNew: require('./code/text-transforms-new.html'),
			textDecorations: require('./code/text-decorations.html'),
			varLetterSpacings: require('./code/var-letter-spacings.html'),
			fontStyles: require('./code/font-styles.html'),
			fontFamilies: require('./code/font-families.html'),
			fontFamiliesSample: require('./code/font-families-sample.html'),
			varFontSizes: require('./code/var-font-sizes.html'),
			varFontSizesBreakpoint: require('./code/var-font-sizes-breakpoint.html'),
			varFontStyles: require('./code/var-font-styles.html'),
			varTextAlignments: require('./code/var-text-alignments.html'),
			varTextAlignmentsBreakpoint: require('./code/var-text-alignments-breakpoint.html'),
			varTextDecorations: require('./code/var-text-decorations.html'),
			varTextTransforms: require('./code/var-text-transforms.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss">
	@import "~loop/mixins/loop";
	$text-decorations: (
	  'line-through',
	  'underline',
	);
	@include loop($text-decorations, 'text-decoration', '.text');
	$letter-spacings: (
	  'wider': .1rem,
	);
	@include loop($letter-spacings, 'letter-spacing', '.letter-spacing');

</style>
