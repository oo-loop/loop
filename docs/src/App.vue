<template>
	<div>
		<span class="hamburger" @click="toggleMenu()"></span>
		<div class="columns" :class="{ slide: isMenuOpen }">
			<aside class="column sidebar">
				<div class="sidebar__content">
					<ul class="list-unstyle text-strong">
						<li class="mb-10" v-for="(item, index) in listing">
							<router-link :to="`${item.route}`">{{item.name}}</router-link>
							<span class="text-danger text-tiny"  v-if="item.label">{{item.label}}</span>
							<ul class="list-unstyle" v-if="item.subMenu.length > 0 && $route.name === item.route">
								<li v-for="subItem in item.subMenu">
									<template v-if="subItem.route.indexOf('#') > -1">
										<a :href="subItem.route">{{subItem.name}}</a>
									</template>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</aside>
			<div class="column">
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
				name: 'Column',
				route: 'column',
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
				name: 'Grid',
				route: 'grid',
				label: 'alpha',
				subMenu: [
					{
						name: 'Regular Grid',
						route: '#regular'
					},
					{
						name: 'Responsive',
						route: '#responsive'
					},
					{
						name: 'Gaps',
						route: '#gaps'
					},
				]
			},
			{
				name: 'Form',
				route: 'form',
				subMenu: [
					{
						name: 'Input',
						route: '#input'
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
					{
						name: 'Select',
						route: '#select'
					},
				]
			},
			{
				name: 'Button',
				route: 'button',
				subMenu: [
					{
						name: 'Sizes',
						route: '#sizes'
					},
					{
						name: 'Colors',
						route: '#colors'
					},
				]
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
						name: 'Weights',
						route: '#weights'
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
						name: 'Styles',
						route: '#styles'
					},
					{
						name: 'Families',
						route: '#families'
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
	// some variables
	$text-colors-addon: ('info': #2689ef);
	$text-alignments-breakpoints-classes: ('sm', 'lg');

	$checkbox-sizes:(
	    'small': 1.6rem,
	    'large': 2.4rem,
	);
	$radio-sizes:(
	    'medium': 2.4rem,
	    'large': 3.2rem,
	);
	$toggle-sizes:(
	  'large': 4rem,
	);

	@import '~loop/loop';

	$layout-padding: 2.4rem;
	$sidebar-size: 220px;

	.sidebar {
		top: 0;
		position: sticky;
		margin-left: calc(-#{$sidebar-size} + #{$layout-padding});
		flex-basis: $sidebar-size;
		max-width: 	$sidebar-size;
		height: 100vh;

		box-shadow: -16px 0 0 16px $bgcolor-base, 1px 0 16px 0 #cdcdcd;

		transition: margin 300ms ease-in-out;

		.slide & { margin-left: 0; }

		@include breakpoint(sm) {
			margin-left: 0;
			.slide & { margin-left: calc(-#{$sidebar-size} + #{$layout-padding}); }
		}

		&__content {
			padding: ($layout-padding * 2.5) $layout-padding $layout-padding;
		}

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
    	font-size: 4rem;
		font-weight: 700;
		text-align: center;

		@include breakpoint(sm) {
			font-size: 6rem;
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
