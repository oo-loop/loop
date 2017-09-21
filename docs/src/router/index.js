import Vue from 'vue'
import Router from 'vue-router'

import Intro from 'docs/introduction'
import Type from 'docs/type'
import Column from 'docs/column'
import Grid from 'docs/grid'
import TextUtilities from 'docs/text-utilities'
import Spacing from 'docs/spacing'
import Float from 'docs/float'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'introduction',
			component: Intro,
			alias: '/introduction',
		},
		{
			path: '/type',
			name: 'type',
			component: Type
		},
		{
			path: '/column',
			name: 'column',
			component: Column
		},
		{
			path: '/grid',
			name: 'grid',
			component: Grid
		},
		{
			path: '/text-utilities',
			name: 'text-utilities',
			component: TextUtilities
		},
		{
			path: '/spacing',
			name: 'spacing',
			component: Spacing
		},
		{
			path: '/float',
			name: 'float',
			component: Float
		}
	]
})
