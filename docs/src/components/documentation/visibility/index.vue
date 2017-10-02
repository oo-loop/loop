<template>
	<div>
		<h1 class="title">Visibility</h1>
		<p class="text-large">Hide elements from the available breakpoints</p>
		<p>Use the classes <code>.hidden</code> <code>.hidden@sm</code> <code>.hidden@md</code> <code>.hidden@lg</code></p>
		<div class="bg-secondary wrapper-tiny text-center">
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="text-primary border-primary">.hidden</div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden</div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden</div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden</div>
				</div>
			</div>
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="bg-primary border-primary"><br></div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden@sm</div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden@sm</div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden@sm</div>
				</div>
			</div>
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="bg-primary border-primary"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border-primary"><br></div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden@md</div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden@md</div>
				</div>
			</div>
			<div class="columns -gutter-tiny -v-gutter-less">
				<div class="column">
					<div class="bg-primary border-primary"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border-primary"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary -primary"><br></div>
				</div>
				<div class="column">
					<div class="text-primary border-primary">.hidden@lg</div>
				</div>
			</div>
		</div>
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
			float: require('./code/float.html'),
			variable: require('./code/variable.html'),
			clearfix: require('./code/clearfix.html'),
			clear: require('./code/clear.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
</style>
