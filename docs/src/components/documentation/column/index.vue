<template>
	<div>
		<h1 class="title">Column<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Component based on Flexbox, using the 12 columns system.<br><code class="font-bold color-secondary">oo-column</code></p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Change the size of the column by using the property <code class="color-secondary">col-{$number}</code>, or let the columns being automatically calculated.<br>Change the size of the column according to the device being targeted through the properties <code class="color-secondary">col-{$number}@{$breakpoint}</code>.</p>

		<div oo-column="row">
			<div oo-column="col"><p class="cell">auto</p></div>
			<div oo-column="col"><p class="cell">auto</p></div>
		</div>
		<div oo-column="row">
		    <div oo-column="col-12 col-6@sm col-4@md col-3@lg"><p class="cell">size</p></div>
		    <div oo-column="col-12 col-6@sm col-8@md col-9@lg"><p class="cell">size</p></div>
		    <div oo-column="col-6 col-7@md col-8@lg"><p class="cell">size</p></div>
		    <div oo-column="col"><p class="cell cell-3">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.column"></pretty-code>

		<h4 class="h5">Self Adjust Column</h4>
		<p>Let the column adjusts itself to the size of the content by adding the property <code class="color-secondary">self-adjust</code> to <code class="color-secondary">col</code>.<br>
		This property will give you a <em>media component</em> look.</p>
		<div oo-column="row">
		    <div oo-column="col self-adjust"><p class="cell">adjust</p></div>
		    <div oo-column="col"><p class="cell">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.selfAdjust"></pretty-code>

		<p>Enable responsive properties<code class="color-secondary">self-adjust@{breakpoint}</code> by setting <code class="color-info">$use-columns-self-adjustment-breakpoints</code> to <code>true</code>.</p>
		<div oo-column="row">
		    <div oo-column="col self-adjust@sm"><p class="cell">adjust@sm</p></div>
		    <div oo-column="col "><p class="cell">auto</p></div>
		    <div oo-column="col-12 col-6@sm self-adjust@md"><p class="cell">adjust@md</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.selfAdjustResponsive"></pretty-code>

		<h4 class="h5">Clear Column</h4>
		<p>Clear the columns and start a new row through the property<code class="color-secondary">clear</code></p>
		<div oo-column="row">
		    <div oo-column="col self-adjust"><p class="cell">adjust</p></div>
		    <div oo-column="col"><p class="cell">auto</p></div>
			<div oo-column="clear"></div>
		    <div oo-column="col"><p class="cell">auto</p></div>
		    <div oo-column="col"><p class="cell">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.clear"></pretty-code>

		<h4 class="h5">Match Children height</h4>
		<p>Force each children to have the same height through the property <code class="color-secondary">stretch</code></p>
		<div oo-column="row stretch">
		    <div oo-column="col-12 col-6@sm"><p class="bg-primary text-center mb-0">More content<br>in<br>that column</p></div>
		    <div oo-column="col-12 col-6@sm"><p class="bg-primary text-center mb-0">Few content</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.stretch"></pretty-code>

		<h3 id="gutter"><a href="#gutter">#</a> Gutter</h3>
		<p>Change the space between the columns by adding one of the properties <code class="color-secondary">gutter-less</code> <code class="color-secondary">gutter-tiny</code> <code class="color-secondary">gutter-small</code> <code class="color-secondary">gutter-large</code>.<br>The modifier <code class="color-secondary">v-gutter-less</code> will remove the vertical gutter.</p>

		<div oo-column="row gutter-large v-gutter-less">
		    <div oo-column="col"><p class="cell">large</p></div>
		    <div oo-column="col"><p class="cell">large</p></div>
		    <div oo-column="col"><p class="cell">large</p></div>
		</div>
		<div oo-column="row gutter-small v-gutter-less">
		    <div oo-column="col"><p class="cell">small</p></div>
		    <div oo-column="col"><p class="cell">small</p></div>
		    <div oo-column="col"><p class="cell">small</p></div>
		</div>
		<div oo-column="row gutter-tiny v-gutter-less">
		    <div oo-column="col"><p class="cell">tiny</p></div>
		    <div oo-column="col"><p class="cell">tiny</p></div>
		    <div oo-column="col"><p class="cell">tiny</p></div>
		</div>
		<div oo-column="row gutter-less v-gutter-less">
		    <div oo-column="col"><p class="cell">none</p></div>
		    <div oo-column="col"><p class="cell">none</p></div>
		    <div oo-column="col"><p class="cell">none</p></div>
		</div>
		<pretty-code :code="html.gutter"></pretty-code>

		<p>Need more or less gutters? Change the array <code class="color-info">$columns-gutter-sizes</code> at your convenience to only match your needs.</p>
		<pretty-code class="language-css" :code="html.gutterVariables"></pretty-code>

		<h3 id="order"><a href="#order">#</a> Order</h3>
		<p>Rearrange the order the columns through the properties <code class="color-secondary">order-0@{$breakpoint}</code> to <code class="color-secondary">order-12@{$breakpoint}</code> according to the size of the screen.</p>
		<div oo-column="row">
		  <div oo-column="col-6 col-3@sm order-2@lg"><p class="cell">one</p></div>
		  <div oo-column="col-6 col-3@sm"><p class="cell">two</p></div>
		  <div oo-column="col-6 col-3@sm order-4@sm"><p class="cell">three</p></div>
		  <div oo-column="col-6 col-3@sm order-0@md"><p class="cell">four</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.order"></pretty-code>
		<p>Disable properties <code class="color-secondary">order-*</code> if not needed by setting <code class="color-info">$use-columns-order</code> to <code>false</code>.</p>

		<h3 id="alignment"><a href="#alignment">#</a> Alignment</h3>
		<h4 class="h5">Vertical alignment</h4>
		<p>Vertically align a group of columns attaching the properties <code class="color-secondary">align-top</code> <code class="color-secondary">align-middle</code> <code class="color-secondary">align-bottom</code> to <code class="color-secondary">row</code>.<br>Responsive properties are also available <code class="color-secondary">{$alignment}@{$breakpoint}</code></p>
		<div class="bg-secondary">
		    <div oo-column="row align-bottom@sm align-middle@md align-top@lg v-gutter-less">
		        <div oo-column="col-6 col-4@sm"><p class="cell cell--large"></p></div>
		        <div oo-column="col-6 col-4@sm"><p class="cell cell--medium"></p></div>
		        <div oo-column="col-6 col-4@sm"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.vAlignment"></pretty-code>
		<h4 class="h5">Vertical self alignment</h4>
		<p>Self alignment is also possible by attaching the same mofifiers <code class="color-secondary">self-{$alignment}</code> <code class="color-secondary">self-{$alignment}@{$breakpoint}</code> to <code class="color-secondary">col</code>.
		<div class="bg-secondary">
		    <div oo-column="row v-gutter-less">
		        <div oo-column="col-6 col-4@sm"><p class="cell cell--large"></p></div>
		        <div oo-column="col-6 col-4@sm self-align-middle self-align-top@sm self-align-middle@lg"><p class="cell cell--medium"></p></div>
		        <div oo-column="col-6 col-4@sm self-align-bottom"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.vAlignmentSelf"></pretty-code>

		<h4 class="h5">Horizontal alignment</h4>
		<p>Horizontally align a group of columns attaching the properties <code class="color-secondary">align-left</code> <code class="color-secondary">align-center</code> <code class="color-secondary">align-right</code> <code class="color-secondary">align-between</code> <code class="color-secondary">align-evenly</code> to <code class="color-secondary">row</code>.<br>Responsive properties are also available <code class="color-secondary">{$alignment}@{$breakpoint}</code></p>
		<div class="bg-secondary">
		    <div oo-column="row align-center@md align-right@lg v-gutter-less">
		        <div oo-column="col-3 col-4@sm"><p class="cell cell--medium"></p></div>
		        <div oo-column="col-3 col-4@sm"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.hAlignment"></pretty-code>

		<div class="bg-secondary">
		    <div oo-column="row align-between align-evenly@md">
		        <div oo-column="col-3 col-4@sm"><p class="cell cell--medium"></p></div>
		        <div oo-column="col-3 col-4@sm"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.hAlignment2"></pretty-code>

		<h4 class="h5">Horizontal self alignment</h4>
		<p>Self alignment is also possible by attaching the mofifiers <code class="color-secondary">self-align-left</code> <code class="color-secondary">self-align-center</code> <code class="color-secondary">self-align-right</code> <code class="color-secondary">self-{$alignment}@{$breakpoint}</code> to <code class="color-secondary">col</code>.
		<div class="bg-secondary">
		    <div oo-column="row v-gutter-less">
		        <div oo-column="col-3 self-align-right self-align-left@md mb-20"><p class="cell cell--medium"></p></div>
		        <div oo-column="col-3 self-align-right@md"><p class="cell"></p></div>
		        <div oo-column="col-9 self-align-right@md align-center@lg"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.hAlignmentSelf"></pretty-code>

		<p>If you're not using any of the alignment properties at all or only few of them, avoid importing the whole thing by setting the alignment variables of non used properties to <code>false</code></p>

		<ul>
			<li>
				<code class="color-info">$use-columns-self-alignment-breakpoints</code>
				<i>(responsive self alignments)</i>
			</li>
			<li>
				<code class="color-info">$use-columns-self-alignment</code>
				<i>(self alignments)</i>
			</li>
			<li>
				<code class="color-info">$use-columns-alignment-breakpoints</code>
				<i>(responsive alignments)</i>
			</li>
			<li>
				<code class="color-info">$use-columns-alignment</code>
				<i>(the complete alignment properties)</i>
			</li>
		</ul>

		<h4 class="h5">Child alignment</h4>
		<p>Align a child of a column <code class="color-secondary">col</code> through the properties <code class="color-secondary">child-{alignment}</code>.</p>
		<div oo-column="row stretch">
		    <div oo-column="col-12 col-6@sm"><p class="bg-primary text-center mb-0">More content<br>in<br>that column</p></div>
		    <div oo-column="col-12 col-6@sm child-align-middle child-align-right"><p class="bg-primary text-center mb-0">Centered verticaly, Right horizontally</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.childAlignment"></pretty-code>
		<p>If you're not using child alignment properties, disable the option by setting <code class="color-info">$use-columns-child-alignment</code> to <code>false</code>.</p>

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
			selfAdjustResponsive: require('./code/self-adjust-responsive.html'),
			clear: require('./code/clear.html'),
			stretch: require('./code/stretch.html'),
			order: require('./code/order.html'),
			hAlignment: require('./code/h-alignment.html'),
			hAlignment2: require('./code/h-alignment-2.html'),
			hAlignmentSelf: require('./code/h-alignment-self.html'),
			vAlignment: require('./code/v-alignment.html'),
			vAlignmentSelf: require('./code/v-alignment-self.html'),
			childAlignment: require('./code/child-alignment.html'),
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
