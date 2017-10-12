<template>
    <code class="font-weight-bold">&lt;<slot />&gt;</code>
</template>

<script>
    export default {
        name: 'markup',
    }
</script>

<style lang="scss" scoped>
    @import '~loop/variables';
    code { color: darken($color-primary, 10%) }
</style>
