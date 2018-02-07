<template>
  <div class="text-center">
    <transition name="fade" appear>
      <logo class="color-primary logo" />
    </transition>
    <h1 class="h2">Loop</h1>
    <p class="text-large">"Why going in circles?"</p>
    <p><strong>0.3.0 Beta</strong></p>
    <p>
        Loop aims for flexibility and customization being a fellow traveller in CSS development.<br>
        Not imposing any style and based on variables, it allows the addition and the removal of rules and properties with ease to match anybody needs.<br>
        The goal is to use the strict minimum, keeping the css file light and small without a bunch of superfluous rules and components.
    <br>

    </p>
    <p>Loop differentiates components and utilities with semantic for more clarity</p>
    <ul class="list-unstyle list-center">
        <li><code class="color-secondary">oo-componentName</code>loop attribute for component</li>
        <li><code>.utilityName</code>class attribute for utility.</li>
    </ul>
    <p><strong>Beware</strong><br>The loop attribute is not a valid html5 attribute.<br>
      If it does concern you, set the variable <code class="color-info">$loop-component-html5-validity</code> to true<br>
      Loop components will be then available through the data attribute <code class="color-secondary">data-oo-componentName</code>.
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
    return {}
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
