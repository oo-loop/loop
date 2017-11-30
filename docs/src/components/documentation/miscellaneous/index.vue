<template>
	<div>
		<h1 class="title">Miscellaneous</h1>
		<p class="text-large">A bunch of small handy utilities</p>

		<h3 id="rounded"><a href="#rounded">#</a> Rounded</h3>
		<p>Add the class <code>.rounded</code> to any elements</p>

		<p><input class="input rounded" placeholder="A Rounded Form"></p>
		<p><button class="rounded" oo-button="primary">A Rounded Button</button></p>

		<h3 class="mt-35" id="bordered"><a href="#bordered">#</a> Bordered</h3>
		<p>Add the class <code>.bordered</code> to any elements</p>
		<div class="wrapper rounded bordered">Rounded Bordered Block</div>

		<h3 class="mt-35" id="disabled"><a href="#disabled">#</a> Disabled</h3>
		<p>Add the class <code>.disabled</code> to a form element or button element to get a disabled <strong>look</strong>.<br>
		if you really want to make the element disabled, please use the corresponding html attribute</p>

		<input class="input disabled mb-10" disabled value="Disabled input">
		<span class="select disabled mb-10">
		  <select disabled>
		    <option value="1">Disabled Option</option>
		  </select>
		</span>
		<input class="checkbox disabled mb-10" id="checkbox-1" type="checkbox" disabled>
		<label class="mb-10" for="checkbox-1">Disabled Checkbox</label>

		<input class="radio disabled" id="radio-1" type="radio" name="radio" disabled>
		<label class="mb-10" for="radio-1">Disabled Radio</label>

		<a oo-button class="disabled mb-10">disabled button</a><br>
		<a oo-button="primary" class="disabled mb-10">disabled primary button</a><br>
		<button oo-button="success" class="disabled mb-10" disabled>disabled success button</button><br>
		<button oo-button="warning outline" class="disabled" disabled>disabled warning outline button</button><br>

		<h3 class="mt-35" id="full"><a href="#full">#</a> Full</h3>
		<p>Add the class <code>.full</code> to any elements to take the full width of the parent container.</p>
		<button class="full" oo-button="primary">Button gets a full width</button>

		<h3 class="mt-35" id="responsive"><a href="#responsive">#</a> Responsive</h3>
		<p>Add the class <code>.responsive</code> for your element to respond to the size of the screen.</p>
		<logo class="responsive color-primary" width="500"/>

	</div>
</template>

<script>
import prettyCode from '@/components/pretty-code'
import markup from '@/components/pretty-code/markup'
import logo from '@/components/documentation/logo'

export default {
	name: 'Utilities',
	components: {
		prettyCode,
		markup,
		logo
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
