<template>
	<div>
		<h1 class="title">Container</h1>
		<p class="text-large">Set the main container of the page</p>
		<p>Use the class <code>.container</code> for a breakdown by steps or <code>.container-fluid</code> for your content to fill the entire screen.</p>
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
		html: {}
	}),
	methods: {
	}
}
</script>
