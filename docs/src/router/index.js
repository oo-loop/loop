import Vue from 'vue'
import Router from 'vue-router'

import Intro from 'docs/introduction'
import Type from 'docs/type'
import Column from 'docs/column'
import Grid from 'docs/grid'
import Form from 'docs/form'
import Button from 'docs/button'
import Spacing from 'docs/spacing'
import TextUtilities from 'docs/text-utilities'
import Colors from 'docs/colors'
import Float from 'docs/float'
import Visibility from 'docs/visibility'

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
			path: '/form',
			name: 'form',
			component: Form
		},
		{
			path: '/button',
			name: 'button',
			component: Button
		},
		{
			path: '/spacing',
			name: 'spacing',
			component: Spacing
		},
		{
			path: '/text-utilities',
			name: 'text-utilities',
			component: TextUtilities
		},
		{
			path: '/colors',
			name: 'colors',
			component: Colors
		},
		{
			path: '/float',
			name: 'float',
			component: Float
		},
		{
			path: '/visibility',
			name: 'visibility',
			component: Visibility
		}
	]
})
