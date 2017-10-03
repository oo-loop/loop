<template>
  <div class="text-center">
    <transition name="fade" appear>
      <logo class="text-primary logo" />
    </transition>
    <h1 class="h2">Loop</h1>
    <p class="text-large">"Why going into Circles?"</p>
    <p><strong>v 0.0.1 Beta</strong></p>
    <p>
        Loop aims for flexibility and customization allowing the addition and removal of rules through variables.<br>
        The goal is to use the strict minimum, keeping the css file light and small without a bunch of superfluous rules and components.
    </p>
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

<style lang="scss" scoped>
    .logo {
        height: auto;
        max-width: 100%;
        max-height: 350px;
    }
</style>
