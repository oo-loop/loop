<template>
	<div>
		<h1 class="title">Grid Layout <small class="text-small text-danger">alpha</small></h1>
		<p class="text-large">Based on CSS grid, using the 12 grid system (columns and rows).</p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive Columns and Rows</h3>
		<div class="grid">
			<div class="cell -col-6 -row-3 -col-4@sm">1</div>
			<div class="cell -col-6 -col-8@sm">2</div>
			<div class="cell -col-6 -col-4@sm">3</div>
			<div class="cell -col-6 -col-4@sm -row-2@sm -row-3@md -row-4@lg">4</div>
			<div class="cell -col-4">5</div>
			<div class="cell -col-4 -col-2@lg">6</div>
			<div class="cell -col-4 -row-2@md -row-1@lg">7</div>
			<div class="cell -col-12 -col-4@sm -col-2@lg">8</div>
			<div class="cell -col-12 -col-4@md -col-8@lg">9</div>
		</div>

		<pretty-code :code="html.responsive" />

		<h3 id="gaps"><a href="#gaps">#</a> Grip Gaps</h3>
		<div>
			<button v-for="n in 15" @click="gap = n"> gap size {{n}}</button>
		</div>
		<div class="grid" :class="[gapClass]">
			<div class="cell -col-3"></div>
			<div class="cell -col-9"></div>
			<div class="cell -col-4"></div>
			<div class="cell -col-4"></div>
			<div class="cell -col-4"></div>
			<div class="cell -col-2"></div>
			<div class="cell -col-5"></div>
			<div class="cell -col-3"></div>
			<div class="cell -col-2"></div>
		</div>

	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'

export default {
	name: 'Grid',
	components: {
		prettyCode
	},
	props: {
	},
	data: () => ({
		gap: 10,
		html: {
			regular: require('./code/regular-grid.html'),
			responsive: require('./code/responsive.html'),
			gaps: '',
		}
	}),
	computed: {
		gapClass () {
			return `gap-${this.gap}`
		}
	},
	methods: {
	},
}
</script>
<style lang="scss" scoped>
	@import "~loop/variables";

	.cell {
		padding: 1rem;
		background-color: $color-primary;
	}

	button {
	  display: inline-block;
	  -webkit-appearance: none;
	  -moz-appearance: none;
	  appearance: none;
	  margin: 5px 5px;
	  padding: 5px 5px;
	  height: 30px;
	  border-width: 0;
	  color: White;
	  font-family: sans-serif;
	  font-weight: normal;
	  font-size: inherit;
	  text-decoration: none;
	  line-height: 1;
	  cursor: pointer;
	  font-size: 100%;
	}
	button {
	  overflow: visible;
	}
	button::-moz-focus-inner {
	  border: 0;
	  padding: 0;
	}
</style>
