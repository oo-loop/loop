<template>
    <documentation />
</template>

<script>
import documentation from './components/documentation'

export default {
  name: 'app',
  components: {
    documentation
  }
}
</script>
<style lang="scss">
	@import '~loop/loop';
    // @import '../node_modules/code-prettify/loader/skins/desert.css';
    @import '../node_modules/code-prettify/src/prettify.css';
</style>
