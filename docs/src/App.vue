<template>
  <div id="app">
    <hello></hello>
    <documentation></documentation>
  </div>
</template>

<script>
import Hello from './components/Hello'
import documentation from './components/documentation'

export default {
  name: 'app',
  components: {
    Hello,
    documentation
  }
}
</script>
