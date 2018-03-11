<template>
	<div>
		<h1 class="title">Spacing</h1>
		<p class="text-large">Utilities to space out elements from each others.</p>

		<h3 id="vertical"><a href="#vertical">#</a> Vertical</h3>
		<p>Two types of classes are available, <code>.mt-*</code> (margin-top) and <code>.mb-*</code> (margin-bottom).<br>
		The numbers are based on pixels to give a better understanding of the space representation.<br>The generated values are on the contrary rem units. 11 values are available through 0 to 50 for both top and bottom.</p>
		<div oo-column="row">
			<div oo-column="col-12 self-adjust@sm">
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-0</code></div>
					<div oo-column="col">margin-top: 0;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-5</code></div>
					<div oo-column="col">margin-top: .5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-10</code></div>
					<div oo-column="col">margin-top: 1rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-15</code></div>
					<div oo-column="col">margin-top: 1.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-20</code></div>
					<div oo-column="col">margin-top: 2rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-25</code></div>
					<div oo-column="col">margin-top: 2.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-30</code></div>
					<div oo-column="col">margin-top: 3rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-35</code></div>
					<div oo-column="col">margin-top: 3.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-40</code></div>
					<div oo-column="col">margin-top: 4rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-45</code></div>
					<div oo-column="col">margin-top: 4.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mt-50</code></div>
					<div oo-column="col">margin-top: 5rem;</div>
				</div>
			</div>
			<div oo-column="col">
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-0</code></div>
					<div oo-column="col">margin-bottom: 0;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-5</code></div>
					<div oo-column="col">margin-bottom: .5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-10</code></div>
					<div oo-column="col">margin-bottom: 1rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-15</code></div>
					<div oo-column="col">margin-bottom: 1.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-20</code></div>
					<div oo-column="col">margin-bottom: 2rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-25</code></div>
					<div oo-column="col">margin-bottom: 2.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-30</code></div>
					<div oo-column="col">margin-bottom: 3rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-35</code></div>
					<div oo-column="col">margin-bottom: 3.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-40</code></div>
					<div oo-column="col">margin-bottom: 4rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-45</code></div>
					<div oo-column="col">margin-bottom: 4.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mb-50</code></div>
					<div oo-column="col">margin-bottom: 5rem;</div>
				</div>
			</div>
		</div>

		<p>This list is generated via tree variables <code class="color-info">$v-spacing-step</code>, <code class="color-info">$v-spacing-from</code> and <code class="color-info">$v-spacing-to</code> which you can modify to match your needs.</p>
		<pretty-code class="language-css" :code="html.varVspacing"></pretty-code>

		<h3 id="horizontal"><a href="#horizontal">#</a> Horizontal</h3>
		<p>Two types of classes are available, <code>.ml-*</code> (margin-left) and <code>.mr-*</code> (margin-right).<br>
		It is based on pixels to give a better understanding of the space representation. 6 values are available through 0 to 25 for both left and right.</p>

		<div oo-column="row">
			<div oo-column="col-12 self-adjust@sm">
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.ml-0</code></div>
					<div oo-column="col">margin-left: 0;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.ml-5</code></div>
					<div oo-column="col">margin-left: .5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.ml-10</code></div>
					<div oo-column="col">margin-left: 1rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.ml-15</code></div>
					<div oo-column="col">margin-left: 1.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.ml-20</code></div>
					<div oo-column="col">margin-left: 2rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.ml-25</code></div>
					<div oo-column="col">margin-left: 2.5rem;</div>
				</div>
			</div>
			<div oo-column="col">
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mr-0</code></div>
					<div oo-column="col">margin-right: 0;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mr-5</code></div>
					<div oo-column="col">margin-right: .5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mr-10</code></div>
					<div oo-column="col">margin-right: 1rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mr-15</code></div>
					<div oo-column="col">margin-right: 1.5rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mr-20</code></div>
					<div oo-column="col">margin-right: 2rem;</div>
				</div>
				<div oo-column="row gutter-tiny">
					<div oo-column="col self-adjust"><code>.mr-25</code></div>
					<div oo-column="col">margin-right: 2.5rem;</div>
				</div>
			</div>
		</div>
		<p>This list is generated via tree variables <code class="color-info">$h-spacing-step</code>, <code class="color-info">$h-spacing-from</code> and <code class="color-info">$h-spacing-to</code> which you can modify to match your needs.</p>
		<pretty-code class="language-css" :code="html.varHspacing"></pretty-code>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Need to have different spacing for responsive purpose?<br>Add the necessary breakpoints to the list <code class="color-info">$v-spacing-breakpoints-classes</code> and <code class="color-info">$h-spacing-breakpoints-classes</code><br>and use classes such as <code>.mt-5@sm</code> <code>.mb-10@md</code> <code>.ml-15@lg</code> <code>.mr-15@lg</code></p>
		<pretty-code class="language-css" :code="html.varBreakpoint"></pretty-code>

		<h3 id="custom"><a href="#custom">#</a> Custom</h3>
		<p>Add your own spacing through the variables <code class="color-info">$v-spacing-addon</code> <code class="color-info">$h-spacing-addon</code></p>
		<pretty-code class="language-css" :code="html.varCustom"></pretty-code>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'

export default {
	name: 'Type',
	components: {
		prettyCode
	},
	data: () => ({
		html: {
			varBreakpoint: require('./code/var-breakpoint.html'),
			varCustom: require('./code/var-custom.html'),
			varHspacing: require('./code/var-hspacing.html'),
			varVspacing: require('./code/var-vspacing.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import "~loop/variables";
</style>
