<template>
	<div>
		<h1 class="title">Grid Layout <small class="text-small color-danger">wip</small></h1>
		<p class="text-large">Based on CSS grid layout, using the 12 grid system (columns and rows).</p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive Columns and Rows</h3>
		<div class="grid">
			<div class="cell col-6 row-3 -col-4@sm bg-primary">1</div>
			<div class="cell col-6 -col-8@sm bg-primary">2</div>
			<div class="cell col-6 -col-4@sm bg-primary">3</div>
			<div class="cell col-6 -col-4@sm -row-2@sm -row-3@md -row-4@lg bg-primary">4</div>
			<div class="cell col-4 bg-primary">5</div>
			<div class="cell col-4 -col-2@lg bg-primary">6</div>
			<div class="cell col-4 -row-2@md -row-1@lg bg-primary">7</div>
			<div class="cell col-12 -col-4@sm -col-2@lg bg-primary">8</div>
			<div class="cell col-12 -col-4@md -col-8@lg bg-primary">9</div>
		</div>

		<pretty-code :code="html.responsive" />

		<h3 id="gaps"><a href="#gaps">#</a> Gaps</h3>
		<p>
			Change the gap between the spans by adding one of the modifiers <code>-gap-less</code> <code>-gap-tiny</code> <code>-gap-small</code> <code>-gap-large</code> to <code>.grid</code>
			<br>The same option are available targetting vertical gaps only<code>-v-gap-{$name}</code>.
		</p>
		<div class="columns -gutter-tiny">
			<div class="column -self-adjust">
				<button class="button -secondary text-tiny" @click="gap = ''">Reset gap</button>
			</div>
			<div class="column -self-adjust" v-for="n in gaps">
				<button class="button text-tiny" @click="gap = n">-gap-{{n}}</button>
			</div>
		</div>
		<div class="columns -gutter-tiny mb-20">
			<div class="column -self-adjust">
				<button class="button -secondary text-tiny" @click="vGap = ''">Reset -v-gap</button>
			</div>
			<div class="column -self-adjust" v-for="n in gaps">
				<button class="button text-tiny" @click="vGap = n">-v-gap-{{n}}</button>
			</div>
		</div>
		<div class="grid" :class="[gapClass, vGapClass]">
			<div class="cell col-4 border-primary"></div>
			<div class="cell col-4 border-primary"></div>
			<div class="cell col-4 border-primary"></div>
			<div class="cell col-4 border-primary"></div>
			<div class="cell col-4 border-primary"></div>
			<div class="cell col-4 border-primary"></div>
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
		gap: '',
		vGap: '',
		gaps: [
			'less',
			'tiny',
			'small',
			'large'
		],
		html: {
			grid: require('./code/grid.html'),
			responsive: require('./code/responsive.html'),
			gaps: '',
		}
	}),
	computed: {
		gapClass () {
			return this.gap.length > 0 ? `-gap-${this.gap}` : ''
		},
		vGapClass () {
			return this.vGap.length > 0 ? `-v-gap-${this.vGap}` : ''
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
	}
</style>
