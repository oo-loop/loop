<template>
	<div>
		<h1 class="title">Grid Layout<span class="text-small color-primary">oo</span> <small class="text-small color-danger">wip</small></h1>
		<p class="text-large">Component based on CSS grid layout, using the 12 grid system (columns and rows).<br><code class="color-secondary font-bold">oo-grid</code></p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive Columns and Rows</h3>
		<div oo-grid="layout">
			<div class="cell bg-primary" oo-grid="col-6 row-3 col-4@sm">1</div>
			<div class="cell bg-primary" oo-grid="col-6 col-8@sm">2</div>
			<div class="cell bg-primary" oo-grid="col-6 col-4@sm">3</div>
			<div class="cell bg-primary" oo-grid="col-6 col-4@sm row-2@sm row-3@md row-4@lg">4</div>
			<div class="cell bg-primary" oo-grid="col-4">5</div>
			<div class="cell bg-primary" oo-grid="col-4 col-2@lg">6</div>
			<div class="cell bg-primary" oo-grid="col-4 row-2@md row-1@lg">7</div>
			<div class="cell bg-primary" oo-grid="col-12 col-4@sm col-2@lg">8</div>
			<div class="cell bg-primary" oo-grid="col-12 col-4@md col-8@lg">9</div>
		</div>

		<pretty-code :code="html.responsive" />

		<h3 id="gaps"><a href="#gaps">#</a> Gaps</h3>
		<p>
			Change the gap between the spans by adding one of the properties <code class="color-secondary">gap-less</code> <code class="color-secondary">gap-tiny</code> <code class="color-secondary">gap-small</code> <code class="color-secondary">gap-large</code> to <code class="color-secondary">grid</code>
			<br>The same option are available targetting vertical gaps only<code class="color-secondary">v-gap-{$name}</code>.
		</p>
		<div oo-column="row gutter-tiny">
			<div oo-column="col self-adjust">
				<button oo-button="secondary" class="text-tiny" @click="gap = ''">Reset gap</button>
			</div>
			<div oo-column="col self-adjust" v-for="n in gaps">
				<button oo-button class="text-tiny" @click="gap = n">gap-{{n}}</button>
			</div>
		</div>
		<div class="mb-20" oo-column="row gutter-tiny">
			<div oo-column="col self-adjust">
				<button oo-button="secondary" class="text-tiny" @click="vGap = ''">Reset v-gap</button>
			</div>
			<div oo-column="col self-adjust" v-for="n in gaps">
				<button oo-button class="text-tiny" @click="vGap = n">v-gap-{{n}}</button>
			</div>
		</div>

		<div :oo-grid="gridProperty">
			<div class="cell bordered border-primary" oo-grid="col-4"></div>
			<div class="cell bordered border-primary" oo-grid="col-4"></div>
			<div class="cell bordered border-primary" oo-grid="col-4"></div>
			<div class="cell bordered border-primary" oo-grid="col-4"></div>
			<div class="cell bordered border-primary" oo-grid="col-4"></div>
			<div class="cell bordered border-primary" oo-grid="col-4"></div>
		</div>

	</div>
</template>

<script>
import '@/directives/index'
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
		gapProperty () {
			return this.gap.length > 0 ? `gap-${this.gap}` : ''
		},
		vGapProperty () {
			return this.vGap.length > 0 ? `v-gap-${this.vGap}` : ''
		},
		gridProperty() {
			return `layout ${this.gapProperty} ${this.vGapProperty}`
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
