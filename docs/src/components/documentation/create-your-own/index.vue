<template>
	<div>
		<h1 class="title">Create Your Own</h1>
		<p class="text-large">Use the loop mixins to create your own set of utilities</p>
		<p>Loop is only covering general purposes to avoid overloading the developer with superfluous or too specific utilities. However, the loop mixins are at disposal to create your own set to match your needs.</p>

		<h3 id="@loop"><a href="#@loop">#</a> The @loop mixin</h3>
		<prettyCode class="language-scss" :code="html.loopMixin" />
		<ul>
			<li><code class="color-info">$data</code>Css values</li>
			<li><code class="color-info">$properties</code>Css properties</li>
			<li><code class="color-info">$prefix</code>Css selector to start with</li>
			<li><code class="color-info">$isImportant</code>Css <strong class="color-danger">!important</strong> rule to add to your values. <em>(Optional)</em></li>
			<li><code class="color-info">$suffix</code>Css selector to finish with. <em>(Optional)</em></li>
		</ul>
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
		}
	}),
	methods: {}
}
</script>

<style lang="scss" scoped>
	
</style>
