<template>
	<div>
		<h1 class="title">Color Utilities</h1>
		<p class="text-large">A bunch of handy utilities to customize colors on the fly, targeting text, background and border</p>
		<p>Every colors set in the global variables <code class="text-info">$colors</code> are available.</p>
		<p>Each utility is customizable through two main variables:</p>
		<ul>
			<li>The classes data variable matching whatever color name set in the variable<code class="text-info">$colors</code>.</li>
			<li>The custom data variable allowing to add specific names and colors for that particular utility only.</li>
		</ul>

		<pretty-code class="language-css" :code="html.global"></pretty-code>

		<h3 id="text"><a href="#text">#</a> Text</h3>
		<ul>
			<li><code class="text-info">$text-colors-classes</code> Classes data ( default matching <code class="text-info">$colors-classes</code> )</li>
			<li><code class="text-info">$text-colors</code> Custom data</li>
		</ul>
		<pretty-code class="language-css" :code="html.textVariables"></pretty-code>
		<p class="text-primary">Here is a short text-primary paragraph</p>
		<p class="text-success">Here is a short text-success paragraph</p>
		<p class="text-danger">Here is a shotrt text-danger paragraph</p>
		<a class="text-color" href="">Here is a text-color link allowing me to overwrite the default color of the link</a>

		<pretty-code :code="html.text"></pretty-code>

		<h3 id="background"><a href="#background">#</a> Background</h3>
		<ul>
			<li><code class="text-info">$bg-colors-classes</code> Classes data ( default matching <code class="text-info">$colors-classes</code> )</li>
			<li><code class="text-info">$bg-colors</code> Custom data</li>
		</ul>
		<pretty-code class="language-css" :code="html.backgroundVariables"></pretty-code>
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
			<li><code class="text-info">$border-colors-classes</code> Classes data ( default matching <code class="text-info">$colors-classes</code> )</li>
			<li><code class="text-info">$border-colors</code> Custom data</li>
		</ul>

		<div class="border border-primary wrapper -small">
			<div class="border border-secondary wrapper -small">
				<div class="border border-success wrapper -small">
					<div class="border border-warning wrapper -small">
						<div class="border border-danger wrapper -small">
							<div class="border border-color text-small text-center">
								Border colors
							</div>
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
			global: require('./code/global.html'),
			text: require('./code/text.html'),
			textVariables: require('./code/text-variables.html'),
			background: require('./code/background.html'),
			backgroundVariables: require('./code/background-variables.html'),
			border: require('./code/border.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
</style>
