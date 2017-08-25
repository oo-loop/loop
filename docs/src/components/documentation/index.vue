<template>
	<div class="grid">
		<div class="sidebar">
			<ul>
				<li v-for="(item, index) in listing"><a :href="`#${item}`" @click.prevent="view = index">{{item}}</a></li>
			</ul>
		</div>
		<div class="content">
			<component :is="listing[view]" :key="view"></component>			
		</div>
	</div>
</template>

<script>
import type from './type'
import introduction from './introduction'

export default {
	name: 'Documentation',
	components: {
		introduction,
		type
	},
	props: {
	},
	data: () => ({
		listing: [
			'introduction',
			'type'
		],
		view: 0,
	}),
	methods: {
	},
}
</script>
<style lang="scss" scoped>
	.grid {
		width: 100%;
		display: grid;
		grid-gap: 5px;
		grid-template-columns: 15% 84%;
	    grid-template-areas:
			"sidebar content";

		.sidebar {
			grid-area: sidebar;
			float: left;
			// width: 19.1489%;
			padding: 15px;
			ul {
				list-style: none;
			}
			a {
				text-decoration: none;				
			}
		}
		.content {
			grid-area: content;
			float: right;
			// width: 79.7872%;
			padding: 15px;
		}

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
		   grid-template-areas:
		   	"sidebar" 
		   	"content";
		}
	}
</style>
