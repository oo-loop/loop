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
	body,html {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin: 0 auto;
	}
</style>