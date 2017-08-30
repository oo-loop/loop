import Vue from 'vue'
import Router from 'vue-router'
import intro from 'docs/introduction'
import type from 'docs/type'
import grid from 'docs/grid'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		component: intro,
		alias: '/introduction',
	},
	{
		path: '/type',
		component: type
	},
	{
		path: '/grid',
		component: grid
	}
	]
})