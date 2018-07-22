<template>
	<div>
		<h1 class="title">Column<span class="text-small color-primary">oo</span></h1>
		<p class="text-large">Component based on Flexbox, using the 12 columns system.<br><code class="font-bold color-secondary">oo-column</code></p>

		<h3 id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Change the size of the column by using the property <code class="color-secondary">s{$number}</code>, or let the columns being automatically calculated.<br>Change the size of the column according to the device being targeted through the properties <code class="color-secondary">s{$number}@{$breakpoint}</code>.</p>

		<div oo-row>
			<div oo-col><p class="cell">auto</p></div>
			<div oo-col><p class="cell">auto</p></div>
		</div>
		<div oo-row>
		    <div oo-col="s12 s6@sm s4@md s3@lg"><p class="cell">size</p></div>
		    <div oo-col="s12 s6@sm s8@md s9@lg"><p class="cell">size</p></div>
		    <div oo-col="s6 s7@md s8@lg"><p class="cell">size</p></div>
		    <div oo-col><p class="cell cell-3">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.column"></pretty-code>

		<h4 class="h5">Self Adjust Column</h4>
		<p>Let the column adjusts itself to the size of the content by adding the property <code class="color-secondary">self-adjust</code> to <code class="color-secondary">col</code>.<br>
		This property will give you a <em>media component</em> look.</p>
		<div oo-row>
		    <div oo-col="fit"><p class="cell">adjust</p></div>
		    <div oo-col><p class="cell">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.selfAdjust"></pretty-code>

		<p>Enable responsive properties<code class="color-secondary">fit@{breakpoint}</code> by setting <code class="color-info">$use-columns-self-adjustment-breakpoints</code> to <code>true</code>.</p>
		<div oo-row>
		    <div oo-col="fit@sm"><p class="cell">fit@sm</p></div>
		    <div oo-col><p class="cell">auto</p></div>
		    <div oo-col="s12 s6@sm fit@md"><p class="cell">fit@md</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.selfAdjustResponsive"></pretty-code>

		<h4 class="h5">Clear Column</h4>
		<p>Clear the columns and start a new row through the property<code class="color-secondary">clear</code></p>
		<div oo-row>
		    <div oo-col="fit"><p class="cell">fit</p></div>
		    <div oo-col><p class="cell">auto</p></div>
			<div oo-col="clear"></div>
		    <div oo-col><p class="cell">auto</p></div>
		    <div oo-col><p class="cell">auto</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.clear"></pretty-code>

		<h4 class="h5">Match Children height</h4>
		<p>Force each children to have the same height through the property <code class="color-secondary">stretch</code></p>
		<div oo-row="stretch">
		    <div oo-col="s12 s6@sm"><p class="bg-primary text-center mb-0">More content<br>in<br>that column</p></div>
		    <div oo-col="s12 s6@sm"><p class="bg-primary text-center mb-0">Few content</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.stretch"></pretty-code>

		<h3 id="gutter"><a href="#gutter">#</a> Gutter</h3>
		<p>Change the space between the columns by adding one of the gutter properties present in the variable <code class="color-info">$columns-gutter-sizes</code> (default including <code class="color-secondary">gutter-less</code> <code class="color-secondary">gutter-small</code>).<br>
		Target vertical spacings only by using the properties present in the variable <code class="color-info">$columns-v-gutter-sizes</code> (default maching the sizes in <code class="color-info">$columns-gutter-sizes</code>).<br>
		Change the values at your convenience to only match your needs.</p>

		<pretty-code class="language-css" :code="html.varGutter"></pretty-code>

		<div oo-row="gutter-large vgutter-less">
		    <div oo-col><p class="cell">large</p></div>
		    <div oo-col><p class="cell">large</p></div>
		    <div oo-col><p class="cell">large</p></div>
		</div>
		<div oo-row="gutter-small vgutter-less">
		    <div oo-col><p class="cell">small</p></div>
		    <div oo-col><p class="cell">small</p></div>
		    <div oo-col><p class="cell">small</p></div>
		</div>
		<div oo-row="gutter-tiny vgutter-less">
		    <div oo-col><p class="cell">tiny</p></div>
		    <div oo-col><p class="cell">tiny</p></div>
		    <div oo-col><p class="cell">tiny</p></div>
		</div>
		<div oo-row="gutter-less vgutter-less">
		    <div oo-col><p class="cell">less</p></div>
		    <div oo-col><p class="cell">less</p></div>
		    <div oo-col><p class="cell">less</p></div>
		</div>
		<pretty-code :code="html.gutter"></pretty-code>

		<h4 class="h5">Responsive gutters</h4>
		<p>Assign a list of needed breakpoints to <code class="color-info">$columns-gutter-sizes-breakpoints-classes</code> and generate modifiers such as <code class="color-secondary">gutter-{$gutterName}@{$breakpoint}</code>.<br>
    Target vertical spacings only via <code class="color-info">$columns-v-gutter-sizes-breakpoints-classes</code> and generate modifiers such as <code class="color-secondary">v-gutter-{$gutterName}@{$breakpoint}</code>.</p>
		<pretty-code class="language-css" :code="html.varGutterResponsive"></pretty-code>

		<div oo-row="gutter-less gutter-tiny@sm gutter-small@md gutter-large@lg vgutter-less">
		    <div oo-col><p class="cell">Responsive gutter</p></div>
		    <div oo-col><p class="cell">Responsive gutter</p></div>
		    <div oo-col><p class="cell">Responsive gutter</p></div>
		</div>
		<pretty-code :code="html.gutterResponsive"></pretty-code>

		<div oo-row="vgutter-large vgutter-small@sm vgutter-tiny@md vgutter-less@lg">
			<div oo-col="s12"><p class="cell">Responsive vgutter</p></div>
			<div oo-col="s6"><p class="cell">Responsive vgutter</p></div>
			<div oo-col="s6"><p class="cell">Responsive vgutter</p></div>
		</div>
    <pretty-code :code="html.vGutterResponsive"></pretty-code>

		<h3 id="order"><a href="#order">#</a> Order</h3>
		<p>Rearrange the order the columns through the properties <code class="color-secondary">order-0@{$breakpoint}</code> to <code class="color-secondary">order-12@{$breakpoint}</code> according to the size of the screen.</p>
		<div oo-row>
		  <div oo-col="s6 s3@sm order-2@lg"><p class="cell">one</p></div>
		  <div oo-col="s6 s3@sm"><p class="cell">two</p></div>
		  <div oo-col="s6 s3@sm order-4@sm"><p class="cell">three</p></div>
		  <div oo-col="s6 s3@sm order-0@md"><p class="cell">four</p></div>
		</div>
		<pretty-code class="mt-0" :code="html.order"></pretty-code>
		<p>Disable properties <code class="color-secondary">order-*</code> if not needed by setting <code class="color-info">$use-columns-order</code> to <code>false</code>.</p>

		<h3 id="alignment"><a href="#alignment">#</a> Alignment</h3>
		<h4 class="h5">Vertical alignment</h4>
		<p>Vertically align a group of columns attaching the properties <code class="color-secondary">valign-top</code> <code class="color-secondary">valign-middle</code> <code class="color-secondary">valign-bottom</code> to <code class="color-secondary">row</code>.<br>Responsive properties are also available <code class="color-secondary">{$valignment}@{$breakpoint}</code></p>
		<div class="bg-secondary">
		    <div oo-row="valign-bottom@sm valign-middle@md valign-top@lg vgutter-less">
		        <div oo-col="s6 auto@sm"><p class="cell cell--large"></p></div>
		        <div oo-col="s6 auto@sm"><p class="cell cell--medium"></p></div>
		        <div oo-col><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.vAlignment"></pretty-code>
		<h4 class="h5">Vertical self alignment</h4>
		<p>Self alignment is also possible by attaching the same mofifiers <code class="color-secondary">self-{$alignment}</code> <code class="color-secondary">self-{$alignment}@{$breakpoint}</code> to <code class="color-secondary">col</code>.
		<div class="bg-secondary">
		    <div oo-row="vgutter-less">
		        <div oo-col><p class="cell cell--large"></p></div>
		        <div oo-col="s6 s4@sm self-align-middle self-align-top@sm self-align-middle@lg"><p class="cell cell--medium"></p></div>
		        <div oo-col="s6 s4@sm self-align-bottom"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.vAlignmentSelf"></pretty-code>

		<h4 class="h5">Horizontal alignment</h4>
		<p>Horizontally align a group of columns attaching the properties <code class="color-secondary">align-left</code> <code class="color-secondary">align-center</code> <code class="color-secondary">align-right</code> <code class="color-secondary">align-between</code> <code class="color-secondary">align-evenly</code> to <code class="color-secondary">row</code>.<br>Responsive properties are also available <code class="color-secondary">{$alignment}@{$breakpoint}</code></p>
		<div class="bg-secondary">
		    <div oo-row="align-center@md align-right@lg vgutter-less">
		        <div oo-col="s3 s4@sm"><p class="cell cell--medium"></p></div>
		        <div oo-col="s3 s4@sm"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.hAlignment"></pretty-code>

		<div class="bg-secondary">
		    <div oo-row="align-between align-evenly@md">
		        <div oo-col="s3 s4@sm"><p class="cell cell--medium"></p></div>
		        <div oo-col="s3 s4@sm"><p class="cell"></p></div>
		    </div>
		</div>
		<pretty-code :code="html.hAlignment2"></pretty-code>

		<h4 class="h5">Horizontal self alignment</h4>
		<p>Self alignment is also possible by attaching the mofifiers <code class="color-secondary">self-align-left</code> <code class="color-secondary">self-align-center</code> <code class="color-secondary">self-align-right</code> <code class="color-secondary">self-{$alignment}@{$breakpoint}</code> to <code class="color-secondary">col</code>.
		<div class="bg-secondary">
		    <div oo-row="vgutter-less">
		        <div oo-col="s3 self-align-right self-align-left@md mb-20"><p class="cell cell--medium"></p></div>
		        <div oo-col="s3 self-align-right@md"><p class="cell"></p></div>
		        <div oo-col="s9 self-align-right@md align-center@lg"><p class="cell"></p></div>
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
		<div oo-row="stretch">
		    <div oo-col="s12 s6@sm"><p class="bg-primary text-center mb-0">More content<br>in<br>that column</p></div>
		    <div oo-col="s12 s6@sm child-align-middle child-align-right"><p class="bg-primary text-center mb-0">Centered verticaly, Right horizontally</p></div>
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
			gutterResponsive: require('./code/gutter-responsive.html'),
      vGutterResponsive: require('./code/v-gutter-responsive.html'),
			varGutter: require('./code/var-gutter.html'),
			varGutterResponsive: require('./code/var-gutter-responsive.html'),
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
