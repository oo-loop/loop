<template>
  <div class="text-center">
    <transition name="fade" appear>
      <logo class="color-primary logo" />
    </transition>
    <h1 class="h2">Loop</h1>
    <p class="text-large">"Why going into Circles?"</p>
    <p><strong>v 0.2.0 Alpha</strong></p>
    <p>
        Loop aims for flexibility and customization allowing the addition and removal of rules through variables.<br>
        The goal is to use the strict minimum, keeping the css file light and small without a bunch of superfluous rules and components.
    </p>
    <p>Loop differentiates components and utilities with semantic for more clarity<br>
      The loop attribute for component<code class="color-secondary">oo-componentName</code><br>
      The class attribute for utility<code>.utilityName</code>.</p>
    <p><strong>Beware</strong><br>The loop attribute is not a valid html5 attribute.<br>
      If it is important for you, set the variable <code class="color-info">$loop-component-html5-validity</code> to true<br>
      Loop components will be then avaiable through the data attribute <code class="color-secondary">data-oo-componentName</code>.
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
