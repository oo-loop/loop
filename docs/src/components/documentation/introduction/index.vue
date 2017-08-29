<template>
  <div class="hello">
    <transition name="fade" appear>
      <logo height="350" />
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity 500ms cubic-bezier(0.85, 1, 0.16, 0.6);
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>
