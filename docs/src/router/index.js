import Vue from 'vue'
import Router from 'vue-router'

import Intro from 'docs/introduction'
import Type from 'docs/type'
import Container from 'docs/container'
import Column from 'docs/column'
import Grid from 'docs/grid'
import Form from 'docs/form'
import Button from 'docs/button'
import Spacing from 'docs/spacing'
import TextUtilities from 'docs/text-utilities'
import ColorUtilities from 'docs/color-utilities'
import Float from 'docs/float'
import Visibility from 'docs/visibility'
import Wrapper from 'docs/wrapper'
import Miscellaneous from 'docs/miscellaneous'
import CreateYourOwn from 'docs/create-your-own'

Vue.use(Router)

export default new Router({
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
			path: '/container',
			name: 'container',
			component: Container
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
			path: '/color-utilities',
			name: 'color-utilities',
			component: ColorUtilities
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
		},
		{
			path: '/wrapper',
			name: 'wrapper',
			component: Wrapper
		},
		{
			path: '/miscellaneous',
			name: 'miscellaneous',
			component: Miscellaneous
		},
		{
			path: '/create-your-own',
			name: 'create-your-own',
			component: CreateYourOwn
		}
	]
})
