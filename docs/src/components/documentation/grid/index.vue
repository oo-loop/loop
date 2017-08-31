<template>
	<div>
		<h1 class="title">Grid Layout</h1>
			<p>Regular grid</p>
			<template v-for="n in 12" >
				<div class="grid">
					<div :class="`grid-item -col-${n}`">
						<p class="cell">.-col-{{n}}</p>
					</div>				
				</div>
			</template>

			<pretty-code :code="html.regular" />	

			<p>Sample Grids</p>
			<div class="grid">
				<div class="grid-item -col-3"><p class="cell">.-col-3</p></div>
				<div class="grid-item -col-9"><p class="cell">.-col-9</p></div>
				<div class="grid-item -col-4 -col-xs-12"><p class="cell">.-col-4.-col-xs-12</p></div>
				<div class="grid-item -col-4"><p class="cell">.-col-4</p></div>
				<div class="grid-item -col-4"><p class="cell">.-col-4</p></div>
				<div class="grid-item -col-2"><p class="cell">.-col-2</p></div>
				<div class="grid-item -col-5"><p class="cell">.-col-5</p></div>
				<div class="grid-item -col-3"><p class="cell">.-col-3</p></div>
				<div class="grid-item -col-2"><p class="cell">.-col-2</p></div>
			</div>

			<pretty-code :code="html.sample" />
			
			<p>Grip Gaps</p>
			<div>
				<button v-for="n in 15" @click="gap = n"> gap size {{n}}</button>
			</div>
			<div class="grid" :class="[gapClass]">
				<div class="grid-item -col-3"><p class="cell">.-col-3</p></div>
				<div class="grid-item -col-9"><p class="cell">.-col-9</p></div>
				<div class="grid-item -col-4 -col-xs-12"><p class="cell">.-col-4.-col-xs-12</p></div>
				<div class="grid-item -col-4"><p class="cell">.-col-4</p></div>
				<div class="grid-item -col-4"><p class="cell">.-col-4</p></div>
				<div class="grid-item -col-2"><p class="cell">.-col-2</p></div>
				<div class="grid-item -col-5"><p class="cell">.-col-5</p></div>
				<div class="grid-item -col-3"><p class="cell">.-col-3</p></div>
				<div class="grid-item -col-2"><p class="cell">.-col-2</p></div>
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
			sample: require('./code/sample.html'),
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
	@import "~loop/base/variables";
	.cell {
		margin-bottom: 10px;
		text-align: center;
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
