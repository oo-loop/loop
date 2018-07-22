<template>
	<div>
		<h1 class="title">Grid<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Component based on CSS Grid.<br>
		<code class="color-secondary font-bold">oo-grid</code></p>

		<p>The two approaches <strong>layout & areas</strong> might not be needed altogether in a project.<br>
		Turn on/off the options depending on your preferences.</p>
		
		<ul class="mb-30">
			<li><code class="color-info">$use-grid-layout</code></li>
			<li><code class="color-info">$use-grid-areas</code></li>
			<li><code class="color-info">$use-grid-order</code></li>
			<li><code class="color-info">$use-grid-gap</code></li>
			<li><code class="color-info">$use-v-grid-gap</code></li>
		</ul>

		<h3 id="layout"><router-link to="#layout">#</router-link> Layout <code class="text-small color-secondary">oo-grid="layout"</code></h3>
		<p>Use the 12 columns system for both rows and columns with property <code class="color-secondary">col-{$number}</code> <code class="color-secondary">row-{$number}</code> and <code class="color-secondary">col-{$number}@{$breakpoint}</code> <code class="color-secondary">row-{$number}@{$breakpoint}</code> for responsive purpose.</p>
		<div oo-grid="layout">
			<div class="wrapper-tiny bg-primary" oo-grid="col-6 row-3 col-4@sm">1</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-6 col-8@sm">2</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-6 col-4@sm">3</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-6 col-4@sm row-2@sm row-3@md row-4@lg">4</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-4">5</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-4 col-2@lg">6</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-4 row-2@md row-1@lg">7</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-12 col-4@sm col-2@lg">8</div>
			<div class="wrapper-tiny bg-primary" oo-grid="col-12 col-4@md col-8@lg">9</div>
		</div>

		<pretty-code :code="html.layout" />

		<h3 id="gaps"><router-link to="#gap">#</router-link> Gap</h3>
		<p>
			Change the gap between colums and rows with the properties <code class="color-secondary">gap-{$name}</code> <code class="color-secondary">v-gap-{$name}</code> matching the names in the variables <code class="color-info">$grid-gap-sizes</code> and <code class="color-info">$grid-v-gap-sizes</code>.
		</p>

		<pretty-code class="language-css" :code="html.varGap" />
		<pretty-code :code="html.gap" />

		<div oo-row="gutter-tiny">
			<div oo-col="fit">
				<button 
					:oo-button="gap == '' ? 'secondary' : ''"
					class="text-tiny"
					@click="gap = ''"
				>default gap</button>
			</div>
			<div oo-col="fit" v-for="n in gaps" :key="`gap${n}`">
				<button
					:oo-button="gap == n ? 'secondary' : ''"
					class="text-tiny"
					@click="gap = n"
				>gap-{{n}}</button>
			</div>
		</div>
		<div oo-row="gutter-tiny" class="mb-20">
			<div oo-col="fit">
				<button 
					:oo-button="vGap == '' ? 'secondary' : ''"
					class="text-tiny"
					@click="vGap = ''"
				>default v-gap</button>
			</div>
			<div oo-col="fit" v-for="n in gaps" :key="`vgap${n}`">
				<button
					:oo-button="vGap == n ? 'secondary' : ''"
					class="text-tiny"
					@click="vGap = n"
				>v-gap-{{n}}</button>
			</div>
		</div>

		<div :oo-grid="gridProperty">
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-6 row-3 col-4@sm">1</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-6 col-8@sm">2</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-6 col-4@sm">3</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-6 col-4@sm row-2@sm row-3@md row-4@lg">4</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-4">5</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-4 col-2@lg">6</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-4 row-2@md row-1@lg">7</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-12 col-4@sm col-2@lg">8</div>
			<div class="wrapper-tiny bordered border-primary" oo-grid="col-12 col-4@md col-8@lg">9</div>
		</div>

		<h3 class="mt-40" id="order"><router-link to="#order">#</router-link> Order</h3>
		<p>Layout your page by creating <strong>zones</strong> with <code class="color-secondary">col</code> and <code class="color-secondary">row</code>,<br>
		and use the properties <code class="color-secondary">order-{$number}@{$breakpoint}</code> to move them around between screen sizes.</p>

		<div oo-grid="layout gap-small" class="mb-30">
			<div oo-grid="col-12 order1@md" class="wrapper-small bg-primary">Header</div>
			<div oo-grid="col-12 col-4@md row-1@md order-3@md" class="wrapper-small bg-warning">Nav</div>
			<div oo-grid="col-12 col-8@sm row-11@md order-2@md" class="wrapper-small bg-secondary color-white">Main</div>
			<div oo-grid="col-12 col-4@sm row-10@md order-4@md" class="wrapper-small bg-success">Sidebar</div>
		</div>
		<pretty-code :code="html.order" />

		<p>A more complex version</p>
		<div oo-grid="layout gap-less">
			<div oo-grid="col-12 col-8@lg" class="wrapper-small bg-primary">Header</div>
			<div oo-grid="col-12 col-4@sm col-3@md col-4@lg order-2@sm order-1@md" class="wrapper-small bg-warning">Nav</div>
			<div oo-grid="col-12 col-8@sm col-6@md row-4@sm row-10@md order-1@sm order-2@md order-3@lg" class="wrapper-small bg-secondary color-white main">Main</div>
			<div oo-grid="col-12 col-4@sm col-3@md row-10@lg order-3@sm order-2@lg" class="wrapper-small bg-success">Widgets 1</div>
			<div oo-grid="col-12 col-4@sm col-3@md row-9@md row-1@lg order-4@sm" class="wrapper-small bg-warning">Nav 2</div>
			<div oo-grid="col-12 col-4@sm col-3@md order-5@sm" class="wrapper-small bg-success">Widgets 2</div>
		</div>
		<pretty-code :code="html.orderComplex" />
		
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
			'small',
		],
		html: {
			abc: require('./code/abc.html'),
			gap: require('./code/gap.html'),
			grid: require('./code/grid.html'),
			layout: require('./code/layout.html'),
			order: require('./code/order.html'),
			orderComplex: require('./code/order-complex.html'),
			varGap: require('./code/var-gap.html'),
			varGrid: require('./code/var-grid.html'),
			varGridResponsive: require('./code/var-grid-responsive.html'),
			varGridMultiple: require('./code/var-grid-multiple.html'),
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
	.main {
		min-height: 250px;
	}
</style>
