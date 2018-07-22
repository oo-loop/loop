<template>
  <div class="text-center">
    <transition name="fade" appear>
      <logo class="color-primary logo" />
    </transition>
    <h1 class="h2">Loop</h1>
    <p class="text-large font-italic">"Why go in circles?"</p>
    <h2 class="h4 mb-20">SCSS Companion for Front-end Developer</h2>
    <p><a href="https://github.com/oo-loop/loop" title="See on GitHub"><img src="/static/assets/github.png" height="20" alt="GitHub Page"></a>
    <a class="ml-10" href="https://www.npmjs.com/package/oo-loop" title="See on NPM"><img src="https://img.shields.io/npm/v/oo-loop.svg?style=flat-square" alt="Latest version on NPM"></a></p>
    <div oo-row="align-center">
      <div oo-col="s10@sm s8@md s6@lg">
        <h3 class="h4">Introduction</h3>
        <p>Have you ever worked on a project with your go-to css framework realizing that you were only using 10% of it. You had to add your own utilities, your own components and when trying to reuse something from its library, you actually had to overwrite some rules, tweak it, in order to reproduce what you wish for.<br>
        Have you ever wonder if the framework you were using was a real fit?<br>
        Loop has been developed out of that feeling to overcome this problem.</p>
        <h3 class="h4">Loop</h3>
        <p>
          Loop wants to reconsider the way CSS is created and used, aiming to make it more maintainable, readable and expressive.
        </p>
        <p>
          Loop works towards flexibilty and customization to give the developer complete control on his project letting him create his own set of utilities.<br>
          It is specifically based on variables to facilitate the addition and removal of rules and properties.
        </p>
        <p>
          Loop is not a framework providing any possible existing components. Its philosophy is to be non-opinionated and to be more like a companion for CSS development assisting the developer matching their styles with their design needs.
        </p>

        <h3 class="h4">Semantic</h3>
        <p>Loop differentiates components and utilities with semantic for more clarity</p>
        <ul class="list-unstyle list-center">
            <li><code class="color-secondary">oo-componentName</code> loop attribute for components</li>
            <li><code>.utilityName</code> class attribute for utilities.</li>
        </ul>

        <h3 class="h4">Beware</h3>
        <p>The loop attribute is not a valid html5 attribute.<br>
          If it does concern you, set the variable <code class="color-info">$loop-component-html5-validity</code> to true<br>
          Loop components will be then available through the data attribute <code class="color-secondary">data-oo-componentName</code>.
        </p>

        <h3 class="h4">Start</h3>
        <code>yarn add oo-loop</code> or <code>npm install oo-loop</code>
      </div>
    </div>
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
