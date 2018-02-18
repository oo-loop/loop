<template>
	<div>
		<h1 class="title">Color Utilities</h1>
		<p class="text-large">A bunch of handy utilities to customize colors on the fly, targeting text, background, border and also svg.</p>
		<p>Every colors set in the global variables <code class="color-info">$colors</code> are available. They can be easliy added to each utilities by calling the corresponding color names. Or by just calling the variable <code class="color-info">$colors-classes</code> supposedly listing every color names.</p>
		<p><code class="color-info">$colors-classes</code> is just a handy way to use the same set of colors accross all utilities and components.</p>

		<pretty-code class="language-css" :code="html.varGlobal"></pretty-code>

		<p>Changes those two variables at will.</p>

		<pretty-code class="language-css" :code="html.varNewGlobal"></pretty-code>
		
		<h3 id="text"><a href="#text">#</a> Text</h3>
		<ul>
			<li><code class="color-info">$text-colors-classes</code> Classes data ( default matching <code class="color-info">$colors-classes</code> )</li>
			<li><code class="color-info">$text-colors</code> Custom data</li>
		</ul>
		<pretty-code class="language-css" :code="html.varText"></pretty-code>
		<p class="color-primary">Here is a short color-primary paragraph</p>
		<p class="color-danger">Here is a short color-danger paragraph</p>
		<p class="color-info">Here is a short color-info paragraph</p>
		<p class="color-success">Here is a short color-success paragraph</p>

		<pretty-code :code="html.text"></pretty-code>

		<h3 id="background"><a href="#background">#</a> Background</h3>
		<ul>
			<li><code class="color-info">$bg-colors-classes</code> Classes data ( default matching <code class="color-info">$colors-classes</code> )</li>
			<li><code class="color-info">$bg-colors</code> Custom data</li>
		</ul>
		<pretty-code class="language-css" :code="html.varBackground"></pretty-code>
		<div class="bg-primary wrapper -small">
			<div class="bg-secondary wrapper -small">
				<div class="bg-success wrapper -small">
					<div class="bg-warning wrapper -small">
						<div class="bg-danger wrapper -small">
							<div class="bg-body text-center text-small">
								Background colors
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<pretty-code :code="html.background"></pretty-code>

		<h3 id="border"><a href="#border">#</a> Border</h3>
		<p>The same logic applies for borders</p>
		<ul>
			<li><code class="color-info">$border-colors-classes</code> Classes data ( default matching <code class="color-info">$colors-classes</code> )</li>
			<li><code class="color-info">$border-colors</code> Custom data</li>
		</ul>

		<div class="bordered border-primary wrapper -small">
			<div class="bordered border-secondary wrapper -small">
				<div class="bordered border-success wrapper -small">
					<div class="bordered border-warning wrapper -small">
						<div class="bordered border-danger text-center text-small">
							Border colors
						</div>
					</div>
				</div>
			</div>
		</div>
		<pretty-code :code="html.border"></pretty-code>
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
			background: require('./code/background.html'),
			border: require('./code/border.html'),
			text: require('./code/text.html'),
			varBackground: require('./code/var-background.html'),
			varGlobal: require('./code/var-global.html'),
			varNewGlobal: require('./code/var-new-global.html'),
			varText: require('./code/var-text.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
	@import '~loop/mixins/loop';

	$text-colors-addon: (
		'info': #2689ef,
		'success': #3fc65c,
	);
	$colors-addon: (
  		'body' : $bgcolor-base,
  		'success':    #8cc63f,
    	'warning':    #fbb03b,
    	'danger':     #f72828,
	);

	@include loop($text-colors-addon, 'color', '.color', true);
	@include loop($colors-addon, 'background-color', '.bg', true);
	@include loop($colors-addon, 'border-color', '.border', true);
</style>
