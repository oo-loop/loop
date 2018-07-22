<template>
	<div>
		<h1 class="title">Template Areas<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">
			Component based on CSS Grid Template Area.<br>
			<code class="color-secondary font-bold">oo-template</code>
			<code class="color-secondary font-bold">oo-area</code>
		</p>

		<h3 class="mt-40" id="template"><router-link to="#template">#</router-link> Template</h3>
		<p
			>Layout your page by creating your own template through <code class="color-info">$template-areas</code>.<br>
			Use area names of the template as property via <code class="color-secondary font-bold">oo-area</code>
		</p>
		<pretty-code class="language-css" :code="html.varAreas" />
		<pretty-code :code="html.areas" />
		<section oo-template="sample" class="mb-40">
			<header oo-area="header" class="wrapper-small bg-primary">Header</header>
			<main oo-area="main" class="wrapper-small bg-secondary color-white main">Main</main>
			<nav oo-area="sidebar" class="wrapper-small bg-warning">Sidebar</nav>
			<footer oo-area="footer" class="wrapper-small bg-success">Footer</footer>
		</section>

		<h3 id="responsive"><router-link to="#responsive">#</router-link> Responsive Template</h3>
		<p>Pass a map of breakpoints with their respective template</p>
		<pretty-code class="language-css" :code="html.varAreasResponsive" />

		<section oo-template="sample-responsive" class="mb-40">
			<header oo-area="header" class="wrapper-small bg-primary">Header</header>
			<main oo-area="main" class="wrapper-small bg-secondary color-white main">Main</main>
			<nav oo-area="sidebar" class="wrapper-small bg-warning">Sidebar</nav>
			<footer oo-area="footer" class="wrapper-small bg-success">Footer</footer>
		</section>

		<h3 id="multiple"><router-link to="#multiple">#</router-link> Multiple Templates</h3>
		<p>
			Create a map of templates and pass the name of each map as property <code class="color-info">oo-template="{$name}"</code>.<br>
			Using the multiple syntax from start allow you to easily expand your project in the future.
		</p>

		<pretty-code class="language-css" :code="html.varAreasMultiple" />
		<pretty-code :code="html.abc" />

		<section oo-template="sample-abc">
			<div oo-area="a" class="wrapper-small bg-primary" style="height:250px">A</div>
			<div oo-area="b" class="wrapper-small bg-secondary color-white">B</div>
			<div oo-area="c" class="wrapper-small bg-warning">C</div>
		</section>

		<h3 id="gap" class="mt-40"><router-link to="#gap">#</router-link> Gap</h3>
		<p>
			Set a gap between areas with the properties <code class="color-secondary">gap-{$name}</code> <code class="color-secondary">vgap-{$name}</code>
			matching the names in the variables <code class="color-info">$template-areas-gap-sizes</code> and <code class="color-info">$template-areas-vgap-sizes</code>.
		</p>

		<pretty-code class="language-css" :code="html.varGap" />
		<pretty-code :code="html.gap" />

		<div oo-row="gutter-tiny">
			<div oo-col="fit" v-for="n in gaps" :key="`gap${n}`">
				<button
					:oo-button="gap == n ? 'secondary' : ''"
					class="text-tiny"
					@click="gap = n"
				>gap-{{n}}</button>
			</div>
		</div>
		<div oo-row="gutter-tiny" class="mb-20">
			<div oo-col="fit" v-for="n in gaps" :key="`vgap${n}`">
				<button
					:oo-button="vGap == n ? 'secondary' : ''"
					class="text-tiny"
					@click="vGap = n"
				>vgap-{{n}}</button>
			</div>
		</div>

		<div :oo-template="gridProperty">
			<div oo-area="a" class="wrapper-small bg-primary" style="height:250px">A</div>
			<div oo-area="b" class="wrapper-small bg-secondary color-white">B</div>
			<div oo-area="c" class="wrapper-small bg-warning">C</div>
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
		gap: 'small',
		vGap: 'less',
		gaps: [
			'less',
			'small',
		],
		html: {
			abc: require('./code/abc.html'),
			gap: require('./code/gap.html'),
			areas: require('./code/areas.html'),
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
			return this.vGap.length > 0 ? `vgap-${this.vGap}` : ''
		},
		gridProperty() {
			return `sample-abc ${this.gapProperty} ${this.vGapProperty}`
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
