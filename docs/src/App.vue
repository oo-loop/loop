<template>
	<div class="grid-layout">
		<div class="sidebar">
				<div class="logo-holder">
					<transition name="fade">
						<logo height="100" v-show="!isFront"/>
					</transition>
				</div>
			<h2 class="h4">Loop</h2>
			<ul>
				<li v-for="(item, index) in listing">
					<router-link :to="`${item.route}`">{{item.name}}</router-link>
					<ul class="sub-menu" v-if="item.subMenu.length > 0 && $route.name === item.route">
						<li v-for="subItem in item.subMenu">
							<template v-if="subItem.route.indexOf('#') > -1">
								<a :href="subItem.route">{{subItem.name}}</a>
							</template>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="content">
			<transition name="fade" mode="out-in">
				<router-view :key="$route.path"></router-view>
			</transition>
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
				name: 'Itroduction',
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
						name: 'Sizes',
						route: '#sizes'		
					},
					{
						name: 'Weights',
						route: '#weights'		
					}
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
						name: 'Gap',
						route: '#gap'
					},
					{
						name: 'Offset',
						route: '#offset'
					},
				]
			},
			{
				name: 'Grid',
				route: 'grid',
				subMenu: []
			},
		],
	}),
	computed: {
		isFront () {
			return ['/','/introduction'].indexOf(this.$route.path) > -1
				? true
				: false
		}
	}
}
</script>
<style lang="scss">

	$text-colors-addon: ('info': #2689ef);

	@import '~loop/loop';
	.grid-layout {
		display: grid;
		grid-gap: 5px;
		grid-template-columns: 15% auto;
		grid-template-rows: 100%;
		height: 100vh;
	    grid-template-areas:
			"sidebar content";
		overflow: hidden;
		.sidebar {
			grid-area: sidebar;
			float: left;
			padding: 15px;
			overflow-y: hidden;
			text-align: center;
			box-shadow: 3px -1px 5px 3px #f7f7f7;
			.logo-holder {
				height: 100px;
			}
			ul {
				margin-left: -40px;
				list-style: none;
				text-align: left;

				&.sub-menu {
					margin-left: -20px;
					li {
						// text-align: left;			
					}
				}
			}
			a {
				text-decoration: none;
			}
		}
		.content {
			grid-area: content;
			float: right;
			padding: 15px;
			overflow-y: scroll;
		}
		.img-responsive {
			display: block;
			max-width: 100%;
			height: auto;
		}
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			overflow: visible;
			box-shadow: none;
		   	grid-template-areas:
			   	"sidebar"
			   	"content";
			.sidebar, .content {
				overflow-y: visible;
			}
		}
	}
    .fade-enter-active, .fade-leave-active {
        transition: opacity 300ms cubic-bezier(0.85, 1, 0.16, 0.6);
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

    .title {
        font-size: 7rem;
        font-weight: 100;
		letter-spacing: 0;
    }
</style>
