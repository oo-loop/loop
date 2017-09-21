<template>
    <code class="text-strong">&lt;<slot />&gt;</code>
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
