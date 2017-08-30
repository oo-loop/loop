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

    .title {
        font-size: 7rem;
        font-weight: 100;
    }
</style>
