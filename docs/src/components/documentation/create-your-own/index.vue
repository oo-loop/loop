<template>
	<div>
		<h1 class="title">Create Your Own</h1>
		<p class="text-large">Use the loop mixins to create your own set of utilities</p>
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
		html: {}
	}),
	methods: {}
}
</script>

<style lang="scss" scoped>
	
</style>
