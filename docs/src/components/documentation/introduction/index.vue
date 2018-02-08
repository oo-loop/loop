<template>
  <div class="text-center">
    <transition name="fade" appear>
      <logo class="color-primary logo" />
    </transition>
    <h1 class="h2">Loop</h1>
    <p class="text-large">"Why going in circles? Need a partner?"</p>
    <p><strong>0.3.1 Beta</strong></p>
    <p>
        Loop wants to reconsider the way CSS is created, aiming to make it more maintainable, readable and expressive.<br>
        It also aims for flexibility and customization without a bunch of superfluous rules and components.<br>
        Not opinionated about any style and based on variables, it allows the addition and removal of rules and properties with ease.<br>
        Being like a partner for CSS development, it assists the developer matching their styles with their design needs.
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
