<template>
	<div>
		<h1 class="title">Columns</h1>
		<p class="text-large">Based on Flexbox, using the 12 columns system.</p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Change the size of the column by using the classes <code>.column-{$number}</code>, or let the columns being automatically calculated.<br>Change the size of the column according to the device being targeted through the modifiers <code>-span-{$number}@{$breakpoint}</code>.</p>
		<div class="columns">
			<div class="column"><p class="cell">auto</p></div>
			<div class="column"><p class="cell">auto</p></div>
		</div>
		<div class="columns">
			<div class="column-12 -span-6@sm -span-4@md -span-3@lg"><p class="cell">size</p></div>
			<div class="column-12 -span-6@sm -span-8@md -span-9@lg"><p class="cell">size</p></div>
			<div class="column-6 -span-7@md -span-8@lg"><p class="cell">size</p></div>
			<div class="column"><p class="cell cell-3">auto</p></div>
		</div>

		<pretty-code class="mt-0" :code="html.column"></pretty-code>

		<h4 class="h5">Self Adjust Column</h4>
		<p>Let the column adjusts itself to the size of the content by adding the modifier <code>-self-adjust</code> to <code>.columns</code></p>
		<div class="columns">
			<div class="column -self-adjust"><p class="cell">adjust</p></div>
			<div class="column"><p class="cell">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.selfAdjust"></pretty-code>

		<h4 class="h5">Match Children height</h4>
		<p>Force each children to have the same height through the modifier <code>-stretch-childs</code></p>
		<div class="columns -stretch-childs">
			<div class="column-12 -span-6@sm"><p class="bg-primary text-center">More content<br>in<br>that column</p></div>
			<div class="column-12 -span-6@sm"><p class="bg-primary text-center">Few content</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.stretchChilds"></pretty-code>

		<h3 id="gutter"><a href="#gutter">#</a> Gutter</h3>
		<p>Change the space between the columns by adding one of the modifiers <code>-gutter-less</code> <code>-gutter-tiny</code> <code>-gutter-small</code> <code>-gutter-large</code>.<br>The modifier <code>-v-gutter-less</code> will remove the vertical gutter.</p>

		<div class="columns -gutter-large -v-gutter-less">
			<div class="column"><p class="cell">large</p></div>
			<div class="column"><p class="cell">large</p></div>
			<div class="column"><p class="cell">large</p></div>
		</div>
		<div class="columns -gutter-small -v-gutter-less">
			<div class="column"><p class="cell">small</p></div>
			<div class="column"><p class="cell">small</p></div>
			<div class="column"><p class="cell">small</p></div>
		</div>
		<div class="columns -gutter-tiny -v-gutter-less">
			<div class="column"><p class="cell">tiny</p></div>
			<div class="column"><p class="cell">tiny</p></div>
			<div class="column"><p class="cell">tiny</p></div>
		</div>
		<div class="columns -gutter-less -v-gutter-less">
			<div class="column"><p class="cell">none</p></div>
			<div class="column"><p class="cell">none</p></div>
			<div class="column"><p class="cell">none</p></div>
		</div>
		<pretty-code :code="html.gutter"></pretty-code>

		<p>Need more or less gutters? Change the array <code class="color-info">$columns-gutter-sizes</code> at your convenience to only match your needs.</p>
		<pretty-code class="language-css" :code="html.gutterVariables"></pretty-code>

		<h3 id="order"><a href="#order">#</a> Order</h3>
		<p>Rearrange the order the columns through the modifiers <code>-order-0@{$breakpoint}</code> to <code>-order-12@{$breakpoint}</code> according to the size of the screen.</p>
		<div class="columns">
		  <div class="column-6 -span-3@sm -order-2@lg"><p class="cell">one</p></div>
		  <div class="column-6 -span-3@sm"><p class="cell">two</p></div>
		  <div class="column-6 -span-3@sm -order-4@sm"><p class="cell">three</p></div>
		  <div class="column-6 -span-3@sm -order-0@md"><p class="cell">four</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.order"></pretty-code>

		<h3 id="alignment"><a href="#alignment">#</a> Alignment</h3>
		<h4 class="h5">Vertical alignment</h4>
		<p>Vertically align a group of columns attaching the modifiers <code>align-top</code> <code>align-middle</code> <code>align-bottom</code> to the class <code>.columns</code>.<br>Responsive modifiers are also available <code>-{$alignment}@{$breakpoint}</code></p>
		<div class="bg-secondary">
			<div class="columns -align-bottom@sm -align-middle@md -align-top@lg -v-gutter-less">
				<div class="column-6 -span-4@sm"><p class="cell cell--large"></p></div>
				<div class="column-6 -span-4@sm"><p class="cell cell--medium"></p></div>
				<div class="column-6 -span-4@sm"><p class="cell"></p></div>
			</div>
		</div>
		<pretty-code :code="html.vAlignment"></pretty-code>
		<h4 class="h5">Vertical self alignment</h4>
		<p>Self alignment is also possible by attaching the same mofifiers <code>-{$alignment}</code> <code>-{$alignment}@{$breakpoint}</code> to a column.
		<div class="bg-secondary">
			<div class="columns -v-gutter-less">
				<div class="column-6 -span-4@sm"><p class="cell cell--large"></p></div>
				<div class="column-6 -span-4@sm -align-middle -align-top@sm -align-middle@lg"><p class="cell cell--medium"></p></div>
				<div class="column-6 -span-4@sm -align-bottom"><p class="cell"></p></div>
			</div>
		</div>
		<pretty-code :code="html.vAlignmentSelf"></pretty-code>

		<h4 class="h5">Horizontal alignment</h4>
		<p>Horizontally align a group of columns attaching the modifiers <code>align-left</code> <code>align-center</code> <code>align-right</code> <code>align-between</code> <code>align-evenly</code> to the class <code>.columns</code>.<br>Responsive modifiers are also available <code>-{$alignment}@{$breakpoint}</code></p>
		<div class="bg-secondary">
			<div class="columns -align-center@md -align-right@lg -v-gutter-less">
				<div class="column-3 -span-4@sm"><p class="cell cell--medium"></p></div>
				<div class="column-3 -span-4@sm"><p class="cell"></p></div>
			</div>
		</div>
		<pretty-code :code="html.hAlignment"></pretty-code>

		<div class="bg-secondary">
			<div class="columns -align-between -align-evenly@md">
				<div class="column-3 -span-4@sm"><p class="cell cell--medium"></p></div>
				<div class="column-3 -span-4@sm"><p class="cell"></p></div>
			</div>
		</div>
		<pretty-code :code="html.hAlignment2"></pretty-code>

		<h4 class="h5">Horizontal self alignment</h4>
		<p>Self alignment is also possible by attaching the mofifiers <code>-align-left</code> <code>-align-center</code> <code>-align-right</code> <code>-{$alignment}@{$breakpoint}</code> to a column.
		<div class="bg-secondary">
			<div class="columns -v-gutter-less">
				<div class="column-3 -align-right -align-left@md mb-20"><p class="cell cell--medium"></p></div>
				<div class="column-3 -align-right@md"><p class="cell"></p></div>
				<div class="column-9 -align-right@md -align-center@lg"><p class="cell"></p></div>
			</div>
		</div>
		<pretty-code :code="html.hAlignmentSelf"></pretty-code>

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
			column: require('./code/column.html'),
			gutter: require('./code/gutter.html'),
			gutterVariables: require('./code/gutter-variables.html'),
			selfAdjust: require('./code/self-adjust.html'),
			stretchChilds: require('./code/stretch-childs.html'),
			order: require('./code/order.html'),
			hAlignment: require('./code/h-alignment.html'),
			hAlignment2: require('./code/h-alignment-2.html'),
			hAlignmentSelf: require('./code/h-alignment-self.html'),
			vAlignment: require('./code/v-alignment.html'),
			vAlignmentSelf: require('./code/v-alignment-self.html'),
		}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import "~loop/variables";
	.cell {
		margin-bottom: 0;
		text-align: center;
		min-height: 2.4rem;
		background-color: $color-primary;

		&--medium {
			min-height: 4.8rem;
		}
		&--large {
			min-height: 7.2rem;
		}
	}
</style>
