<template>
	<div>
		<span class="hamburger" @click="toggleMenu()"></span>
		<div oo-row :class="{ slide: isMenuOpen }">
			<aside oo-col class="sidebar">
				<div class="sidebar-wrapper">
					<div class="sidebar-content text-small">
						<ul class="list-unstyle font-bold">
							<li class="mb-10" v-for="(item, index) in listing" :key="`list-${index}`">
								<router-link :to="`${item.route}`">{{item.name}}</router-link>
								<span
									v-if="item.label"
									class="text-tiny"
									:class="item.labelClass ? item.labelClass : ''"
								>{{item.label}}</span>
								<ul class="list-unstyle" v-if="item.subMenu.length > 0 && $route.name === item.route">
									<li v-for="(subItem, index) in item.subMenu" :key="`sublist-${index}`">
										<template v-if="subItem.route.indexOf('#') > -1">
											<router-link :to="subItem.route">{{subItem.name}}</router-link>
										</template>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</aside>
			<div oo-col>
				<div class="content">
					<transition name="fade" mode="out-in">
						<router-view :key="$route.path"></router-view>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import logo from 'docs/logo'

export default {
	name: 'Loop',
	components: {
		logo,
	},
	data: () => ({
		listing: [
			{
				name: 'Introduction',
				route: 'introduction',
				subMenu: []
			},
			{
				name: 'Column',
				route: 'column',
				label: 'oo',
				labelClass: 'color-secondary',
				subMenu: [
					{
						name: 'Responsive',
						route: '#responsive'
					},
					{
						name: 'Gutter',
						route: '#gutter'
					},
					{
						name: 'Order',
						route: '#order'
					},
					{
						name: 'Alignment',
						route: '#alignment'
					},
				]
			},
			{
				name: 'Template Areas',
				route: 'template-areas',
				label: 'oo',
				labelClass: 'color-secondary',
				subMenu: [
					{
						name: 'Template',
						route: '#template'
					},
					{
						name: 'Responsive',
						route: '#responsive'
					},
					{
						name: 'Multiple',
						route: '#multiple'
					},
					{
						name: 'Gap',
						route: '#gap'
					},
				]
			},
			{
				name: 'Grid',
				route: 'grid',
				label: 'oo',
				labelClass: 'color-secondary',
				subMenu: [
					{
						name: 'Layout',
						route: '#layout'
					},
					{
						name: 'Gap',
						route: '#gap'
					},
					{
						name: 'Order',
						route: '#order'
					},
				]
			},
			{
				name: 'Button',
				route: 'button',
				label: 'oo',
				labelClass: 'color-secondary',
				subMenu: [
					{
						name: 'Sizes',
						route: '#sizes'
					},
					{
						name: 'Colors',
						route: '#colors'
					},
					{
						name: 'Outline',
						route: '#outline'
					},
				]
			},
			{
				name: 'Form',
				route: 'form',
				label: 'oo',
				labelClass: 'color-secondary',
				subMenu: [
					{
						name: 'Input',
						route: '#input'
					},
					{
						name: 'Select',
						route: '#select'
					},
					{
						name: 'Checkbox',
						route: '#checkbox'
					},
					{
						name: 'Radio',
						route: '#radio'
					},
					{
						name: 'Toggle',
						route: '#toggle'
					},
				]
			},
			{
				name: 'Type',
				route: 'type',
				subMenu: [
					{
						name: 'Headings',
						route: '#headings'
					},
					{
						name: 'Text Elements',
						route: '#text-elements'
					},
					{
						name: 'List',
						route: '#lists'
					},
				]
			},
			{
				name: 'Container',
				route: 'container',
				subMenu: []
			},
			{
				name: 'Text Utilities',
				route: 'text-utilities',
				subMenu: [
					{
						name: 'Sizes',
						route: '#sizes'
					},
					{
						name: 'Alignments',
						route: '#alignments'
					},
					{
						name: 'Transforms',
						route: '#transforms'
					},
					{
						name: 'Decorations',
						route: '#decorations'
					},
					{
						name: 'Letter Spacings',
						route: '#letter-spacings'
					},
					{
						name: 'Styles',
						route: '#styles'
					},
					{
						name: 'Weights',
						route: '#weights'
					},
					{
						name: 'Families',
						route: '#families'
					}
				]
			},
			{
				name: 'Color Utilities',
				route: 'color-utilities',
				subMenu: [
					{
						name: 'Text',
						route: '#text'
					},
					{
						name: 'Background',
						route: '#background'
					},
					{
						name: 'Border',
						route: '#border'
					}
				]
			},
			{
				name: 'Spacing',
				route: 'spacing',
				subMenu: [
					{
						name: 'Vertical',
						route: '#vertical'
					},
					{
						name: 'Horizontal',
						route: '#horizontal'
					},
					{
						name: 'Responsive',
						route: '#responsive'
					},
					{
						name: 'Custom',
						route: '#custom'
					},
				]
			},
			{
				name: 'Float',
				route: 'float',
				subMenu: [
					{
						name: 'Clearfix',
						route: '#clearfix'
					},
					{
						name: 'Clear',
						route: '#clear'
					},
				]
			},
			{
				name: 'Visibility',
				route: 'visibility',
				subMenu: []
			},
			{
				name: 'Wrapper',
				route: 'wrapper',
				subMenu: []
			},
			{
				name: 'Miscellaneous',
				route: 'miscellaneous',
				subMenu: []
			},
			{
				name: 'Create Your Own',
				route: 'create-your-own',
				label: '@',
				labelClass: 'color-danger',
				subMenu: [
					{
						name: 'loop()',
						route: '#loop-mixin'
					},
					{
						name: 'loopBreakpoints()',
						route: '#loop-breakpoints-mixin'
					},
				]
			}
		],
		isMenuOpen: false,
	}),
	computed: {
		isFront () {
			return ['/','/introduction'].indexOf(this.$route.path) > -1
				? true
				: false
		}
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen
		}
	}
}
</script>
<style lang="scss">
	$color-primary:   #6cd7f7;
	$color-secondary: #254F67;

	@import '~loop/loop';

	$toggle-sizes:(
	  	'large': 4rem,
	);
	$btn-padding-sizes: (
	    'baggy': 1.2em 2em,
		'tight': .05em .1em,
	);
	$input-padding-sizes: (
		'large': 2rem,
	);

	$use-grid-order: true;

	$template-areas: (
		'sample': (
			"header header header header"
			"main main main sidebar"
			"footer footer footer footer"
		),
		'sample-responsive': (
			(): (
				"header"
				"sidebar"
				"main"
		 		"footer"
			),
			sm: (
				"header header header header"
				"main main main sidebar"
		 		"footer footer footer footer"
			),
		),
		'sample-abc': (
			(): (
				"a"
				"b"
				"c"
			),
			sm: (
				"a a a"
				"b c c"
				"b c c"
			),
			md: (
				"a a b"
				"c c c"
			),
			lg: (
				"a a a b b"
				"a a a c c"
				"a a a . ."
			),
		),
	);

	$ooLoop: ooSet('checkbox.sizes.variants', (
		'small': 1.6rem,
		'large': 3rem,
	));
	$ooLoop: ooSet('radio.sizes.variants', (
		'medium': 2.4rem,
	  'large': 3.2rem,
	));
	
	$ooLoop: ooSet('template.areas', $template-areas);
	$ooLoop: ooSet('template.gap.sizes', (
		'less' : 0,
		'small': 1.6rem,
	));
	$ooLoop: ooSet('column.use.order', true);
	$ooLoop: ooSet('column.use.childAlignment', true);

	$ooLoop: ooSet('html5', false);
	$ooLoop: ooSet('colors.main', (
		'primary': $color-primary,
		'secondary': $color-secondary,
		'success': #8cc63f,
		'warning': #fbb03b,
		'danger': #f72828,
	));
	$ooLoop: ooAdd('colors.backgrounds', (
		'body': oo('base.bgcolor'),
	));
	$ooLoop: ooAdd('colors.fonts', (
	  'info': #2689ef,
	  'gray': #999,
	  'success': #3fc65c,
		'white': #fff,
	));

	$ooLoop: ooAdd('utilities.fontWeight.values', (
		'thin': 100,
	));
	$ooLoop: ooSet('utilities.textAlign.screens', (sm, lg));
	$ooLoop: ooSet('utilities.textDecoration.values', (
		'line-through',
		'underline',
	));

	$ooLoop: ooAdd('wrapper.sizes', (
		'default': .8rem 1.6rem,
		'large': 3.2rem,
		'wide': (
			rt: 2rem,
			sm: 3.2rem,
			md: 4.6rem,
			lg: 6rem,
		)
	));
	$ooLoop: ooSet('wrapper.screens', (sm, md, lg));
	$ooLoop: ooAdd('button.paints', (
	  'nectarine':  #ffbe76,
	  'yellow':     #fffa65,
	  'salmon':     #ffb8b8,
	  'purple':     #8e44ad,
	  'green-sea':  #16a085,
	));

	$ooLoop: ooAdd('float.values', 'none');

	@include ooInit();

	$layout-padding: 1.5rem;
	$sidebar-size: 220px;

	body { overflow-x: hidden; }

	.sidebar {
		margin-left: -#{$sidebar-size};
		flex-basis: $sidebar-size;
		max-width: 	$sidebar-size;
		transition: margin 300ms ease-in-out;
		
		.slide & { margin-left: 0; }

		@include breakpoint(sm) {
			margin-left: 0;
			.slide & { margin-left: calc(-#{$sidebar-size} + #{$layout-padding}); }
		}
	}

	.sidebar-wrapper {
		top: 0;
		left: -#{$sidebar-size};
		position: fixed;
		overflow: auto;
		width: calc(#{$sidebar-size} - #{$layout-padding});
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		height: 100vh;

		background-color: #fff;
		box-shadow: -16px 0 0 16px $bgcolor-base, 1px 0 16px 0 #cdcdcd;

		transition: left 300ms ease-in-out;

		.slide & { left: 0; }

		@include breakpoint(sm) {
			left: 0;
			.slide & { left: calc(-#{$sidebar-size} + #{$layout-padding}); }
		}
	}
	.sidebar-content {
		padding: ($layout-padding * 2) $layout-padding $layout-padding;
	}

	.content {
		padding-right: $layout-padding;
		padding-left: $layout-padding;

		.slide & {
			white-space: nowrap;
			overflow: hidden;
			@include breakpoint(sm) {
				white-space: normal;
				overflow: auto;
			}
		}
	}

  .fade-enter-active,
	.fade-leave-active {
		transition: opacity 300ms cubic-bezier(0.85, 1, 0.16, 0.6);
  }
  .fade-enter,
	.fade-leave-to{
    opacity: 0;
  }

	.title {
		font-size: 3.2rem;
		font-weight: 700;
		text-align: center;
		@include breakpoint(sm) {
			font-size: 5rem;
			text-align: left;
		}
	}

	.hamburger {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 5;
		display: block;
		width: 20px;
		height: 12px;

		border-top: 3px solid $color-base;
		border-bottom: 3px solid $color-base;
		background-color: $color-primary;
		outline: solid 3px $color-primary;

		cursor: pointer;

		&:before {
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;

			display: block;
			content: '';
			border-top: 3px solid $color-base;
			transform: translateY(-50%);
		}
	}
</style>
