<template>
	<div>
		<div class="grid">
			<div class="grid-col-12">
				Grid Layout				
			</div>
			<p class="grid-col-12"> Regular grid</p>
			<template v-for="n in 12" >
				<div class="grid grid-col-12">
					<div :class="`grid-col-${n} grid-item`">
						.grid-col-{{n}}
					</div>				
				</div>
			</template>
			<p class="grid-col-12">
				Sample Grids
			</p>
			<div class="grid grid-col-12">
				<div class="grid-col-3 grid-item">.grid-col-3</div>
				<div class="grid-col-9 grid-item">.grid-col-9</div>
				<div class="grid-col-4 grid-col-xs-12 grid-item">.grid-col-4.grid-col-xs-12</div>
				<div class="grid-col-4 grid-item">.grid-col-4</div>
				<div class="grid-col-4 grid-item">.grid-col-4</div>
				<div class="grid-col-2 grid-item">.grid-col-2</div>
				<div class="grid-col-5 grid-item">.grid-col-5</div>
				<div class="grid-col-3 grid-item">.grid-col-3</div>
				<div class="grid-col-2 grid-item">.grid-col-2</div>
			</div>
			<div class="grid-col-3">
				Grip Gaps
			</div>
			<div class="grid-col-9">
				<button v-for="n in 15" @click="gap = n"> gap size {{n}}</button>
			</div>
			<div class="grid grid-col-12" :class="[gapClass]">
				<div class="grid-col-3 grid-item">.grid-col-3</div>
				<div class="grid-col-9 grid-item">.grid-col-9</div>
				<div class="grid-col-4 grid-col-xs-12 grid-item">.grid-col-4.grid-col-xs-12</div>
				<div class="grid-col-4 grid-item">.grid-col-4</div>
				<div class="grid-col-4 grid-item">.grid-col-4</div>
				<div class="grid-col-2 grid-item">.grid-col-2</div>
				<div class="grid-col-5 grid-item">.grid-col-5</div>
				<div class="grid-col-3 grid-item">.grid-col-3</div>
				<div class="grid-col-2 grid-item">.grid-col-2</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Grid',
	props: {
	},
	data: () => ({
		gap: 10
	}),
	computed: {
		gapClass () {
			return `gap-${this.gap}`
		}
	},
	methods: {
	},
}
</script>
<style lang="scss" scoped>
	.grid-item {
		border: 1px solid #000;
		padding: 10px;

	}
	button {
		background-color: #000;
		color: #fff;
	}
</style>
