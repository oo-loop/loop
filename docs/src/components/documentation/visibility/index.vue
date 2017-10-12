<template>
	<div>
		<h1 class="title">Visibility</h1>
		<p class="text-large">Based on hidden status</p>
		<p>Hide elements <strong>from</strong> the available breakpoints through the classes <code>.hidden</code> <code>.hidden@sm</code> <code>.hidden@md</code> <code>.hidden@lg</code></p>
		<div class="bg-secondary wrapper -tiny text-center mb-30">
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
			</div>
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>@sm</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>@sm</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>@sm</div>
				</div>
			</div>
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>@md
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>@md
					</div>
				</div>
			</div>
			<div class="columns -gutter-tiny -v-gutter-less">
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>@lg</span>
					</div>
				</div>
			</div>
		</div>

		<p>Hide elements <strong>to</strong> the available breakpoints through the classes <code>.hidden!@sm</code> <code>.hidden!@md</code> <code>.hidden!@lg</code></p>
		<div class="bg-secondary wrapper -tiny text-center mb-30">
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
			</div>
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>!@sm
					</div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
			</div>
			<div class="columns -gutter-tiny">
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>!@md
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>!@md
					</div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
			</div>
			<div class="columns -gutter-tiny -v-gutter-less">
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>!@lg
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>!@lg
					</div>
				</div>
				<div class="column">
					<div class="text-primary border">
						<span class="hidden!@md">.hidden</span>!@lg
					</div>
				</div>
				<div class="column">
					<div class="bg-primary border"><br></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'

export default {
	name: 'Utilities',
	components: {
		prettyCode,
		markup
	},
	data: () => ({
		html: {}
	}),
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '~loop/variables';
</style>
