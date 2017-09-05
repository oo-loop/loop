<template>
	<div>
		<h1 class="title">Spacing</h1>
		<p class="text-large">Utilities to space out elements from each others.</p>
		<p>Two types of classes are available, <code>.mt-*</code> (margin-top) and <code>.mb-*</code> (margin-bottom).<br>
		It is based on pixels to give a better understanding of the space representation. 11 values are available through 0 to 50 for both top and bottom.</p>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-0</code></div>
			<div class="col">margin-top: 0;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-5</code></div>
			<div class="col">margin-top: 5px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-10</code></div>
			<div class="col">margin-top: 10px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-15</code></div>
			<div class="col">margin-top: 15px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-20</code></div>
			<div class="col">margin-top: 20px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-25</code></div>
			<div class="col">margin-top: 25px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-30</code></div>
			<div class="col">margin-top: 30px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-35</code></div>
			<div class="col">margin-top: 35px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-40</code></div>
			<div class="col">margin-top: 40px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-45</code></div>
			<div class="col">margin-top: 45px;</div>
		</div>
		<div class="row -gap-tiny">
			<div class="col -slim"><code>.mt-50</code></div>
			<div class="col">margin-top: 50px;</div>
		</div>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'

export default {
	name: 'Type',
	components: {
		prettyCode
	},
	data: () => ({
		html: {}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import "~loop/variables";
</style>
