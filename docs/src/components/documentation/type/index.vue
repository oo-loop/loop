<template>
	<div>
		<h1 class="title">Typography</h1>
		<p>Modifies the base font size by rem.</p>
		
		<h1>Heading</h1>
		<h2>Heading</h2>
		<h3>Heading</h3>
		<h4>Heading</h4>
		<h5>Heading</h5>
		<h6>Heading</h6>

		<pre class="prettyprint" v-for="item in html">{{ item }}</pre>
	</div>
</template>

<script>
import 'code-prettify'

export default {
	name: 'Type',
	props: {
	},
	mounted() {
		PR.prettyPrint()
	},
	data: () => ({
		listing: [
			{
				name: 'is-italic',
				description: 'Italic text',
			},
			{
				name: 'is-strong',
				description: 'strong text',
			},
		],
		html: {
			heading: require('./heading.html'),
			paragraph: require('./paragraph.html'),
		}
	}),
	methods: {
	},
}
</script>
<style lang="scss">
</style>
