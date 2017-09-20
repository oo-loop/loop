<template>
  <div class="hello">
    <transition name="fade" appear>
      <logo class="text-primary" height="350" />
    </transition>
    <h1 class="h2">Loop</h1>
    <p>"Why going into Circles?"</p>
  </div>
</template>

<script>
import logo from '../logo'

export default {
  name: 'hello',
  components: {
      logo
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
    .hello {
      text-align: center;
      align-self: center;
    }
</style>
