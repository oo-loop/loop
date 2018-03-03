<template>
	<div>
		<h1 class="title">Create Your Own</h1>
		<p class="text-large">Use the loop mixins to create your own set of utilities</p>
		<p>Loop is only covering general purposes to avoid overloading the developer with superfluous or too specific utilities. However, the loop mixins are at disposal to create your own set to match your needs.</p>

		<h3 id="loop-mixin"><a href="#loop-mixin">#</a> The loop mixin</h3>
		<prettyCode class="language-scss" :code="html.loopMixin" />
		<ul>
			<li><code class="color-info">$data</code>Css values</li>
			<li><code class="color-info">$properties</code>Css properties</li>
			<li><code class="color-info">$prefix</code>Css selector to start with</li>
			<li><code class="color-info">$isImportant</code>Css <strong class="color-danger">!important</strong> rule to add to your values. <em>(Optional)</em></li>
			<li><code class="color-info">$suffix</code>Css selector to finish with. <em>(Optional)</em></li>
		</ul>

		<h4>Border radius sample</h4>
		<p>Let's say your project contains various types of border-radius and you decide to make a set of utilities to simplify its use. Let's use the loop mixin to facilate its creation and expansion.</p>

		<prettyCode class="language-css mb-0" :code="html.borderRadiusStep1" />
		<prettyCode class="language-scss mt-0" :code="html.borderRadiusStep2" />
		<p>This will generate</p>
		<prettyCode class="language-css language-scss" :code="html.borderRadiusStep3" />
		<p>Let's set important flag to true to be able to overwrite anything.</p>
		<prettyCode class="language-scss" :code="html.borderRadiusStep4" />
		<prettyCode class="language-css language-scss" :code="html.borderRadiusStep5" />
		<p>Let's apply it to our buttons</p>

		<button oo-button class="radius-small">Small Radius</button>
		<button oo-button class="radius-large">Large Radius</button>
		<prettyCode :code="html.borderRadiusStep6" />

		<p>Now we realize that we also need to apply those radius utilities to top and bottom only.</p> 

		<prettyCode class="language-scss" :code="html.borderRadiusStep7" />
		<prettyCode class="language-css language-scss" :code="html.borderRadiusStep8" />
		
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'CreateYourOwn',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {
			loopMixin: require('./code/loop-mixin.html'),
			borderRadiusStep1: require('./code/border-radius-step1.html'),
			borderRadiusStep2: require('./code/border-radius-step2.html'),
			borderRadiusStep3: require('./code/border-radius-step3.html'),
			borderRadiusStep4: require('./code/border-radius-step4.html'),
			borderRadiusStep5: require('./code/border-radius-step5.html'),
			borderRadiusStep6: require('./code/border-radius-step6.html'),
			borderRadiusStep7: require('./code/border-radius-step7.html'),
			borderRadiusStep8: require('./code/border-radius-step8.html'),
		}
	}),
	methods: {}
}
</script>

<style lang="scss" scoped>
	
	@import '~loop/mixins/loop';

	$border-radius: (
	  'small':  .5rem,
	  'medium': 1rem,
	  'large':  1.5rem,
	);
	@include loop($border-radius, 'border-radius', '.radius', true);
	@include loop(
		$border-radius,
		('border-top-right-radius', 'border-top-left-radius'),
		'.radius-top',
		true
	);
</style>
