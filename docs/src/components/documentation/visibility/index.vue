<template>
	<div>
		<h1 class="title">Visibility</h1>
		<p class="text-large">Based on hidden status</p>
		<p>Hide elements <strong>from</strong> the available breakpoints through the classes <code>.hidden</code> <code>.hidden@sm</code> <code>.hidden@md</code> <code>.hidden@lg</code></p>
		<div class="bg-secondary wrapper -tiny text-center mb-30">
			<div oo-column="row gutter-tiny">
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@sm">.</span>h<span class="hidden!@sm">idden</span>
					</div>
				</div>
			</div>
			<div oo-column="row gutter-tiny">
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>@sm</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>@sm</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>@sm</div>
				</div>
			</div>
			<div oo-column="row gutter-tiny">
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>@md
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>@md
					</div>
				</div>
			</div>
			<div oo-column="row gutter-tiny v-gutter-less">
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>@lg</span>
					</div>
				</div>
			</div>
		</div>

		<p>Hide elements <strong>to</strong> the available breakpoints through the classes <code>.hidden!@sm</code> <code>.hidden!@md</code> <code>.hidden!@lg</code></p>
		<div class="bg-secondary wrapper -tiny text-center mb-30">
			<div oo-column="row gutter-tiny">
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
			</div>
			<div oo-column="row gutter-tiny">
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>!@sm
					</div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
			</div>
			<div oo-column="row gutter-tiny">
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>!@md
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>!@md
					</div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
				</div>
			</div>
			<div oo-column="row gutter-tiny v-gutter-less">
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>!@lg
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>!@lg
					</div>
				</div>
				<div oo-column="col">
					<div class="color-primary bordered">
						<span class="hidden!@md">.hidden</span>!@lg
					</div>
				</div>
				<div oo-column="col">
					<div class="bg-primary bordered"><br></div>
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
