<template>
	<div>
		<h1 class="title">Template Areas<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">
			Component based on CSS Grid Template Area.<br>
			<code class="color-secondary font-bold">oo-template</code>
			<code class="color-secondary font-bold">oo-area</code>
		</p>

		<h3 class="mt-40" id="template"><a href="#template">#</a> Template</h3>
		<p
			>Layout your page by creating your own template through <code class="color-info">$template-areas</code>.<br>
			Use area names of the template as property via <code class="color-secondary font-bold">oo-area</code>
		</p>
		<pretty-code class="language-css" :code="html.varAreas" />
		<pretty-code :code="html.areas" />
		<section oo-template class="mb-40">
			<header oo-area="header" class="wrapper-small bg-primary">Header</header>
			<main oo-area="main" class="wrapper-small bg-secondary color-white main">Main</main>
			<nav oo-area="sidebar" class="wrapper-small bg-warning">Sidebar</nav>
			<footer oo-area="footer" class="wrapper-small bg-success">Footer</footer>
		</section>

		<h4>Responsive Areas</h4>
		<p>Pass a map of breakpoint</p>
		<pretty-code class="language-css" :code="html.varAreasResponsive" />

		<section oo-grid="areas sample-responsive gap-less" class="mb-40">
			<header oo-grid="header" class="wrapper-small bg-primary">Header</header>
			<main oo-grid="main" class="wrapper-small bg-secondary color-white main">Main</main>
			<nav oo-grid="sidebar" class="wrapper-small bg-warning">Sidebar</nav>
			<footer oo-grid="footer" class="wrapper-small bg-success">Footer</footer>
		</section>

		<h4>Multiple Template Areas</h4>
		<p>Pass a map of areas to <code class="color-info">$grid-template-areas</code> and use the name of each map as property <code class="color-info">oo-grid="areas {$name}"</code> to get the corresponding area.</p>

		<pretty-code class="language-css" :code="html.varAreasMultiple" />

		<section oo-grid="areas sample-abc">
			<div oo-grid="a" class="wrapper-small bg-primary">A</div>
			<div oo-grid="b" class="wrapper-small bg-secondary color-white">B</div>
			<div oo-grid="c" class="wrapper-small bg-warning">C</div>
		</section>

		<pretty-code :code="html.abc" />
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
			areas: require('./code/areas.html'),
			layout: require('./code/layout.html'),
			order: require('./code/order.html'),
			orderComplex: require('./code/order-complex.html'),
			varGap: require('./code/var-gap.html'),
			varAreas: require('./code/var-areas.html'),
			varAreasResponsive: require('./code/var-areas-responsive.html'),
			varAreasMultiple: require('./code/var-areas-multiple.html'),
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
