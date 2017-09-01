import Vue from 'vue'
import Router from 'vue-router'
import intro from 'docs/introduction'
import type from 'docs/type'
import column from 'docs/column'
import grid from 'docs/grid'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'introduction',
			component: intro,
			alias: '/introduction',
		},
		{
			path: '/type',
			name: 'type',
			component: type
		},
		{
			path: '/column',
			name: 'column',
			component: column
		},
		{
			path: '/grid',
			name: 'grid',
			component: grid
		}
	]
})
