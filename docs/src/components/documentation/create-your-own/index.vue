<template>
	<div>
		<h1 class="title">Create Your Own</h1>
		<p class="text-large">Use the loop mixins to create your own set of utilities</p>
		<p>Loop is only covering general purposes to avoid overloading the developer with unnecessary utilities.<br>
		However, the loop mixins are at disposal to give the possibility to create your own set.</p>

		<h3 id="loop-mixin"><router-link to="#loop-mixin">#</router-link> The loop mixin</h3>
		<ul>
			<li><code class="color-info">$data</code>Css values</li>
			<li><code class="color-info">$properties</code>Css properties</li>
			<li><code class="color-info">$prefix</code>Css selector to start with (will be prepended to the data name by <code>-</code>)</li>
			<li><code class="color-info">$is-important</code>Css <strong class="color-danger">!important</strong> rule to add to your values. <em>(Optional)</em></li>
			<li><code class="color-info">$suffix</code>Css selector to finish with. <em>(Optional)</em></li>
		</ul>
		<prettyCode class="language-scss" :code="html.loopMixin" />

		<h4>Sample of use</h4>
		<p>Let's say our project contains various types of border-radius and we want to make a set of utilities to simplify its use. The loop mixin will facilate its creation and expansion.</p>

		<prettyCode class="language-css mb-0" :code="html.borderRadiusStep1" />
		<prettyCode class="language-scss mt-0" :code="html.borderRadiusStep2" />
		<prettyCode class="language-css language-scss" :code="html.borderRadiusStep3" />
		<p>Let's set the important flag to true to be able to overwrite default rules.</p>
		<prettyCode class="language-scss" :code="html.borderRadiusStep4" />
		<prettyCode class="language-css language-scss" :code="html.borderRadiusStep5" />
		<p>Let's apply them to our buttons</p>

		<button oo-button class="radius-small">Small Radius</button>
		<button oo-button class="radius-large">Large Radius</button>
		<prettyCode :code="html.borderRadiusStep6" />
		
		<h5>Pass a list of properties</h5>
		<p>Radius utilities for top and bottom only.</p> 

		<prettyCode class="language-scss" :code="html.borderRadiusStep7" />
		<prettyCode class="language-css language-scss" :code="html.borderRadiusStep8" />
		<p>Let's apply them to our buttons again</p>
		
		<p class="mb-30">
			<button oo-button class="radius-top-small">Small Radius Top</button>
			<button oo-button class="radius-top-large">Large Radius Top</button>
			<button oo-button="primary" class="radius-bottom-small">Small Radius Bottom</button>
			<button oo-button="primary" class="radius-bottom-large">Large Radius Bottom</button>
		</p>

		<h3 id="loop-breakpoints-mixin"><router-link to="#loop-breakpoints-mixin">#</router-link> The loopBreakpoints mixin</h3>
		<p>Except the first parameter, the <code>loopBreakpoints()</code> mixin is identical to the <code>loop()</code> mixin.<br>
		Pass the breakpoints you wish to interact with and follow the same principles of <code>loop()</code>.</p>
		<ul>
			<li><code class="color-info">$breakpoints</code>Breakpoint names (available in your project)</li>
			<li><code class="color-info">$data</code>Css values</li>
			<li><code class="color-info">$properties</code>Css properties</li>
			<li><code class="color-info">$prefix</code>Css selector to start with (will be prepended to the data name by <code>-</code>)</li>
			<li><code class="color-info">$is-important</code>Css <strong class="color-danger">!important</strong> rule to add to your values. <em>(Optional)</em></li>
			<li><code class="color-info">$suffix</code>Css selector to finish with. <em>(Optional)</em></li>
		</ul>
		<prettyCode class="language-scss" :code="html.loopBreakpointsMixin" />

		<h4>Sample of use</h4>
		<p>Let's make our border-radius responsive.</p>
		<prettyCode class="language-css mb-0" :code="html.borderRadiusStep9" />
		<prettyCode class="language-scss mt-0" :code="html.borderRadiusStep10" />

		<p>This will generate classes such as</p>
		<ul>
			<li><code>.radius-less@sm</code> <code>.radius-less@md</code> <code>.radius-less@lg</code></li>
			<li><code>.radius-small@sm</code> <code>.radius-small@md</code> <code>.radius-small@lg</code></li>
			<li><code>.radius-large@sm</code> <code>.radius-large@md</code> <code>.radius-large@lg</code></li>
		</ul>

		<div oo-row>
			<div oo-col>
				<div class="wrapper-medium bg-primary radius-small@sm radius-large@lg">
					Responsive radius
				</div>
			</div>
			<div oo-col>
				<div class="wrapper-medium bg-warning radius-small radius-large@sm radius-less@md radius-small@lg">
					Responsive radius
				</div>
			</div>
		</div>
		<prettyCode class="mt-0" :code="html.borderRadiusStep11" />

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
			borderRadiusStep1: require('./code/border-radius-step1.html'),
			borderRadiusStep2: require('./code/border-radius-step2.html'),
			borderRadiusStep3: require('./code/border-radius-step3.html'),
			borderRadiusStep4: require('./code/border-radius-step4.html'),
			borderRadiusStep5: require('./code/border-radius-step5.html'),
			borderRadiusStep6: require('./code/border-radius-step6.html'),
			borderRadiusStep7: require('./code/border-radius-step7.html'),
			borderRadiusStep8: require('./code/border-radius-step8.html'),
			borderRadiusStep9: require('./code/border-radius-step9.html'),
			borderRadiusStep10: require('./code/border-radius-step10.html'),
			borderRadiusStep11: require('./code/border-radius-step11.html'),
			loopMixin: require('./code/loop-mixin.html'),
			loopBreakpointsMixin: require('./code/loop-breakpoints-mixin.html'),
		}
	}),
	methods: {}
}
</script>

<style lang="scss" scoped>
	
	@import '~loop/mixins/loop';

	$border-radius: (
	  'less':   0,	
	  'small':  .8rem,
	  'large':  1.5rem,
	);
	@include loop($border-radius, 'border-radius', '.radius', true);
	@include loop(
		$border-radius,
		('border-top-right-radius', 'border-top-left-radius'),
		'.radius-top',
		true
	);
	@include loop(
		$border-radius,
		('border-bottom-right-radius', 'border-bottom-left-radius'),
		'.radius-bottom',
		true
	);
	@include loopBreakpoints((sm, md, lg), $border-radius, 'border-radius', '.radius', true);
</style>
