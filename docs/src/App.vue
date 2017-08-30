<template>
	<div class="grid-layout">
		<div class="sidebar">
			<transition name="fade">
				<logo height="100" v-show="view !== 0" />
			</transition>
			<h2 class="h4">Loop</h2>
			<ul>
				<li v-for="(item, index) in listing"><router-link :to="`${item}`" @click.prevent="view = index">{{item}}</router-link></li>
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
			'introduction',
			'type',
			'grid'
		],
		view: 0,
	}),
}
</script>
<style lang="scss">
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
			ul {
				margin-left: -40px;
				list-style: none;
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
</style>
